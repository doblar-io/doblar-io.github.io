# doblar.io — Static website

Three pages: `index.html` (home/work), `events.html` (events), and `about.html` (bio/selected CV).

## Publish on GitHub Pages

Repository: `https://github.com/doblar-io/doblar-io.github.io`

Upload the **contents of this folder** to the repository root, not the enclosing folder itself. Keep `index.html`, `about.html`, `events.html`, `style.css`, `site.js`, `favicon.svg`, and the `assets/` directory together. The GitHub Pages source should remain `main` / `(root)`.

The domain `doblar.io` is configured separately in GitHub Pages / Porkbun. If GitHub's custom-domain `CNAME` file is already present, **keep it**. Do not delete it or remove your DNS records.

## Update events

Open `events.html` and change the event card's date, title, venue, line-up, and flyer. For the automatic archival label, also update `data-event-date="YYYY-MM-DD"` on that card. The current event was supplied in a flyer, and its time/tickets have not been invented.

Instagram @parachutefactory is linked, not scraped or automatically embedded. An Instagram feed can be revisited later if an authorized integration becomes available.

## Update images

Images are in `assets/` in WebP format. Replace with your own exported WebP/JPEGs and update the `src` and `alt` attributes in the pages. All included images were provided in this conversation.

## Style

Shared CSS is in `style.css`. Primary palette: paper `#eee8df`, ink `#181612`, red `#c9362e`. Fonts are fetched from Google Fonts when available, with local fallback fonts. Mobile layouts are included.

## Artist CV

This is a **selected public-facing bio / CV**, not a complete employment résumé. Review wording and dates before publication. The About page provides public source links for projects and recognition.
