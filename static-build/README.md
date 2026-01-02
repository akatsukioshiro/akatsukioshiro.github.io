# Static Build - Orpus Labs Website

This directory contains the static build of the Orpus Labs website, ready to deploy anywhere.

## Structure

```
static-build/
├── index.html          # Main HTML file
├── assets/             # CSS, JS, and images
│   ├── index-*.js     # Bundled JavaScript (includes JSON data)
│   ├── index-*.css    # Bundled CSS
│   └── images/        # Image assets
├── data/               # JSON data files (for reference)
│   ├── website.json
│   ├── products.json
│   └── lab.json
└── server.js          # Simple test server
```

## Running Locally

To test the static build:

```bash
cd static-build
node server.js
```

Then open: http://localhost:3001

## Deployment

### GitHub Pages
1. Upload entire `static-build/` folder contents to your repo
2. Enable GitHub Pages in repo settings

### Any Static Hosting
1. Upload entire `static-build/` folder contents
2. Point your hosting to the `index.html` file

### Netlify / Vercel
1. Connect your repo
2. Set build directory to `static-build/`
3. Deploy

## Notes

- All JSON data is bundled into the JavaScript file by Vite
- The `data/` folder is included for reference
- The site uses client-side routing (React Router)
- For SPA routing on static hosts, configure your server to serve `index.html` for all routes

