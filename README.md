# Aari Work Blouse Studio

A luxury Aari embroidery boutique website built with Next.js and Tailwind CSS.

## Features
- Elegant promotional landing page
- Design collection pages
- Booking form with WhatsApp handoff
- Static export for GitHub Pages
- Responsive layout for mobile and desktop

## Local development

```bash
cd "c:\Users\saban\Documents\Saba\Aari Work Website\Sep-stylesenthan"
npm install
npm run build
npx serve@latest out -l 3000
```

## Production build

```bash
npm run build
```

## Deploy to GitHub Pages

1. Push this project to a GitHub repository.
2. In repository settings, enable GitHub Pages with the GitHub Actions option.
3. Commit the workflow in `.github/workflows/deploy-pages.yml`.
4. Push to the `main` branch.
5. GitHub Actions will build and deploy the site.

## Important note for Pages

If the site is hosted under a repository name path, set this in your environment when needed:

```bash
NEXT_PUBLIC_BASE_PATH=/your-repo-name
```

Then run:

```bash
npm run build
```
