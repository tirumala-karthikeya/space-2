import styles from "./SmartBillsCoverage.module.css";

const CARDS = [
  {
    tone: "green",
    title: "Utilities & Energy",
    body: "Automate payments for Hydro, Gas, and Water municipal lines without changing your current setup.",
    tags: ["Hydro", "Gas", "Water"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    tone: "blue",
    title: "Connectivity",
    body: "Keep your mobile phone plans, high-speed Internet, and TV bundles active and rewarding.",
    tags: ["Mobile", "Internet", "TV"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M2 8.5a15 15 0 0 1 20 0M5 12a10 10 0 0 1 14 0M8 15.5a5 5 0 0 1 8 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="19" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    tone: "amber",
    title: "Insurance",
    body: "Protect your peace of mind by routing car insurance and homeowners insurance through your preferred card.",
    tags: ["Auto", "Home", "Life"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2 4 5v6c0 5 3.4 9 8 11 4.6-2 8-6 8-11V5l-8-3Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    tone: "purple",
    title: "Subscriptions & Software",
    body: "Consolidate cloud storage, SaaS tools, gym memberships, and streaming accounts into one hub.",
    tags: ["SaaS", "Streaming", "Fitness"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2.5 21 7v10l-9 4.5L3 17V7l9-4.5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M3 7l9 4.5L21 7M12 11.5V21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function SmartBillsCoverage() {
  return (
    <section id="coverage" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Coverage</span>
          <h2 className={styles.heading}>
            Your Entire Monthly Expenses,
            <br />
            Covered.
          </h2>
        </header>

        <div className={styles.grid}>
          {CARDS.map((card) => (
            <article
              key={card.title}
              className={`${styles.card} ${styles[card.tone]}`}
            >
              <span className={styles.icon} aria-hidden="true">
                {card.icon}
              </span>
              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardBody}>{card.body}</p>
                <div className={styles.tags}>
                  {card.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
