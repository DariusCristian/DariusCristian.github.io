# Portfolio website

Personal portfolio site showcasing my software projects, linked from my CV. I'm a software engineering master's student building this to learn, so I need to understand and be able to explain every part of it.

## Rules

- Never run `git commit` or `git push`, and never add yourself as a co-author. I review and commit all changes myself. You may suggest a commit message when you finish a task.
- Work in small steps and do only what the current task asks. Don't add features or refactor code I didn't ask about.
- Ask before installing any new dependency, and explain why it's needed.
- After making changes, run `npm run build` and fix any errors before reporting back.
- When you finish, summarize each file you created or changed and why, in plain language.

## Decisions

- Astro static site, deployed to GitHub Pages at https://dariuscristian.github.io (repo: DariusCristian.github.io).
- Plain CSS only: no CSS frameworks or UI libraries.
- Projects are stored as Markdown files in a content collection. Each project gets its own page at /projects/<id>.
- External links (GitHub repos, live demos) open in a new tab.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
