# Dhanushka Lakruwan — Portfolio Website

Terminal/developer-themed portfolio site built with vanilla HTML, CSS & JavaScript.

## Tech Stack

- HTML5
- CSS3 (custom properties, flexbox, grid)
- JavaScript (ES6+)
- Swiper.js (project carousel)
- Font Awesome 6 (icons)
- Google Fonts (Inter + JetBrains Mono)

## Structure

```
/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── certificates/   # compressed AI certificates (+ thumbnails)
│   ├── session/        # AI workshop photos
│   └── dhanu.png
└── README.md
```

## Sections

Hero → Services → **AI Masterclass** → Projects → About → AI Workshops → Certificates → Contact

**AI Masterclass**: free sessions & live classes, promoted in the hero CTA, the
`#masterclass` section, the AI Consultations service tile and the footer — all
pointing to the WhatsApp community group.

Certificates are Google (Coursera) AI courses, shown as a grid with a
keyboard-navigable lightbox (`←` / `→` / `Esc`) and a Coursera verify link.

## Usage

Open `index.html` in any modern browser. No build tools required.

## Notes

- **Contact form**: opens your default email client via `mailto:`.
- **Profile image**: uses `assets/dhanu.png`.
- Project thumbnails load from the live site CDN — replace paths for offline use.
