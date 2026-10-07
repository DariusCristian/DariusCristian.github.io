---
title: "FinVision"
summary: "A personal finance platform for young people, combining budgeting, investment simulation, financial education and an AI assistant."
stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Google Gemini"]
repo: "https://github.com/DariusCristian/finvision-personal-finance-platform"
order: 1
---

## The problem

Young people who want to manage their money usually juggle separate apps for expenses, market news, learning and advice. FinVision brings all of it into one platform. It was my bachelor's thesis, and its requirements came from original research: a survey of 55 respondents and a Pareto analysis of the problems they rated most severe.

## How it's built

The backend is a modular monolith of 10 domains built with Node.js and Express, on MongoDB. Third-party services, like the AI assistant and market news, sit behind dedicated client modules. When I switched AI providers from OpenAI to Google Gemini, and news providers from GDELT to MarketAux, each migration changed a single file.

## Highlights

- Budgeting, an investment simulator, financial education modules and an AI assistant in one app
- Integration and smoke tests with Supertest and an in-memory MongoDB
- Deterministic tests for the AI assistant's guard against off-topic questions