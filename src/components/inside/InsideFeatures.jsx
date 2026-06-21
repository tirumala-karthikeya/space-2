import styles from "./InsideFeatures.module.css";

const DASH_ROWS = [
  { name: "Scotia Momentum Visa", amt: "$2,150", status: "Scheduled", tone: "blue" },
  { name: "TD Aeroplan Visa", amt: "$1,800", status: "Delivered", tone: "green" },
  { name: "Amex Cobalt", amt: "$3,400", status: "Processing", tone: "amber" },
];

const SETUP_STEPS = [
  "Enter recipient details",
  "Select your rewards card",
  "Set payment schedule",
];

const LEDGER = [
  { date: "Jun 1", to: "Park Realty Corp.", amt: "$3,200", status: "Delivered", tone: "green" },
  { date: "May 1", to: "Park Realty Corp.", amt: "$3,200", status: "Delivered", tone: "green" },
  { date: "Apr 1", to: "Park Realty Corp.", amt: "$3,200", status: "Delivered", tone: "green" },
  { date: "Jul 1", to: "Park Realty Corp.", amt: "$3,200", status: "Scheduled", tone: "blue" },
  { date: "Jul 1", to: "Hydro Electric Co.", amt: "$140", status: "Processing", tone: "amber" },
];

export default function InsideFeatures() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Core App Features</span>
          <h2 className={styles.heading}>Everything you need in one place</h2>
        </header>

        <div className={styles.grid}>
          {/* 1 — Command Center Dashboard */}
          <article className={styles.card}>
            <span className={`${styles.icon} ${styles.iconBlue}`}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
                <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
            <h3 className={styles.cardTitle}>The Command Center Dashboard</h3>
            <p className={styles.cardBody}>
              Drop the multi-portal juggling. View upcoming balances, recipient
              quick-links, and live transaction streams inside one chronological,
              high-fidelity view.
            </p>
            <div className={styles.mockup}>
              <p className={styles.mockLabel}>
                <i className={styles.live} /> Live Dashboard
              </p>
              {DASH_ROWS.map((r) => (
                <div key={r.name} className={styles.dashRow}>
                  <span className={styles.dashName}>{r.name}</span>
                  <span className={styles.dashRight}>
                    <span className={styles.dashAmt}>{r.amt}</span>
                    <span className={`${styles.pill} ${styles[r.tone]}`}>{r.status}</span>
                  </span>
                </div>
              ))}
            </div>
          </article>

          {/* 2 — Setup to Autopilot */}
          <article className={styles.card}>
            <span className={`${styles.icon} ${styles.iconAmber}`}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 19a2 2 0 0 1-2-2M5 12a9 9 0 0 1 9 9M5 5a16 16 0 0 1 16 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="5.5" cy="18.5" r="1.4" fill="currentColor" />
              </svg>
            </span>
            <h3 className={styles.cardTitle}>Setup to Autopilot in Under 3 Minutes</h3>
            <p className={styles.cardBody}>
              Skip the complex bank paperwork. Our step-by-step tracker guides you
              smoothly from entering your recipient's details to selecting your
              rewards card in just a few clicks.
            </p>
            <div className={styles.checklist}>
              {SETUP_STEPS.map((s, i) => (
                <div key={s} className={styles.checkRow}>
                  <span className={styles.checkNum}>0{i + 1}</span>
                  <span className={styles.checkText}>{s}</span>
                  <span className={styles.checkMark} aria-hidden="true">✓</span>
                </div>
              ))}
            </div>
          </article>

          {/* 3 — Smart Recipient Router */}
          <article className={styles.card}>
            <span className={`${styles.icon} ${styles.iconPurple}`}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
            <h3 className={styles.cardTitle}>The Smart Recipient Router</h3>
            <p className={styles.cardBody}>
              Toggle instantly between paying an Individual Landlord or a Corporate
              Entity. The interface dynamically adapts to capture property profiles,
              frequencies, and routing parameters seamlessly.
            </p>
            <div className={styles.mockup}>
              <p className={styles.fieldLabel}>Recipient Type</p>
              <div className={styles.toggle}>
                <span className={styles.toggleActive}>Individual Landlord</span>
                <span className={styles.toggleIdle}>Corporate Entity</span>
              </div>
              <div className={styles.formGrid}>
                <span className={styles.field}>First name</span>
                <span className={styles.field}>Last name</span>
                <span className={styles.field}>Email</span>
                <span className={styles.field}>Phone</span>
              </div>
            </div>
          </article>

          {/* 4 — Zero-Friction E-Transfer */}
          <article className={styles.card}>
            <span className={`${styles.icon} ${styles.iconGreen}`}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="6" y="3" width="12" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
                <path d="M11 18h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
            <h3 className={styles.cardTitle}>Zero-Friction E-Transfer Automation</h3>
            <p className={styles.cardBody}>
              Your landlord receives a standard e-Transfer, never knowing you used a
              card. Save their security password once, and airPe automates the
              monthly deposit.
            </p>
            <div className={styles.mockup}>
              <div className={styles.interac}>
                <span className={`${styles.icon} ${styles.iconGreen} ${styles.interacIcon}`}>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M3 10l9-6 9 6v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <p className={styles.interacTitle}>Interac e-Transfer</p>
                  <p className={styles.interacBody}>
                    You've received $2,150.00 from airPe Payments Inc.
                  </p>
                  <p className={styles.interacTime}>Just now</p>
                </div>
              </div>
              <p className={styles.interacNote}>
                <i className={styles.live} /> Landlord never sees your card details
              </p>
            </div>
          </article>

          {/* 5 — Live Activity Ledger (full width) */}
          <article className={`${styles.card} ${styles.wide}`}>
            <div className={styles.wideCopy}>
              <span className={`${styles.icon} ${styles.iconAmber}`}>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </span>
              <h3 className={styles.cardTitle}>The Live Activity Ledger</h3>
              <p className={styles.cardBody}>
                Track your payments in real time from processing to successfully
                delivered. Color-coded status updates give you instant clarity and
                make your monthly bookkeeping completely effortless.
              </p>
            </div>
            <div className={styles.table}>
              <div className={`${styles.trow} ${styles.thead}`}>
                <span>Date</span>
                <span>Recipient</span>
                <span>Amount</span>
                <span>Status</span>
              </div>
              {LEDGER.map((r, i) => (
                <div key={i} className={styles.trow}>
                  <span className={styles.tdate}>{r.date}</span>
                  <span>{r.to}</span>
                  <span className={styles.tamt}>{r.amt}</span>
                  <span>
                    <span className={`${styles.pill} ${styles[r.tone]}`}>{r.status}</span>
                  </span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
