# akimanaja.com

Personal portfolio of Jean d'Amour Akimanizanye. A static React site (Vite) hosted on Netlify, with
a Git-based dashboard (Decap CMS) at `/admin`.

## About me

I'm a **Senior Backend / Full-Stack Engineer** based in Kigali, Rwanda, with about 10 years of
experience designing, building, and scaling API-driven systems, SaaS platforms, and cloud-native
applications.

- **Now:** Lead Software Engineer at Huza HR, leading backend and system architecture for an
  enterprise HR SaaS platform (payroll, employee management, reporting).
- **Before:** GitStart (Sourcegraph, Supabase, Strapi), Benipal Technologies, Andela (team lead),
  and Data Systems Ltd.
- **Core stack:** Python, TypeScript, Go, Node.js, Django, FastAPI, React, PostgreSQL, Redis, AWS,
  Docker, Nginx.
- **Strengths:** multi-tenant and distributed architectures, API design, cloud deployment, and
  performance optimization. I've built production systems serving 10,000+ users, including a
  multi-tenant internet radio platform that supports at least 1,000 concurrent listeners.

Find me on [LinkedIn](https://www.linkedin.com/in/ajakimana), [GitHub](https://github.com/AJAkimana)
and [GitLab](https://gitlab.com/AJAkimana), or at [www.akimanaja.com](https://www.akimanaja.com).

## Content

All site content lives in [`src/content/`](src/content/) as JSON:

| File | What it holds |
| --- | --- |
| `profile.json` | Name, hero titles, About text, contact details, social links, CV file |
| `skills.json` | Skill categories and the skills in each |
| `resume.json` | Experience, education, languages and interests |
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

The site uses a dark, near-monochrome theme. All colours are CSS variables at the top of
[`src/styles/style.css`](src/styles/style.css); change `--color-accent` to add a colour accent.

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
