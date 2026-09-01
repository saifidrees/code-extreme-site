/*
 * Everything the site states about the business as fact lives here, in one file,
 * because these are claims a Play reviewer and a customer can act on — they must
 * never drift between the privacy policy, the deletion page and the footer.
 */
export const site = {
  /** The brand, as it appears in the wordmark and in running text. */
  company: "CodeExtreme",
  /**
   * The registered entity, as spelled on the FBR NTN — two words. Used wherever
   * the statement is a legal one (footer, privacy policy, deletion page), and it
   * is what the Play developer name must match. Brand and legal name differing
   * is ordinary; them differing *by accident* is not, hence two fields.
   */
  legalName: "Code Extreme",
  product: "SupplyO",
  domain: "code-extreme.com",

  /**
   * TODO(saif): interim. Move to hello@code-extreme.com once the Zoho mailbox
   * exists — a company site answering from a personal Gmail is the credibility
   * gap this site was built to close, and Play's developer contact should sit on
   * the domain too. One-line change; nothing else references the address.
   */
  email: "sidrees.idrees@gmail.com",
  address: "106-A Ghalib City, Canal Road, Faisalabad, Pakistan",
  /**
   * 30 days: the recognised standard, and deliberately not shorter. Deletion is
   * a manual email process handled by one person, so a window that cannot be met
   * every time is worse than a longer one that can.
   */
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
