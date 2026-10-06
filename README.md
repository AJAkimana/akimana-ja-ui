# akimanaja.com

Personal portfolio of Jean d'Amour Akimana. A static React site (Vite) hosted on Netlify, with a
Git-based dashboard (Decap CMS) at `/admin`.

## Content

All site content lives in [`src/content/`](src/content/) as JSON:

| File | What it holds |
| --- | --- |
| `profile.json` | Name, hero titles, About text, contact details, social links, CV file |
| `skills.json` | Skill groups and the year each skill was first used |
| `resume.json` | Experience and education |
| `projects.json` | Projects and their screenshots |

Uploaded files (CV PDF, screenshots) go to [`public/uploads/`](public/uploads/).

Edit content from the dashboard at **`/admin`** (log in with GitHub). Each "Publish" commits to
`master`, and Netlify rebuilds the site in about a minute. Each publish uses one deploy from the
Netlify free plan's monthly credits, so batch edits where possible.

## Development

```bash
npm install
npm run dev        # site at http://localhost:5173
npm run build      # production build in dist/
npm run lint
```

To use the dashboard locally without GitHub, run `npm run cms` in a second terminal and open
http://localhost:5173/admin/index.html. Changes are written straight to the files in your working
copy; commit them as usual.

## One-time Netlify setup

1. **Create the site:** Netlify → Add new site → Import from GitHub → `AJAkimana/akimana-ja-ui`.
   Build settings come from [`netlify.toml`](netlify.toml).
2. **Contact form:** Site configuration → Forms → enable form detection, then add an email
   notification for the `contact` form.
3. **Dashboard login:** create a GitHub OAuth app (GitHub → Settings → Developer settings → OAuth
   Apps) with callback URL `https://api.netlify.com/auth/done`. Then in Netlify go to Site
   configuration → Access & security → OAuth → Install provider → GitHub, and paste the client ID
   and secret.
4. **Domain:** Domain management → add `akimanaja.com`, then point the DNS records at your
   registrar to Netlify as instructed. HTTPS is provisioned automatically.
