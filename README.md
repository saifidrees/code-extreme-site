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

## Deploying — the DNS step is the dangerous one

`app-api.code-extreme.com` is **the live pilot API** for SupplyO. Cloudflare
Pages needs a root-domain record, which in practice means moving nameservers to
Cloudflare — and that is how you accidentally take the backend offline.

Order matters:

1. Add the domain in Cloudflare; let it scan existing DNS records.
2. **Verify `app-api` and `supplyo-api` were both imported** and point at
   `34.180.47.72`. Do not skip this.
3. Flip nameservers at the registrar.
4. Confirm the API survived:
   `curl -s -o /dev/null -w '%{http_code}' https://app-api.code-extreme.com/actuator/health`
   must print `200`.
5. Only then attach the Pages custom domain.

## Not built yet

- Per-service pages (enterprise / mobile / web / Shopify) — home page lists the
  four capabilities; full pages await real copy.
- Case studies. Deliberately absent rather than invented — there is one real
  shipped product (SupplyO) and it leads the site.
- Contact form. `mailto:` for now; a form needs a backend or a third party.
