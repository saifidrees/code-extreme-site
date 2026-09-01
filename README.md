# code-extreme.com

Marketing site for CodeExtreme and its product SupplyO. Astro, no client JS,
deployed to Cloudflare Pages.

```bash
npm install
npm run dev      # localhost:4321
npm run build    # -> dist/
```

## Why this site exists

Not (only) marketing. Three hard requirements sit on it:

1. **Google Play will not accept a SupplyO submission without a live privacy
   policy URL** — for production *and* closed testing. That is `/supplyo/privacy`.
2. **Play requires a web-reachable account-deletion route** for any app offering
   account creation, reachable without signing in. That is
   `/supplyo/delete-account`.
3. **Play organization verification wants a business website**, alongside a
   D-U-N-S number.

So `/supplyo/privacy` and `/supplyo/delete-account` are not boilerplate — they
are the two pages the app's release is blocked on. Both must stay reachable
anonymously; a Play reviewer is not logged into anything.

## Business facts live in one file

`src/site.config.ts` holds every factual claim the site makes about the
business, so the footer, the privacy policy and the deletion page can never
disagree. All values are real; one is interim:

- **`email` is still a personal Gmail.** Move it to `hello@code-extreme.com`
  once the Zoho mailbox exists. A company site answering from a Gmail address is
  the credibility gap this site was built to close, and Play's developer contact
  belongs on the domain. It is a one-line change — nothing else references it.
- **`legalName` ("Code Extreme") is deliberately not `company` ("CodeExtreme").**
  The first is the entity on the FBR NTN and is what the **Play developer name
  must match**; the second is the brand in the wordmark. Keep them in step with
  reality, not with each other.
- **The published address is a home address**, since a sole proprietorship has no
  separate premises. Search engines will index it. Set `address: null` to drop it
  from the site — Play still requires one in the developer profile either way,
  but that is not the same as publishing it.

## Design

Colours and type are lifted from the SupplyO app's own token set
(`h2ogo-app/docs/mobile_design_guidelines_v1.md` §2 — "Ember & Slate") so the
site and the app read as one thing. One deliberate divergence: Urdu is set in
**Noto Naskh Arabic**, not the Nastaliq that doc still names — the app moved off
Nastaliq on purpose (h2ogo-app commit `a3e05ea`).

The Urdu page is **written, not translated**, following the app's own rule:
everyday English loanwords in Urdu script, colloquial verbs over literary ones.

## Deploying — GitHub Pages, and why not Cloudflare

Hosted on **GitHub Pages**, deployed by `.github/workflows/deploy.yml` on every
push to `main`. `public/CNAME` holds the apex domain.

This was originally planned for Cloudflare Pages. It moved, for one reason:
Cloudflare Pages serves an **apex** domain only if the domain uses Cloudflare's
own nameservers, so publishing this site would have meant migrating DNS for
`code-extreme.com` — and `app-api.code-extreme.com` is **the live pilot API for
SupplyO**. A nameserver migration that drops or mistypes one subdomain record
takes the backend down, and it presents as an app bug rather than a DNS mistake.

GitHub Pages takes plain A records at the existing registrar, so the subdomains
are never touched. Cloudflare's edge would be marginally faster for a 52KB
static site; that is not worth putting the pilot backend at risk.

### DNS records to add (at your current registrar)

Leave every existing record alone. Add only these, for the apex:

```
A   @   185.199.108.153
A   @   185.199.109.153
A   @   185.199.110.153
A   @   185.199.111.153
```

Optionally `CNAME www <user>.github.io`.

**Do not touch** `app-api` or `supplyo-api`. After the records propagate,
confirm nothing moved:

```bash
curl -s -o /dev/null -w '%{http_code}\n' https://app-api.code-extreme.com/actuator/health   # 200
```

### One-time setup

1. Push this repo to GitHub.
2. Settings → Pages → Source: **GitHub Actions**.
3. Settings → Pages → Custom domain: `code-extreme.com`; tick **Enforce HTTPS**
   once the certificate is issued (can take a few minutes).

## Not built yet

- Per-service pages (enterprise / mobile / web / Shopify) — home page lists the
  four capabilities; full pages await real copy.
- Case studies. Deliberately absent rather than invented — there is one real
  shipped product (SupplyO) and it leads the site.
- Contact form. `mailto:` for now; a form needs a backend or a third party.
