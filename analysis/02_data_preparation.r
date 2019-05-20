d = read_csv("../../data/06_sentence_select_with_training/data_raw_final.csv")

# check comments
d$comments %>% unique

# participants (gender, age...)
d %>% select(submission_id, gender) %>% unique() %>% group_by(gender) %>% summarize(count = n())
mean(d$age)
sd(d$age)

##########################################
# allocation to conditions
##########################################

message("Nr. of submissions for each co-player type:")
show(table(d$coplayer_type)/122)

##########################################
## color blindness
##########################################

color_blindness = filter(d, trial_type == "color_blindness_test") %>%
  select(submission_id, correct, response) %>%
  mutate(correct = ifelse(correct == response,1,0)) %>%
  group_by(submission_id) %>%
  summarize(color_blind = mean(correct) < 1)
color_blindness_failures = filter(color_blindness, color_blind == TRUE) %>% pull(submission_id)
message("Number of divergences on color blindness test: ", length(color_blindness_failures))
message("Inspect these to determine gravity of divergence!")

# add info to full data set
d = full_join(d, color_blindness, by = "submission_id")

# inspect colorblind failures for gravity:

filter(d, color_blind == TRUE, trial_type == "color_blindness_test") %>% 
  select(submission_id, correct, response)

## we do not exlcude anybody for a severe color-blindness

##########################################
# inspect data from training with feedback
##########################################

success_threshold = 0.5

d_training = filter(d, trial_type == "sentence_completion_training")

d_training_summary = d_training %>% 
  mutate(winning_move = ifelse(coplayer_type == "unstrategic", "red", "green"),
         winning_move_chosen = ifelse(winning_move == response, 1, 0),
         loosing_move = ifelse(coplayer_type == "unstrategic", "green", "red"),
         loosing_move_chosen = ifelse(loosing_move == response, 1, 0),
         distractor_move_chosen = ifelse(response == "false", 1, 0)) %>% 
  group_by(submission_id, coplayer_type, condition) %>% 
  summarize(win = mean(winning_move_chosen),
            loose = mean(loosing_move_chosen),
            dstrct = mean(distractor_move_chosen)) %>% 
  ungroup() %>% 
  gather(key = response, value = proportion, win, loose, dstrct) %>% 
  mutate(new_col_names = paste0("train_", condition, "_", response)) %>% 
  select(submission_id, coplayer_type, new_col_names, proportion) %>% 
  spread(key = new_col_names, value = proportion) %>% 
  group_by(submission_id) %>% 
  mutate(
    training_score = mean(c(train_all_win, train_none_win)),
    training_successful = ifelse(training_score > success_threshold, 1, 0)
  ) %>% 
  ungroup()

# show distribution of training scores (average sucess)
d_training_summary %>% ggplot(aes(x = training_score)) + geom_histogram() + facet_grid( ~coplayer_type)

d_training_summary %>% 
  group_by(coplayer_type) %>% 
  summarize(mean_score = mean(training_score))

d = full_join(d, select(d_training_summary, - coplayer_type), by = "submission_id")

message("Nr learned from training?")
d %>% select(submission_id, coplayer_type, training_successful) %>% 
  unique() %>% 
  group_by(coplayer_type, training_successful) %>% 
  summarize(count = n()) %>% show()

##########################################
# inspect data from TVJ task
##########################################

control_threshold = 0.7
semprag_threshold = 0.5

d_tvj = filter(d, trial_type == "truth_value_judgements") %>% 
  mutate(response = ifelse(response == "true", 1, 0))

d_tvj_summary = d_tvj %>% 
  group_by(submission_id, trigger, condition) %>% 
  summarize(mean_true = mean(response)) %>% 
  arrange(submission_id) %>% 
  ungroup() %>% 
  mutate(new_col_names = paste0("tvj_", trigger, "_", condition)) %>% 
  select(submission_id, new_col_names, mean_true) %>% 
  spread(key = "new_col_names", value = mean_true) 

d_tvj_controls = d_tvj %>% 
  filter( condition != "implicature" ) %>% 
  group_by(submission_id, trigger, condition) %>% 
  summarize(mean_true = mean(response)) %>% 
  arrange(submission_id) %>% 
  ungroup() %>% 
  mutate(control_score = ifelse(condition == "true", mean_true, 1-mean_true)) %>% 
  group_by(submission_id) %>% 
  summarize(tvj_control_mean = mean(control_score),
            tvj_control_fail = ifelse(tvj_control_mean < control_threshold, 1, 0))

message("Number of people who performed really badly in the TVJ: ", 
        d_tvj_controls$tvj_control_fail %>% sum())

d_tvj_implicatures = d_tvj %>% 
  filter( condition == "implicature", trigger != "number" ) %>% 
  group_by(submission_id, trigger, condition) %>% 
  summarize(mean_true = mean(response)) %>% 
  group_by(submission_id) %>% 
  summarize(tvj_implicature_mean = mean(mean_true),
            tvj_semprag_type = ifelse(tvj_implicature_mean <= semprag_threshold, 
                                      "pragmatic", "semantic"))

message("Number of participants who expected co-player to interpret pragmatically in TVJ: ", 
        sum(d_tvj_implicatures$tvj_semprag_type == "pragmatic"))

d = full_join(d, d_tvj_summary, by = "submission_id")
d = full_join(d, d_tvj_controls, by = "submission_id")
d = full_join(d, d_tvj_implicatures, by = "submission_id")

# exclude bad performers
d = filter(d, tvj_control_fail == 0)

##########################################
# looking at how many combinations we got
##########################################

d %>% filter(tvj_control_fail == 0) %>% 
  select(submission_id, 
         coplayer_type, 
         training_successful, 
         tvj_semprag_type, 
         tvj_control_fail) %>% 
  unique() %>% 
  group_by(coplayer_type, training_successful, tvj_semprag_type) %>% 
  summarize(count = n()) %>% show()

# e = d %>% filter(tvj_control_fail == 0) %>%
#   select(submission_id,
#          coplayer_type,
#          training_successful,
#          tvj_semprag_type,
#          tvj_control_fail) %>%
#   unique()
# View(e)


##########################################
# prepare subset of data for main analysis
##########################################

# filter and select the relevant bits for analysis
# code the responses as win/lose/opt_out
d_analysis = filter(d, trial_type == "sentence_completion") %>% 
  mutate(
    rsp = relevel(factor(
      ifelse(coplayer_type == "unstrategic",
             case_when(response == "red" ~ "win",
                       response == "green" ~ "lose",
                       TRUE ~ "opt_out"),
             case_when(response == "green" ~ "win",
                       response == "red" ~ "lose",
                       TRUE ~ "opt_out"))),
      ref = "win"),
    condition = relevel(factor(condition), ref = "all"),
    item = number,
    win_move = ifelse(rsp == "win", 1, 0)
  ) %>% 
  select(submission_id, item, coplayer_type, condition,
         training_score, training_successful,
         tvj_implicature_mean, tvj_semprag_type, 
         response, rsp, win_move)


