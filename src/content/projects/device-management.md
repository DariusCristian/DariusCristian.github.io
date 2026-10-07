---
title: "Device Management System"
summary: "A full-stack app for tracking company devices and assigning them to users, with AI-generated descriptions and ranked search."
stack: ["C#", "ASP.NET Core", "Entity Framework Core", "SQL Server", "Angular", "Google Gemini"]
repo: "https://github.com/DariusCristian/device-management-system"
order: 4
---

## What it does

The system manages the lifecycle of devices in an organization. Users register and log in, browse and manage devices, and assign devices to themselves or release them.

## How it's built

An ASP.NET Core Web API with Entity Framework Core and SQL Server provides the backend, and an Angular single-page application provides the interface. I built it in five phases, each as a separate set of small commits: the API, the user interface, authentication and authorization, AI integration, and search.

## Highlights

- Full CRUD for devices and users, with database migrations
- Google Gemini generates readable device descriptions from technical specifications
- Free-text search across name, manufacturer, RAM and processor, with case-insensitive matching and deterministic relevance ranking