# Hub

Your school. Your study. Your tools.

## Run

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run typecheck` and `npm run build` before deployment. This generated starter has not been executed or browser-tested in this conversation. Resolve and audit dependencies before deploying.

## Structure

- app/: Next.js entry, layout, Tailwind styles
- components/Workspace.tsx: responsive navigation, dashboard, timetable, assignments, notes, announcements, settings
- components/study/Tools.tsx: flashcards, quiz questions and practice scoring, Pomodoro, planner
- components/study/StudyAI.tsx: clearly labeled offline study scaffolds with explicit review-and-save
- lib/model.ts: typed entities, realistic seed data, date helpers

## Implemented

Responsive sidebar and mobile navigation; light/dark/system theme; browser-local persistence; timetable add/edit/delete; assignment add/edit/delete/status and filters; note creation/editing/search/favorites; flashcard flip/shuffle/mastery; quiz question creation, taking and feedback; Pomodoro settings and session count; study tasks; announcement read state; extractive note overview and source recall cards; reviewed revision-plan saving.

## Deliberate limitations

This is a local demo, not the complete product. Authentication and server database persistence are not implemented. Do not enter private student information. localStorage is neither a secure database nor a backup. Navigation uses local tabs, not independent page URLs. Resource files, whiteboard, calculator, reference bank, notifications, subject management, multiple timetable schedules, and genuine model-powered explanations, translations, semantic search and multiple-choice generation remain to be implemented. Do not present those as working.

## Backend implementation plan

Use Supabase Auth with user IDs bound to auth.users. Add tables for the requested entities, per-user row-level security, protected announcement publishing and private file storage before connecting real accounts. Never put service-role or AI provider secrets in browser code. Introduce a server-only AI provider adapter with input validation, rate limiting, and explicit review before saving.
