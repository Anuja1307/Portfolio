# Anuja R S — Portfolio

A recruiter-facing personal portfolio built for a full-stack/backend engineering profile, covering
background, featured projects, skills, education, research, and contact details.

## Technology stack

- **Next.js 14** (App Router)
- **React 18** + **TypeScript**
- **Tailwind CSS** for styling
- No external UI libraries, analytics, or backend services — fully static and self-contained

## Main features

- Hero, About, Featured Projects, Skills, Education, Research, and Contact sections
- Two featured projects (AI Resume & Job Matcher, E-Wallet Microservices App), each with a
  problem/approach breakdown and a small system-flow diagram of the architecture
- Light/dark theme toggle with the preference persisted in `localStorage`
- Fully responsive layout, semantic HTML, visible keyboard focus states, and `prefers-reduced-motion` support
- Content is centralized in `lib/data.ts`, so details can be updated without touching component code

## Project structure

```
app/
  components/
    Header.tsx        Sticky nav + theme toggle
    ThemeToggle.tsx    Light/dark mode switch
    Hero.tsx           Landing section
    About.tsx          Short bio and focus areas
    Projects.tsx        Featured project case studies
    SystemFlow.tsx      Small architecture-flow diagram used in project cards
    Skills.tsx          Grouped technical skills
    Education.tsx       Degree details
    Research.tsx        Publication
    Contact.tsx          Contact links
    Footer.tsx
  globals.css
  layout.tsx
  page.tsx
lib/
  data.ts              All portfolio content (profile, projects, skills, education, research)
```

## Local installation

```bash
npm install
```

## Local development

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

No environment variables or API keys are required.
