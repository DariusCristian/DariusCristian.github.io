---
title: "DocFlow"
summary: "A full-stack document approval platform with session-based security, enforced review rules, concurrency-safe decisions and 99 automated tests."
stack: ["Java 21", "Spring Boot", "Spring Security", "PostgreSQL", "React", "TypeScript", "Tailwind CSS", "Testcontainers"]
repo: "https://github.com/DariusCristian/document-approval-workflow-platform"
image: "../../assets/projects/docflow.png"
order: 3
---

## What it does

Authors write documents and submit them for review, and reviewers approve or reject them. Everyone can discuss a document in its comments. Every decision is recorded, so each document keeps a complete approval history.

The project focuses on what makes a business application trustworthy: real authentication and authorization, business rules that can't be bypassed, correct behaviour when people work at the same time, and tests that prove all of it.

## Security

Authentication uses server-side sessions with HttpOnly cookies, protection against session fixation, and CSRF protection, including on login. Requests never carry user IDs: the backend takes the current user from the session, so nobody can act as someone else.

I chose sessions over JWT on purpose. The app has one backend and a frontend on the same origin, so JWT's main advantage, stateless scaling across services, doesn't apply. Sessions allow immediate server-side logout, and the trade-off is the CSRF protection described above.

## Business rules

- Only reviewers and admins can decide, and nobody, admins included, can approve their own document (the four-eyes principle)
- A document can only be approved or rejected through a recorded decision, never by editing its status directly
- Permission checks live in the service layer, each with a clear error message

## Concurrency and data

If two reviewers decide on the same document at the same moment, optimistic locking makes sure only one decision wins; the other gets a clear 409 Conflict. Related data is loaded in a single query to avoid the N+1 problem, and Flyway versions the PostgreSQL schema.

## Testing and quality

- 75 backend tests, including integration tests against a real PostgreSQL in Docker with Testcontainers, and a deterministic test that reproduces a race condition
- 24 frontend tests with Vitest and React Testing Library
- About 80% line coverage, with CI on GitHub Actions for every push and pull request

## Interface

A responsive React interface built with Tailwind CSS and a small set of shared components, with light, dark and system themes.
