---
title: "FinVision"
summary: "A personal finance platform for young people, combining budgeting, investment simulation, financial education and an AI assistant, with concurrency-safe money operations."
stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Google Gemini"]
repo: "https://github.com/DariusCristian/finvision-personal-finance-platform"
image: "../../assets/projects/finvision.png"
order: 1
---

## The problem

Young people who want to manage their money usually juggle separate apps for expenses, market news, learning and trying out investing. FinVision brings all of it into one platform. It started as my bachelor's thesis, with requirements grounded in original research: a survey of 55 respondents and a Pareto analysis of the problems they rated most severe.

## What it does

- **Budgeting** with recurring transactions, multi-currency support (RON, EUR, USD) and totals in the user's base currency
- **Investment simulation** for crypto and stocks, either with a virtual demo balance or funded only from money saved in the budget
- **Finny, an AI assistant** built on Google Gemini, which answers common questions from the user's own data and screens every message before calling the model
- **A learning center** with articles, quizzes, XP and levels, plus aggregated financial news

## Hardening after graduation

After the thesis, I audited the project and fixed what I found. The most serious issue: parallel requests could spend the same balance twice. Five simultaneous top-ups from a wallet that could afford one all succeeded, because each request read the balance, checked it and saved a new value separately. Every balance change is now a single conditional atomic update in MongoDB, and changes that span several documents run in one transaction. A dedicated concurrency test suite fires parallel requests at every money endpoint and checks the exact outcome.

I also added refresh-token rotation and revocation, rate limiting on login and the AI assistant, strong-secret validation at startup, and multi-currency totals based on historical exchange rates.

## How it's built

The backend is a modular monolith in Node.js and Express on MongoDB, organized into feature modules with Zod validation. Every third-party service sits behind its own client module, so switching providers, from OpenAI to Gemini and from GDELT to MarketAux, stayed inside a single layer. The frontend is a React and TypeScript single-page app with Tailwind CSS and a dark mode.

## Testing

- 117 server tests on Node's built-in test runner with Supertest
- Tests run against an in-memory MongoDB replica set, so transactions behave as in production, with no calls to real external services
- A concurrency suite in which every test failed on the code before the fix
