# 3D Portfolio

This portfolio is exported as a static site and deployed to GitHub Pages from
the repository's `main` branch by `../.github/workflows/deploy-pages.yml`.
The server-backed blog and admin features are disabled in this static build.

## Local development

```bash
npm ci
npm run dev
```

## GitHub Pages deployment

1. Push this repository to GitHub. The workflow builds `client` and publishes
   its `out` folder whenever changes are pushed to `main`.
2. In the repository, open **Settings → Pages** and set **Build and deployment
   → Source** to **GitHub Actions**.
3. After the workflow succeeds, the site will be available at
   `https://Sathiskumar-S.github.io/3dportfolio/`.

## Use a custom domain

1. Buy or choose a domain and decide whether to use the apex domain
   (`example.com`) or a subdomain such as `www.example.com`.
2. In your domain provider's DNS settings, point the domain to GitHub Pages.
   For an apex domain, add `A` records for `185.199.108.153`,
   `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`. For a `www`
   subdomain, add a `CNAME` record pointing to `Sathiskumar-S.github.io`.
   DNS providers use different screens; do not add both sets unless you intend
   to use both the apex and subdomain.
3. In GitHub, open **Settings → Pages → Custom domain**, enter your exact
   domain, and save it. Wait for DNS verification, then enable **Enforce HTTPS**
   when GitHub offers it.
4. Add a file named `CNAME` containing the exact domain (no `https://`) to
   `client/public/`. It will be included in the deployed site.
5. Edit `../.github/workflows/deploy-pages.yml` and change
   `NEXT_PUBLIC_CUSTOM_DOMAIN: "false"` to `NEXT_PUBLIC_CUSTOM_DOMAIN: "true"`.
   This makes links and public assets load from the root of the custom domain
   instead of `/3dportfolio`.
6. Commit and push those changes. The workflow will rebuild the site for the
   custom domain.

The custom domain itself is not set in this repository because its exact name
is not known yet. If you share the chosen domain later, the workflow and any
domain-specific configuration can be updated to match.
