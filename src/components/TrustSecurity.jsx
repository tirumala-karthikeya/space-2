import styles from "./TrustSecurity.module.css";

const ICONS = {
  lock: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
      <rect x="4" y="10.5" width="16" height="10.5" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7.5 10.5V7.5a4.5 4.5 0 0 1 9 0v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="15.5" r="1.6" fill="currentColor" />
    </svg>
  ),
  verified: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
      <path d="M12 2.5l2.4 1.75 2.95-.05.92 2.8 2.4 1.75-.9 2.8.9 2.8-2.4 1.75-.92 2.8-2.95-.05L12 21.5l-2.4-1.75-2.95.05-.92-2.8L3.33 15.2l.9-2.8-.9-2.8L5.73 7.85l.92-2.8 2.95.05L12 2.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8.8 12l2.1 2.1 4.3-4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
      <path d="M12 2.5l7.5 3.2v5.6c0 5-3.7 8.1-7.5 9.7-3.8-1.6-7.5-4.7-7.5-9.7V5.7L12 2.5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <rect x="9" y="11" width="6" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.2 11v-1.1a1.8 1.8 0 0 1 3.6 0V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
      <circle cx="12" cy="12" r="8.6" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7.2V12l3.2 1.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const CARDS = [
  {
    icon: "lock",
    title: "AES 256-Bit Encryption",
    body: "Every transaction is shielded with AES 256-bit encryption, matching the exact cryptographic standards trusted by global financial institutions.",
  },
  {
    icon: "verified",
    title: "Fully Verified & Compliant",
    body: "airPe operates in full compliance with financial regulations, so every payment is safe, legal, and always on time.",
  },
  {
    icon: "shield",
    title: "Your Data is Yours. Always.",
    body: "Your data belongs exclusively to you. We never sell, share, or compromise your personal or financial information.",
  },
  {
    icon: "clock",
    title: "Payments That Never Miss",
    body: "Our automated system ensures your payment lands exactly when it should, every single month, without fail.",
  },
];

export default function TrustSecurity() {
  return (
    <section id="security" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Built on Trust. Backed by Security.</h2>
        <p className={styles.subheading}>Bank-grade Systems. Zero Shortcuts.</p>

        <div className={styles.grid}>
          {CARDS.map((card) => (
            <article key={card.title} className={styles.card}>
              <span className={styles.icon}>{ICONS[card.icon]}</span>
              <div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardBody}>{card.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.footnote}>
          <span>Built secure from day one. No exceptions.</span>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
            <path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z" stroke="var(--s-teal)" strokeWidth="1.7" strokeLinejoin="round" />
            <path d="M9 12l2 2 4-4" stroke="var(--s-teal)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
