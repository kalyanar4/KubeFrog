# KubeFrog portfolio

Animated portfolio project for **Lavanya Bangari** with:
- Motion-rich hero and particle background
- Scroll reveal sections and tilt cards
- UI/UX showcase cards
- Mobile responsive navigation

## Run locally

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## GitHub Pages deployment

This repo includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

### First-time setup notes
- The workflow uses `actions/configure-pages@v5` with `enablement: true`, so it can auto-enable Pages if it is not already configured.
- If your repository policies block workflow-based configuration, manually enable **Settings → Pages → Build and deployment → GitHub Actions**.

After a successful run, the site URL will be:

`https://<your-github-username>.github.io/KubeFrog/`

(Or your org equivalent if the repository is under an organization account.)
