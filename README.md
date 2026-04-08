# M S Properties Website

Production-ready static marketing website for M S Properties, built with HTML, CSS, and vanilla JavaScript.

## Live Website

https://ms-properties.vercel.app/

## Overview

This project is a multi-page real estate website focused on:

- company credibility and brand presentation
- project discovery and lead generation
- social preview compatibility for shared links
- lightweight performance and low maintenance hosting

The site is hosted on Vercel and includes SEO/social metadata, crawler files, and cache/security headers.

## Tech Stack

- HTML5 (semantic page structure)
- CSS3 (custom design system in a single stylesheet)
- Vanilla JavaScript (navigation, animations, counters, forms)
- EmailJS browser SDK (form submissions)
- Font Awesome (icons)

## Current Pages

- Home: index.html
- About: about.html
- Projects list: projects.html
- Project detail: balaji-layout.html
- Project detail: sri-ram-layout.html
- Investments: investments.html
- Testimonials: testimonials.html
- Gallery: gallery.html
- Contact: contact.html
- Privacy policy: privacy-policy.html

## Project Structure

```text
YG/
|-- index.html
|-- about.html
|-- projects.html
|-- balaji-layout.html
|-- sri-ram-layout.html
|-- investments.html
|-- testimonials.html
|-- gallery.html
|-- contact.html
|-- privacy-policy.html
|-- robots.txt
|-- sitemap.xml
|-- vercel.json
|-- css/
|   `-- style.css
|-- js/
|   `-- main.js
`-- images/
```

## Key Features

- responsive navigation with mobile hamburger menu
- active link highlighting based on current page
- hero background slideshow on homepage
- scroll reveal animations via IntersectionObserver
- animated counters for stats section
- reusable form submission handling using EmailJS
- social metadata for WhatsApp/Facebook/Twitter previews
- crawler support through robots and sitemap
- production headers/caching through Vercel config

## JavaScript Behavior Summary

Main logic lives in js/main.js:

- sticky header state on scroll
- mobile menu toggle and auto-close on link click
- dropdown toggle support for mobile nav
- active nav highlighting by pathname
- on-scroll animation triggers
- counter animation with easing
- smooth scrolling for hash links
- hero image slider (5s interval)
- generic form submit flow with loading/success/error states

## Form Integration (EmailJS)

Forms submit through EmailJS in the browser.

Current references:

- emailjs.sendForm('service_25042003', 'template_msproperties', form) in js/main.js
- EmailJS script + init in index.html and contact.html

### Recommended setup process

1. Create or verify EmailJS service.
2. Create template with fields:
   - user_name
   - user_email
   - user_phone
   - message
3. Confirm public key in the EmailJS init blocks.
4. Send test submissions from Home and Contact pages.

## SEO and Social Sharing

The pages include:

- canonical URL
- robots directive
- Open Graph (og:title, og:description, og:image, og:url)
- Twitter card metadata

Support files:

- robots.txt
- sitemap.xml

If preview thumbnails are stale in messaging apps:

1. Redeploy the latest version.
2. Re-scrape URL in Facebook Sharing Debugger.
3. Share the URL again.

## Deployment (Vercel)

vercel.json is configured for:

- security headers:
  - X-Content-Type-Options
  - X-Frame-Options
  - Referrer-Policy
  - Permissions-Policy
- caching strategy:
  - short cache for HTML (must-revalidate)
  - longer cache for /images, /css, /js

### Deploy steps

1. Push code to GitHub.
2. Import repository into Vercel (or trigger existing project deployment).
3. Confirm production domain points to latest deployment.

## Local Development

### Option 1: Node

```bash
npx serve .
```

### Option 2: Python

```bash
python -m http.server 3000
```

Then open the local URL in browser.

## Design and Theming Notes

- Global design tokens and component styles are in css/style.css
- Update colors and typography from the root variables first
- Reuse existing utility classes for spacing and typography consistency

## Editing Guidelines for Future Updates

- Keep filenames stable if they are referenced in metadata/sitemap.
- Add new page URL to sitemap.xml when introducing pages.
- Ensure social tags use absolute URLs for images.
- Keep forms aligned with EmailJS template fields.

## Quality Checklist Before Release

- [ ] all page links work
- [ ] mobile menu and dropdowns function correctly
- [ ] form submit success and failure states appear correctly
- [ ] metadata appears in page source
- [ ] sitemap and robots are accessible in production
- [ ] major pages tested on mobile and desktop

## Known Limitations

- no backend validation layer (EmailJS client-side only)
- no automated test suite in current static setup
- cache busting is manual because assets are not fingerprinted

## Suggested Next Improvements

1. Add build step with asset hashing for stronger long-term caching.
2. Move EmailJS IDs and public key into environment-injected templates.
3. Add Lighthouse CI and basic link-check workflow in GitHub Actions.
4. Add analytics/event tracking for lead funnel conversion.

## Ownership

Client: M S Properties  
Project type: Static marketing website

## License

Copyright (c) 2026 M S Properties. All rights reserved.
