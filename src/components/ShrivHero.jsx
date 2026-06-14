import styles from "./ShrivHero.module.css";
import heroVisual from "../assets/figma/hero-visual.png";

function Check() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8 12.5l2.5 2.5L16 9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ShrivHero() {
  return (
    <section id="home" className={styles.hero}>
      {/* ambient glows */}
      <div className={styles.glowTeal} aria-hidden="true" />
      <div className={styles.glowIndigo} aria-hidden="true" />

      <div className={styles.inner}>
        {/* ---- Left: copy ---- */}
        <div className={styles.copy}>
          <span className={styles.badge}>
            <span className={styles.badgeDot} /> Turn Rent Into Rewards
          </span>

          <h1 className={styles.title}>
            <span className={styles.titleLine}>Paying Rent with</span>
            <span className={`${styles.titleLine} ${styles.titleLine2}`}>
              a Credit Card
            </span>
            <span className={`${styles.titleLine} ${styles.accent}`}>
              Made Effortless
            </span>
          </h1>

          <p className={styles.lead}>
            Because your rent should be doing more than just leaving your bank
            account.
          </p>
          <p className={styles.sub}>
            Learn how to pay rent with a credit card, unlock massive points, and
            watch your landlord receive a standard bank transfer with zero
            changes on their end.
          </p>

          <div className={styles.actions}>
            <a href="#contact" className={styles.primary}>
              Start Earning Today
            </a>
            <a href="#how-it-works" className={styles.secondary}>
              See How It Works
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </a>
          </div>

          <ul className={styles.trust}>
            <li>
              <Check /> Free to join
            </li>
            <li>
              <Check /> Fully secure
            </li>
            <li>
              <Check /> RPAA compliant
            </li>
          </ul>
        </div>

        {/* ---- Right: visual (exact Figma art) ---- */}
        <div className={styles.visual} aria-hidden="true">
          <img className={styles.visualImg} src={heroVisual} alt="" />
        </div>
      </div>
    </section>
  );
}
