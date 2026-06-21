import styles from "./InsideTrust.module.css";

const CARDS = [
  {
    badge: "AES-256",
    title: "Bank-Grade Cryptography",
    body: "Every stream of data is hardened using advanced AES 256-bit encryption protocols, keeping your information secure.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="10.5" width="16" height="10.5" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7.5 10.5V7.5a4.5 4.5 0 0 1 9 0v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="15.5" r="1.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    badge: "PCI DSS",
    title: "Tokenized Card Storage",
    body: "Your actual credit card numbers are tokenized immediately upon entry. airPe never stores your raw card credentials on our servers, ensuring your profile acts as a highly resilient and secure digital wallet.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="6" width="18" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 10h18" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    badge: "RPAA",
    title: "RPAA Compliance Rails",
    body: "Built directly in alignment with modern Canadian financial framework requirements, ensuring your fund routing is fully legal, transparent, and bonded.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2.5l7.5 3.2v5.6c0 5-3.7 8.1-7.5 9.7-3.8-1.6-7.5-4.7-7.5-9.7V5.7L12 2.5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function InsideTrust() {
  return (
    <section id="trust-shield" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div>
            <span className={styles.eyebrow}>The Trust Shield</span>
            <h2 className={styles.heading}>
              Ironclad protection for your personal financial data
            </h2>
          </div>
          <p className={styles.lead}>
            We believe user trust is built on mathematical certainty, not empty
            promises. airPe isolates your financial profile behind multiple
            layers of specialized, proactive defense systems.
          </p>
        </div>

        <div className={styles.grid}>
          {CARDS.map((c) => (
            <article key={c.title} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.icon} aria-hidden="true">
                  {c.icon}
                </span>
                <span className={styles.badge}>{c.badge}</span>
              </div>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardBody}>{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
