---
title: "Premier League Match Predictor"
summary: "A statistical model that predicts Premier League match outcomes as probabilities and is scored against baselines on held-out data."
stack: ["Python", "pandas", "statsmodels", "SciPy", "GitHub Actions", "JavaScript"]
repo: "https://github.com/DariusCristian/football-predictor"
demo: "https://dariuscristian.github.io/football-predictor/"
order: 2
---

## What it does

The model predicts home win, draw and away win probabilities for upcoming Premier League matches. Every prediction is stored before kickoff and scored once the result is in, so live performance can't be adjusted after the fact.

## How it works

A Poisson regression estimates each team's attacking and defensive strength plus home advantage, which gives a probability for every possible scoreline. A small ridge penalty keeps the fit stable for newly promoted teams with very little data.

## Evaluation

I tuned on a validation season and kept a frozen test window for the final numbers, with walk-forward prediction so the model never sees future matches. On the test set, it achieved 5.3% lower log loss than a league-average baseline. Along the way, an earlier 5.4% result turned out to be mostly selection bias, which taught me why a proper held-out split matters.

## Highlights

- 86 automated tests with pytest
- Every experiment logged, including negative results
- Static site with fixtures, match details and the prediction record, deployed by GitHub Actions