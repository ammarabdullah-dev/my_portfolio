# Ammar Abdullah — Cloud & DevOps Portfolio

React + TypeScript + Vite + Tailwind CSS portfolio.

## Run locally

```bash
npm install
npm run dev
```

## Production check

```bash
npm run build
npm run preview
```

## Before publishing

1. **GitHub:** after your three repositories are ready, add the repository URLs in `src/components/Projects.tsx` and your profile URL in `src/config.ts`.
2. **Resume:** place your PDF at `public/resume.pdf`, then change `resume: ""` to `resume: "/resume.pdf"` in `src/config.ts`.
3. **EmailJS (optional):** copy `.env.example` to `.env` and add your EmailJS service ID, template ID and public key. Without EmailJS, the contact form opens the visitor's email app with the form content pre-filled.
4. **Deployment URL:** once the site has a permanent URL, add a canonical URL and `og:url` to `index.html`. For maximum social-preview compatibility, you can also replace the SVG preview with a 1200×630 PNG.

## Deployment

The project includes configuration for both Vercel (`vercel.json`) and Netlify (`netlify.toml`). The production output is generated in `dist/`.

## Final QA checklist

- Test desktop and mobile navigation.
- Test all contact links.
- Add the resume before enabling the resume button.
- Add GitHub links only after repositories are public and cleaned.
- Run `npm run build` before every deployment.
