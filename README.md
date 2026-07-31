# PCFormer Project Website

The original single-file page has been separated into a standard static-site structure.

## Structure

```text
pcformer_website/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── styles.css
    ├── images/
    │   └── PCFormer.png
    └── js/
        └── main.js
```

## Run locally

From the `pcformer_website` directory, run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

This is a static website and can be deployed directly to GitHub Pages, Netlify, Vercel, or any ordinary web server.

## Items to update before publication

- Replace the placeholder `href="#"` values for **Paper**, **Code**, and **Dataset** in `index.html`.
- The two demo videos currently use Google Drive preview URLs and require public viewing permission.
- The architecture image in `assets/images/PCFormer.png` was extracted from Figure 4 of the supplied manuscript.

## Source separation

- Page structure and content: `index.html`
- Presentation and responsive rules: `assets/css/styles.css`
- Scroll reveal and active navigation behavior: `assets/js/main.js`

Remaining inline style attributes detected: 0.
