---
title: "DocFlow"
summary: "A full-stack platform for reviewing documents through approval workflows, with role-based access, decisions, history and comments."
stack: ["Java 21", "Spring Boot", "Spring Security", "PostgreSQL", "Flyway", "React", "TypeScript"]
repo: "https://github.com/DariusCristian/document-approval-workflow-platform"
order: 3
---

## What it does

DocFlow manages the lifecycle of a document as it moves through review: from draft, to in review, to approved or rejected. Reviewers record their decisions, every document keeps a full approval history, and users can discuss documents through comments.

## How it's built

The backend is a Spring Boot application organized by feature: each feature has its own domain, service, repository and web layers, which keeps related code together. Spring Security handles authentication and role-based access control, Flyway versions the PostgreSQL schema, and a global exception handler returns consistent error responses. The frontend is built with React and TypeScript, with protected routes for authenticated users.

## Highlights

- Workflow status transitions with validation rules
- Approval and rejection decisions with per-document history
- Versioned database migrations with Flyway