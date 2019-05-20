set.seed(2019)

######################################################
## logistic regression on win-move vs other proportion
#####################################################

## run the model
model_binomial = brm(
  formula = win_move ~ coplayer_type * condition * tvj_semprag_type + (1 | item),
  family = "bernoulli",
  data = filter(d_analysis, training_successful == 1),
  prior = c(prior_string("normal(0,30)", class = "b")),
  iter = 3000, 
  warmup = 1000,
  control = list(max_treedepth = 15)
)

## extract samples from the posterior
post_samples_binomial = posterior_samples(model_binomial) %>% 
  as_tibble() %>% 
  select( - lp__) %>% 
  select(-contains("_item"))
newcolnames = str_replace(names(post_samples_binomial), "b_", "") %>% 
  str_replace("condition", "") %>% 
  str_replace("coplayer_type", "") %>% 
  str_replace("tvj_semprag_type", "")
names(post_samples_binomial) = newcolnames

## plot coefficients for dummy-coded coefficients
bayesplot::mcmc_intervals(post_samples_binomial)


#################################
## main effect of Sem-Prag Type?
#################################

## descriptive mean win-choice proportion
filter(d_analysis, training_successful == 1) %>% 
  group_by(tvj_semprag_type) %>% 
  summarize(mean_win_choice = mean(win_move))

# pragmatic players are more likely to choose the winning move
compare_groups(
  model_binomial,
  higher = list(tvj_semprag_type = "pragmatic"),
  lower = list()
)

##################################
## main effects of Co-Player Type?
##################################

## descriptive mean win-choice proportion
filter(d_analysis, training_successful == 1) %>% 
  group_by(coplayer_type) %>% 
  summarize(mean_win_choice = mean(win_move)) %>% 
  arrange(- mean_win_choice)

compare_groups(
  model_binomial,
  higher = list(coplayer_type = "cooperative"),
  lower = list(coplayer_type = "strategic")
)

compare_groups(
  model_binomial,
  higher = list(coplayer_type = "strategic"),
  lower = list(coplayer_type = "unstrategic")
)

## interpretation:
## highest proportion of win-choices for cooperative, then strategic, then unstrategic

#############################
## main effects of condition?
#############################

## descriptive mean win-choice proportion
filter(d_analysis, training_successful == 1) %>% 
  group_by(condition) %>% 
  summarize(mean_win_choice = mean(win_move)) %>% 
  arrange(- mean_win_choice)

compare_groups(
  model_binomial,
  higher = list(condition = "all"),
  lower = list(condition = "number")
)

compare_groups(
  model_binomial,
  higher = list(condition = "all"),
  lower = list(condition = "none")
)

compare_groups(
  model_binomial,
  higher = list(condition = "none"),
  lower = list(condition = "some")
)

compare_groups(
  model_binomial,
  higher = list(condition = "some"),
  lower = list(condition = "ad_hoc")
)

## interpretation:
## ALL = NONE = NUMBER > SOME > AD HOC
## ALL, NONE and NUMBER partition together and are not distinct, but
## SOME has smaller win-choice proportion, as NONE and
## AD HOC has smaller win-choice proportion as SOME

########################################################
## main effect of Sem-Prag Type for each Co-Player Type?
########################################################

## pragmatic - cooperative
## ALL = NONE = NUMBER = SOME > AD HOC
filter(d_analysis, training_successful == 1, tvj_semprag_type == "pragmatic", coplayer_type == "cooperative") %>% 
  group_by(condition) %>% 
  summarize(mean_win_choice = mean(win_move)) %>% 
  arrange(- mean_win_choice)

# SOME > AD HOC ? -> yes
compare_groups(
  model_binomial,
  higher = list(tvj_semprag_type = "pragmatic", coplayer_type = "cooperative", condition = "some"),
  lower = list(tvj_semprag_type = "pragmatic", coplayer_type = "cooperative", condition = "ad_hoc")
)

# NUMBER > SOME ? -> no
compare_groups(
  model_binomial,
  higher = list(tvj_semprag_type = "pragmatic", coplayer_type = "cooperative", condition = "number"),
  lower = list(tvj_semprag_type = "pragmatic", coplayer_type = "cooperative", condition = "some")
)

# ALL > NUMBER -> no!
compare_groups(
  model_binomial,
  higher = list(tvj_semprag_type = "pragmatic", coplayer_type = "cooperative", condition = "all"),
  lower = list(tvj_semprag_type = "pragmatic", coplayer_type = "cooperative", condition = "number")
)

## pragmatic - unstrategic
## -> nothing is different!
filter(d_analysis, training_successful == 1, tvj_semprag_type == "pragmatic", coplayer_type == "unstrategic") %>% 
  group_by(condition) %>% 
  summarize(mean_win_choice = mean(win_move)) %>% 
  arrange(- mean_win_choice)

# AD HOC > NUMBER -> no!
compare_groups(
  model_binomial,
  higher = list(tvj_semprag_type = "pragmatic", coplayer_type = "unstrategic", condition = "ad_hoc"),
  lower = list(tvj_semprag_type = "pragmatic", coplayer_type = "unstrategic", condition = "number")
)

# pragmatic - strategic
## all the same
## -> only ALL, NUMBER and NONE are bigger than AD HOC, nothing else

filter(d_analysis, training_successful == 1, tvj_semprag_type == "pragmatic", coplayer_type == "strategic") %>% 
  group_by(condition) %>% 
  summarize(mean_win_choice = mean(win_move)) %>% 
  arrange(- mean_win_choice)

# NONE > NUMBER -> no
compare_groups(
  model_binomial,
  higher = list(tvj_semprag_type = "pragmatic", coplayer_type = "strategic", condition = "none"),
  lower = list(tvj_semprag_type = "pragmatic", coplayer_type = "strategic", condition = "number")
)

# NUMBER > SOME -> no!
compare_groups(
  model_binomial,
  higher = list(tvj_semprag_type = "pragmatic", coplayer_type = "strategic", condition = "number"),
  lower = list(tvj_semprag_type = "pragmatic", coplayer_type = "strategic", condition = "some")
)

# NONE > SOME -> no
compare_groups(
  model_binomial,
  higher = list(tvj_semprag_type = "pragmatic", coplayer_type = "strategic", condition = "none"),
  lower = list(tvj_semprag_type = "pragmatic", coplayer_type = "strategic", condition = "some")
)

# SOME > AD HOC -> maybe / barely
compare_groups(
  model_binomial,
  higher = list(tvj_semprag_type = "pragmatic", coplayer_type = "strategic", condition = "some"),
  lower = list(tvj_semprag_type = "pragmatic", coplayer_type = "strategic", condition = "ad_hoc")
)

# NUMBER > AD HOC -> yes
compare_groups(
  model_binomial,
  higher = list(tvj_semprag_type = "pragmatic", coplayer_type = "strategic", condition = "number"),
  lower = list(tvj_semprag_type = "pragmatic", coplayer_type = "strategic", condition = "ad_hoc")
)

## semantic - cooperative
## ALL = NONE = NUMBER > SOME > AD HOC

filter(d_analysis, training_successful == 1, tvj_semprag_type == "semantic", coplayer_type == "cooperative") %>% 
  group_by(condition) %>% 
  summarize(mean_win_choice = mean(win_move)) %>% 
  arrange(- mean_win_choice)

# ALL > NUMBER ? -> no
compare_groups(
  model_binomial,
  higher = list(tvj_semprag_type = "semantic", coplayer_type = "cooperative", condition = "all"),
  lower = list(tvj_semprag_type = "semantic", coplayer_type = "cooperative", condition = "number")
)

# NUMBER > SOME ? -> yes
compare_groups(
  model_binomial,
  higher = list(tvj_semprag_type = "semantic", coplayer_type = "cooperative", condition = "number"),
  lower = list(tvj_semprag_type = "semantic", coplayer_type = "cooperative", condition = "some")
)

# SOME > AD HOC ? -> yes
compare_groups(
  model_binomial,
  higher = list(tvj_semprag_type = "semantic", coplayer_type = "cooperative", condition = "some"),
  lower = list(tvj_semprag_type = "semantic", coplayer_type = "cooperative", condition = "ad_hoc")
)

## semantic - unstrategic
## ALL = NUMBER = NONE > SOME = AD HOC

filter(d_analysis, training_successful == 1, tvj_semprag_type == "semantic", coplayer_type == "unstrategic") %>% 
  group_by(condition) %>% 
  summarize(mean_win_choice = mean(win_move)) %>% 
  arrange(- mean_win_choice)

# ALL > NUMBER ? -> no
compare_groups(
  model_binomial,
  higher = list(tvj_semprag_type = "semantic", coplayer_type = "unstrategic", condition = "all"),
  lower = list(tvj_semprag_type = "semantic", coplayer_type = "unstrategic", condition = "number")
)

# NUMBER > NONE ? -> no
compare_groups(
  model_binomial,
  higher = list(tvj_semprag_type = "semantic", coplayer_type = "unstrategic", condition = "number"),
  lower = list(tvj_semprag_type = "semantic", coplayer_type = "unstrategic", condition = "none")
)

# NONE > SOME  ? -> yes
compare_groups(
  model_binomial,
  higher = list(tvj_semprag_type = "semantic", coplayer_type = "unstrategic", condition = "none"),
  lower = list(tvj_semprag_type = "semantic", coplayer_type = "unstrategic", condition = "some")
)

# NUMBER > SOME  ? -> yes
compare_groups(
  model_binomial,
  higher = list(tvj_semprag_type = "semantic", coplayer_type = "unstrategic", condition = "number"),
  lower = list(tvj_semprag_type = "semantic", coplayer_type = "unstrategic", condition = "some")
)


# SOME > AD HOC ? -> no
compare_groups(
  model_binomial,
  higher = list(tvj_semprag_type = "semantic", coplayer_type = "unstrategic", condition = "some"),
  lower = list(tvj_semprag_type = "semantic", coplayer_type = "unstrategic", condition = "ad_hoc")
)

## semantic - strategic
## ALL = NUMBER = NONE > SOME = AD HOC

filter(d_analysis, training_successful == 1, tvj_semprag_type == "semantic", coplayer_type == "strategic") %>% 
  group_by(condition) %>% 
  summarize(mean_win_choice = mean(win_move)) %>% 
  arrange(- mean_win_choice)

# ALL > NUMBER ? -> no
compare_groups(
  model_binomial,
  higher = list(tvj_semprag_type = "semantic", coplayer_type = "strategic", condition = "all"),
  lower = list(tvj_semprag_type = "semantic", coplayer_type = "strategic", condition = "number")
)

# NUMBER > NONE ? -> no
compare_groups(
  model_binomial,
  higher = list(tvj_semprag_type = "semantic", coplayer_type = "strategic", condition = "number"),
  lower = list(tvj_semprag_type = "semantic", coplayer_type = "strategic", condition = "none")
)

# NONE > SOME  ? -> yes
compare_groups(
  model_binomial,
  higher = list(tvj_semprag_type = "semantic", coplayer_type = "strategic", condition = "none"),
  lower = list(tvj_semprag_type = "semantic", coplayer_type = "strategic", condition = "some")
)

# NUMBER > SOME  ? -> yes
compare_groups(
  model_binomial,
  higher = list(tvj_semprag_type = "semantic", coplayer_type = "strategic", condition = "number"),
  lower = list(tvj_semprag_type = "semantic", coplayer_type = "strategic", condition = "some")
)

# SOME > AD HOC ? -> yes
compare_groups(
  model_binomial,
  higher = list(tvj_semprag_type = "semantic", coplayer_type = "strategic", condition = "some"),
  lower = list(tvj_semprag_type = "semantic", coplayer_type = "strategic", condition = "ad_hoc")
)



