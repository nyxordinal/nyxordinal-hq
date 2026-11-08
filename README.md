# Nyxordinal Headquarter

Nyxordinal's public website, built with React 19 and Vite 8. The site includes the Plutus Scrapper overview, privacy policy, and terms pages.

## Development

Use Node.js 24, then run:

```sh
npm install
npm start
```

Create a production build with `npm run build` and preview it locally with `npm run preview`. Vite writes production files to `dist/`.

Google Analytics is optional. Set `VITE_GA_CODE` to the measurement ID in a local `.env` file or in the Vercel project environment variables.

## Vercel

The project uses Vite's default build command (`npm run build`) and output directory (`dist`). `vercel.json` rewrites client-side routes to `index.html`, so policy pages work when opened directly.

## Plutus Scrapper pages

- `/plutus-scrapper/`
- `/plutus-scrapper/privacy`
- `/plutus-scrapper/terms`

## Credits and license

This site began from the [Cruip open React template](https://github.com/cruip/open-react-template). The original template notes its GPL license and attribution terms; see the source repository for the applicable license details.
