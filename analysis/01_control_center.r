library(tidyverse)
library(cowplot)
library (brms)
options (mc.cores=parallel::detectCores ()) # Run on multiple cores
# library(nnet)
# devtools::install_github('michael-franke/bayes_mixed_regression_tutorial/faintr', build_vignettes = TRUE)
library(faintr)

source('02_data_preparation.r')
source('03_plotting.r')
source('04_analyses.r')

