# Portfolio

Abhishek Wadmare's portfolio site, built on the [developer-portfolio](https://github.com/said7388/developer-portfolio) template (Next.js 16, React 19, Tailwind CSS 4) and deployed as a static export to GitHub Pages.

Live at: https://abhishekwadmare.github.io/portfolio/

## Development

```bash
npm install
npm run dev       # start the dev server at http://localhost:3000
npm run build     # static export to out/
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds a static export (`next.config.js` sets `output: 'export'`) and publishes `out/` to GitHub Pages via GitHub Actions. Pages must be set to build from "GitHub Actions" under Settings → Pages.

## Content

All site content lives in `utils/data/`:
- `personal-data.js` / `contactsData.js` — name, bio, contact links
- `experience.js`, `educations.js`, `skills.js` — resume content
- `projects-data.js` — pinned GitHub repos
- `blogs-data.js` — posts from [encryptedforyou.blogspot.com](https://encryptedforyou.blogspot.com/) (static list; Blogspot has no public JSON API suitable for a build-time fetch, unlike the original template's dev.to integration)

## Contact form

The original template's contact form posted to a Nodemailer/Telegram API route, which needs a Node server and isn't available on GitHub Pages' static hosting. It's been switched to client-side [EmailJS](https://www.emailjs.com/):

1. Create a free EmailJS account and set up a service + email template.
2. Add three repo secrets in Settings → Secrets and variables → Actions: `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, `EMAILJS_PUBLIC_KEY`.
3. Redeploy — the workflow bakes them in as `NEXT_PUBLIC_*` env vars at build time.

Without those secrets configured, the form falls back to opening a `mailto:` link instead.

## Known placeholders

- `public/profile.svg` is a generated initials placeholder — swap in a real photo.
- `public/resume.html` is a static HTML transcription of the resume — swap in a PDF and update `personalData.resume` if preferred.
