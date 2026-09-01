/*
 * Everything the site states about the business as fact lives here, in one file,
 * because these are claims a Play reviewer and a customer can act on — they must
 * never drift between the privacy policy, the deletion page and the footer.
 *
 * TODO(saif): four of these are placeholders awaiting real values. The privacy
 * policy and deletion request pages are not publishable until they are filled in;
 * Play checks the contact route, and a dead address there fails review.
 */
export const site = {
  company: "CodeExtreme",
  /** TODO: exact business name as registered on the FBR NTN. */
  legalName: "CodeExtreme",
  product: "SupplyO",
  domain: "code-extreme.com",

  /** TODO: must be a mailbox that actually receives. Blocks the Play submission. */
  email: "hello@code-extreme.com",
  /** TODO: or set to null to publish no address (Play still needs one in the profile). */
  address: null as string | null,
  /** TODO: confirm the window you can actually honour. */
  deletionResponseDays: 30,

  country: "Pakistan",
} as const;

export const services = [
  {
    title: "Enterprise applications",
    body: "Line-of-business systems that replace the spreadsheet and the paper register — built to be run by the people who do the work, not by an IT department.",
  },
  {
    title: "Mobile app development",
    body: "Android and iOS from one Flutter codebase. Offline-first where the work happens away from a signal, and localised properly where English is the second language.",
  },
  {
    title: "Websites",
    body: "Fast, accessible sites that load on a mid-range phone over mobile data — the connection most of your customers actually have.",
  },
  {
    title: "Shopify store setup",
    body: "Store build, theme work, product and payment configuration, and the handover so your team can run it without us.",
  },
] as const;
