# HBM Flower City

This is a functioning website for **HBM Flower City**, a wedding florist operating in the Austin, Texas area. The site introduces the studio's romantic, garden-style floral design. It walks couples through the wedding process and shows past weddings and styled shoots. It also collects event inquiries.

[![CI](https://github.com/GPain2007/hbmAnimated/actions/workflows/ci.yml/badge.svg)](https://github.com/GPain2007/hbmAnimated/actions/workflows/ci.yml)

## What's on the site

| Page | Route | What it does |
| --- | --- | --- |
| Home | `/` | Animated hero with a rotating photo carousel, rotating client testimonials ("Kind Words"), the four-step wedding process (Inquiry → Proposal → Booking → Final Details) and a footer with contact info and press features |
| Offerings | `/offerings` | Full-service events (starting at $3,500), A La Carte florals, custom offerings (editorial, branding, workshops, flower cart rental) and a Q&A, including what different budgets can cover |
| Portfolio | `/gallery` | Photo grid of real weddings and styled shoots with a full-screen lightbox (previous / next / close) |
| Contact | `/contact` | Inquiry instructions and the embedded Dubsado inquiry form; direct email `hello@hbmflower-city.com` |

All pages share an animated slide-out menu and links to Instagram, TikTok and Pinterest.

## Tech stack

- [React 19](https://react.dev/) with [React Router 6](https://reactrouter.com/) for client-side pages
- [Vite 5](https://vitejs.dev/) (SWC plugin) for the dev server and production build
- [Framer Motion](https://www.framer.com/motion/) for page, carousel and menu animations
- [Sass](https://sass-lang.com/) for component styles
- [react-icons](https://react-icons.github.io/react-icons/) for UI icons
- [Dubsado](https://www.dubsado.com/) embedded form for client inquiries
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) for tests

## Getting started

Requires **Node.js 20 or newer**.

```bash
git clone https://github.com/GPain2007/hbmAnimated.git
cd hbmAnimated
npm install --legacy-peer-deps   # see "Known issues" below for why the flag is needed
npm run dev                      # http://localhost:5173
```

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the local dev server with hot reload |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm test` | Run the test suite once |
| `npm run test:watch` | Re-run tests as files change |
| `npm run lint` | Run ESLint |

## Project structure

```
├── index.html                # HTML shell, fonts and page title
├── public/                   # Photos, logos and icons served as-is
├── src/
│   ├── main.jsx              # App entry point
│   ├── App.jsx               # Routes for the four pages
│   ├── app.scss              # Global styles
│   ├── pages/                # Home, Offerings, Gallery (Portfolio), Contact
│   ├── components/           # NavBar, sidebar menu, hero, carousel, testimonials,
│   │                         # services, offerings, Q&A, gallery viewer, footer
│   └── __tests__/            # Vitest + Testing Library tests
├── .github/workflows/ci.yml  # Tests, lint and build on GitHub Actions
└── vite.config.js            # Vite and Vitest config
```

### Updating content

- **Testimonials:** edit `src/components/testimonial/ImageData.jsx`.
- **Home carousel photos:** add the image to `src/components/carousel/images/` and list it in `src/components/carousel/ImageData.jsx`.
- **Portfolio photos:** add the image to `public/` and import it in `src/components/imagesviewer/ImageViewer.jsx`. Resize photos to about 2000px on the long edge, under 500 KB, before adding them.
- **Offerings, pricing and Q&A text:** `src/components/offeringsSection/OfferSection.jsx` and `src/components/qAndA/QA.jsx`.

## Testing and CI

GitHub Actions (`.github/workflows/ci.yml`) runs on every push and pull request to `main`. It also runs on a **weekly schedule (Mondays)**, so dependency breakage is caught even when nobody is pushing code. Each run:

1. Installs dependencies
2. Runs the test suite (`npm test`)
3. Runs ESLint (reported, not yet blocking; see Known issues)
4. Builds the production site and uploads `dist/` as an artifact

The tests check that every page renders its key content, that the Portfolio lightbox opens and steps through photos, and that the menu links to every page.

## Deployment

`npm run build` produces a static site in `dist/` that can be hosted on Netlify, Vercel, GitHub Pages or any static host. Because routing happens in the browser, the host must send unknown paths to `index.html`. Otherwise refreshing `/offerings` returns a 404. On Netlify, add a `public/_redirects` file containing `/* /index.html 200`.

## Known issues

Open problems are tracked in [GitHub Issues](https://github.com/GPain2007/hbmAnimated/issues). The biggest ones right now:

- Portfolio photos are up to 16 MB each, which makes the gallery slow to load on phones.
- `react-image-lightbox` (unused) only supports React 16/17, so `npm install` needs `--legacy-peer-deps`.
- ESLint currently reports errors, so the lint step in CI does not fail the build yet.

## Recent changes

<!-- Maintained by the weekly review task. Newest first. -->
- **2026-11-12:** Rewrote README; added Vitest tests and a GitHub Actions workflow (push, PR and weekly schedule).

## Contact

HBM Flower City, Austin and Central Texas
[hello@hbmflower-city.com](mailto:hello@hbmflower-city.com) · [Instagram](https://www.instagram.com/hbm_flowercity) · [TikTok](https://www.tiktok.com/@hbm_flowercity) · [Pinterest](https://www.pinterest.com/harolynmunford/)
