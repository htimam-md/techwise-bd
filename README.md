# TechWise BD — Website

A clean, mobile-responsive static website for TechWise BD, a technology and
software guide publisher aimed at general internet and PC users in
Bangladesh and South Asia.

## Structure

```
techwise-bd/
├── index.html        Home page
├── articles.html      Articles listing with category filtering
├── about.html          About page
├── contact.html        Contact page (placeholder email — see below)
├── privacy.html         Privacy Policy
├── css/
│   └── style.css       Single shared stylesheet for all pages
├── js/
│   └── main.js          Mobile nav toggle + article category filter
└── assets/
    └── favicon.svg       Site icon (original SVG mark, no external logos)
```

No build tools, frameworks or server-side code are required — this is
plain HTML, CSS and JavaScript, so it can be deployed directly to any
static hosting service (GitHub Pages, Netlify, Vercel, Cloudflare Pages,
etc.) by uploading the folder as-is.

## Before you publish

1. **Replace the placeholder contact email.**
   Open `contact.html` and change `hello@techwisebd.com` (in the `mailto:`
   link and the visible text) to your real email address.

2. **Add real articles.**
   The article cards on `index.html` and `articles.html` are example
   guides that show the site's structure and tone. Replace the titles and
   descriptions with your own published content, or link each card to a
   full article page as you create one.

3. **Update the "Last updated" date** in `privacy.html` if you edit the
   policy later.

## Editing notes

- All pages share one stylesheet (`css/style.css`), organized into clearly
  labelled sections (reset, layout, header/nav, buttons, article cards,
  categories, footer, responsive breakpoints). Colors and type are defined
  as CSS variables at the top of the file — change them once and the whole
  site updates.
- The five article categories (Software, Browsers, Windows & PC,
  Productivity, Technology Tips) are wired into the filter buttons on
  `articles.html` via `data-category` attributes on each `<article>` card.
  To add a new article, copy an existing `<article class="article-card">`
  block and set `data-category` to match one of the existing filter values
  (`software`, `browsers`, `windows-pc`, `productivity`, `tech-tips`).
- Header and footer markup is repeated on each page (no build step), so if
  you change navigation or footer links, update them across all five HTML
  files.
- Fonts (Space Grotesk, Source Sans 3) are loaded from Google Fonts via
  `<link>` tags in each page's `<head>`. For fully offline/self-hosted
  fonts, download the font files and swap the `<link>` tags for local
  `@font-face` rules in `style.css`.

## SEO basics already in place

- Unique `<title>` and meta description per page
- Semantic HTML (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`)
- Single `<h1>` per page, logical heading order
- `rel="canonical"` tags
- Descriptive link text (no "click here")
