# doblar.io — Site v4

A static, mobile-responsive artist site for Mariano Ulibarri: selected work, current events, and an About / CV page.

## What changed

- Less slogan copy, more images and literal archival labels.
- The homepage retains **Still unfolding.**, adds **Eye Know.** as a photography section, and uses **Transmission.** as the moving-image tile.
- The events page is now **All tomorrow’s parties.**, featuring three confirmed upcoming listings: FlashBlack Friday (Nov 27, 2026); El Fidel Photo Walk (Dec 5, 1:30–3:30 PM); and Nina Simone listening party (Dec 5, music until 5:30 PM).
- The events page includes an archive of selected posters. After a date passes, its card moves into the archive in the visitor's browser. Homepage listings for past dates disappear.
- About / CV incorporates the song-title reference **This must be the place.**
- All supplied artwork is included as optimized WebP images. There are no invented events, embedded social feeds, or extended lyric excerpts.

## Publish on GitHub Pages

1. Extract the ZIP. Upload **everything inside** this folder to the root of `doblar-io/doblar-io.github.io`, replacing earlier files and copying the `assets/` directory.
2. Keep your existing **CNAME** file (with `doblar.io`) in the repository. The package intentionally does not include or overwrite it.
3. Commit to the `main` branch. GitHub Pages deploys the new version automatically.
4. Check `https://doblar.io/`, `/events.html`, and `/about.html`.

## Updating upcoming events

Each event in `events.html` is an `<article class="event-card" data-event-date="YYYY-MM-DD">` with a flyer image and event details. Add new events as new articles in date order. In `index.html`, add a matching `<a class="home-event" data-event-date="YYYY-MM-DD">` to the homepage event strip. `site.js` hides elapsed dates on the homepage and archives events after the local calendar date passes. Keep direct event details and the archive up to date from confirmed flyers.

Social: https://instagram.com/parachutefactory and https://linkedin.com/in/mariano-ulibarri


## Version 4.1 — Poster / event attribution

- Event flyers are shown as documentation of events, not automatically credited as designs by Mariano Ulibarri. Some may be his work; others may be collaborators' or event organizers' designs.
- The standalone Selected Work collage is photographic (with no ambiguous poster attribution).
- The home flyer gallery and the Events archive are explicitly labeled **events**, separated from the authored work.
- Existing upcoming dates and automatic past/upcoming logic are unchanged. Where actual artwork credits are known later, add them to individual events rather than making blanket authorship claims.


## Version 4.2 — approved copy and image corrections

- Home headline remains **Still unfolding.**, with **This must be the place.** directly below it. The latter remains at the end of About / CV.
- Selected-work lead text is now **Posters, photographs, DJ nights, and other evidence.**
- FlashBlack Friday uses the **turntable / red slipmat flyer** on both Home and Events, rather than the television design.
- The DJ photo was of **Aaron Juarros (Bigtoe's Hifi)**, not Mariano. That photograph was removed from every page and removed from this package; it has been replaced with a found-sign photograph in the collage, the FlashBlack flyer in the sound tile, and a photographed doorway on About / CV.
- The event flyers remain documentary records of past and upcoming events, not blanket claims of poster authorship.
- **Publishing a replacement to an existing GitHub repository:** Upload these files into the existing repository; because GitHub web uploads may not automatically delete obsolete remote files, you can separately delete `assets/dj-portrait.webp` and `assets/tainted-80s.webp` from GitHub if you want those unused assets removed. Keep your existing `CNAME` file.


## Version 4.3 — Search engine structured data

- Added JSON-LD `WebSite`/`WebPage` markup to `index.html`, identifying the site as doblar.io and linking its creator to Mariano Ulibarri.
- Added JSON-LD `ProfilePage` with `Person` as the `mainEntity` to `about.html`, with the same identity `@id`, factual bio, current role, education, and the Instagram and LinkedIn profile URLs.
- Added canonical URLs to those two pages. No visible layout, images, or event content was changed.
- No portrait image was declared because an official profile photo has not been chosen.
- Upload only `index.html` and `about.html` to update an existing v4.2 site (keep other files and `CNAME`). Or upload the contents of this ZIP for a complete site update.
- In Search Console, inspect `https://doblar.io/about.html` and request indexing after publishing. Use https://validator.schema.org/ or Google Rich Results Test for live validation. Markup does not guarantee a Knowledge Panel.
