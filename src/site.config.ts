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
  /* Dashed, matching the letterhead. tel: keeps digits only so the dialler
     is not asked to parse punctuation. */
  phone: "+92-315-7462554",
  phoneHref: "tel:+923157462554",
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
    title: "Backend systems and APIs",
    lead: "Java, Spring Boot, PostgreSQL.",
    body:
      "The server, the schema and the API that everything else depends on. Thirteen years of it, mostly as the only developer on the system. The data model, the endpoints and the deployment all get decided by the person who then has to live with them.",
    detail: [
      "Domain and database modelling built to outlast the first three feature requests",
      "REST APIs consumed by web and mobile clients",
      "Reversible migrations, and a schema that stays readable as it grows",
      "Authentication, roles, and audit trails",
    ],
  },
  {
    title: "Systems integration",
    lead: "Making software talk to software it was never designed to meet.",
    body:
      "Connecting the systems a business already runs: CRM, ERP, identity, payments, email automation. The point is that data moves between them without anyone re-keying it. Usually the least glamorous part of a project, and the part most likely to sink it.",
    detail: [
      "ERP and CRM integration (ERPNext, Zoho)",
      "National identity and authentication providers (BankID / GrandID)",
      "Marketing and transactional email automation (Klaviyo)",
      "Legacy systems that only speak their own protocol",
    ],
  },
  {
    title: "Workflow and line-of-business platforms",
    lead: "The system an operation would stop without.",
    body:
      "Approval chains, case management, scheduling, document tracking. Processes that live in email threads and spreadsheets today, turned into something with a state machine behind it and a record of who did what.",
    detail: [
      "Business process and approval workflows (jBPM)",
      "Case and document management with full history",
      "Role-based access for office, floor and field",
      "Reporting the people doing the work will actually open",
    ],
  },
  {
    title: "Architecture review and AI-code audit",
    lead: "You shipped it with AI tools. Now you need to know what it will cost you.",
    body:
      "An independent read of a codebase built fast, often by a founder using AI coding tools, before it scales past the point where problems are cheap. What is sound, what is fragile, what will fail under load or audit, and what to fix in what order.",
    detail: [
      "API design, data model and architecture review",
      "Third-party integration and data-security risk",
      "Findings ranked by what breaks first, not by severity theatre",
      "Written for a non-technical founder to act on",
    ],
  },
  {
    title: "Mobile and web applications",
    lead: "Android, iOS and the web.",
    body:
      "Flutter apps built to survive the conditions the work happens in: offline where there is no signal, localised properly where English is a second language. Plus web front-ends and Shopify builds, configured and handed over so your own team can run them.",
    detail: [
      "Flutter apps for Android and iOS from one codebase",
      "Offline-first with conflict-safe sync",
      "Store submission, signing and release",
      "Shopify build, theme and payment configuration",
    ],
    wide: true,
  },
] as const;

/*
 * The decision log — the site's signature device, and the reason it exists.
 *
 * The reader is deciding whether contracting an individual directly is riskier
 * than going through an agency. Each row is a claim with the reason underneath
 * it, because "here is what I do and here is why" is the actual argument.
 * Do not pad this list: every row has to earn the space or the device stops
 * meaning anything.
 */
export const howIWork = [
  {
    claim: "You talk to the person writing the code",
    reason: "No account manager in between, and nothing lost in the retelling.",
  },
  {
    claim: "One person owns the whole system",
    reason:
      "Data model through deployment, and the support years after. Nothing falls between two teams, because there are no two teams.",
  },
  {
    claim: "The code is yours from the first commit",
    reason: "It lands in your repository, not mine. Nothing to hand over at the end.",
  },
  {
    claim: "Decisions are written down beside the code",
    reason:
      "The reasoning is written down with the code, not only the result. That is what lets anyone pick the work up. Including you.",
  },
  {
    claim: "Fixed scope or a monthly retainer",
    reason: "Priced and agreed before anything starts.",
  },
  {
    claim: "Five hours ahead of London, ten ahead of New York",
    reason: "A full overlap with a European morning, and a real one with New York.",
  },
] as const;
