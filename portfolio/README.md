# Amarnadh — Developer Portfolio

A professional single-page portfolio built with **Angular 17** (standalone components), TypeScript, and SCSS.

## Live Preview
> Deploy on [Vercel](https://vercel.com) or [Netlify](https://netlify.com) for free.

---

## Features

- **Hero section** — Typewriter animation cycling through roles
- **About section** — Bio, quick facts, and experience timeline
- **Skills section** — Animated progress bars with category filtering (ML / Java / Web / Tools)
- **Projects section** — Filterable project cards with GitHub links
- **Contact section** — Working contact form + social links
- Smooth scroll navigation with active section tracking
- Fully responsive (mobile + desktop)
- Dark theme with mint-green accent (`#00ffb4`)
- Custom scrollbar and scroll indicator

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Angular 17 (Standalone Components) |
| Language | TypeScript |
| Styling | SCSS |
| Animations | CSS keyframes + Angular lifecycle hooks |
| Build tool | Angular CLI |

---

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/          # Fixed nav with active section tracking
│   │   ├── hero/            # Typewriter + CTA
│   │   ├── about/           # Bio + experience timeline
│   │   ├── skills/          # Animated skill bars, category filter
│   │   ├── projects/        # Project cards with filter
│   │   └── contact/         # Contact form + social links
│   ├── models/
│   │   └── portfolio.model.ts   # TypeScript interfaces
│   ├── services/
│   │   └── portfolio.service.ts # All portfolio data
│   ├── app.component.ts
│   └── app.config.ts
├── styles.scss              # Global styles + CSS variables
└── index.html
```

---

## Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start dev server
```bash
ng serve
# Open http://localhost:4200
```

### 4. Build for production
```bash
ng build --configuration production
# Output in dist/amarnadh-portfolio/
```

---

## Customization

### Update your personal info
Edit `src/app/services/portfolio.service.ts`:
- `getProjects()` — Add/edit your projects
- `getSkills()` — Update skill levels
- `getExperience()` — Update work experience

### Update contact links
Edit `src/app/components/contact/contact.component.ts` — change GitHub, LinkedIn, and email values.

### Connect the contact form
Replace the `setTimeout` in `onSubmit()` with a real service:

**Option 1: Formspree (free, easiest)**
```typescript
// In contact.component.ts
onSubmit() {
  fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: this.name, email: this.email, message: this.message })
  }).then(() => { this.submitted = true; });
}
```

**Option 2: EmailJS (free, no backend)**
```bash
npm install @emailjs/browser
```
```typescript
import emailjs from '@emailjs/browser';
emailjs.send('SERVICE_ID', 'TEMPLATE_ID', { name, email, message }, 'PUBLIC_KEY');
```

---

## Deployment

### Vercel (recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
ng build --configuration production
# Drag dist/amarnadh-portfolio/ folder to netlify.com/drop
```

### GitHub Pages
```bash
ng add angular-cli-ghpages
ng deploy --base-href=/portfolio/
```

---

## Angular Concepts Demonstrated

This project showcases these Angular concepts — useful for interviews:

| Concept | Where used |
|---------|-----------|
| Standalone components | All components (`standalone: true`) |
| `@Input` / `@Output` | Component data flow |
| `*ngFor`, `*ngIf` | Template directives |
| Two-way binding (`[(ngModel)]`) | Contact form |
| `HostListener` | Scroll detection in navbar |
| `AfterViewInit` + `IntersectionObserver` | Skill bar animation trigger |
| `OnInit` / `OnDestroy` | Typewriter lifecycle management |
| Services + Dependency Injection | `PortfolioService` |
| TypeScript interfaces | `Project`, `Skill`, `Experience` |
| SCSS with BEM-style structure | Component-scoped styles |

---

## License
MIT — free to use and adapt.
