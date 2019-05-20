##########################################
# plot main data as a function of 
# behavioral types in other parts
##########################################

get_group_plot = function(sp_type = "pragmatic", success = 1) {
  group_data = filter(d_analysis, 
                      tvj_semprag_type == sp_type, 
                      training_successful == success) %>% 
    mutate(condition = factor(condition, ordered = T, 
                              levels = c("all", "none", "number", "ad_hoc", "some")),
           coplayer_type = factor(coplayer_type, ordered = T, 
                                  levels = c("cooperative", "unstrategic", "strategic")),
           rsp = factor(rsp, ordered = T,
                        levels = c("win", "lose", "opt_out"))) 
  N = group_data$submission_id %>% unique() %>% length()
  group_data %>% ggplot(aes(x = rsp)) + 
    geom_bar(aes( y = ..prop.., group = 1)) +
    # coord_flip() +
    facet_grid(coplayer_type ~ condition) +
    ggtitle(paste0(sp_type, " responders with ", 
                   ifelse(success, "successful", "unsuccessful"), 
                   " training (N=", N, ")")) +
    xlab("") + ylab("") +
    theme(axis.text.x = element_text(angle = 45, hjust = 1)) + 
    scale_y_continuous(breaks = c(0, 0.5, 1))
}

prag_success = get_group_plot("pragmatic", 1)
prag_fail = get_group_plot("pragmatic", 0)
sem_success = get_group_plot("semantic", 1)
sem_fail = get_group_plot("semantic", 0)

plot_grid(
  prag_success,
  sem_success,
  prag_fail,
  sem_fail,
  labels = c("A", "B", "C", "D"), 
  ncol = 2) %>% show()

ggsave(filename = "pics/counts.pdf", width = 12, height = 9)
