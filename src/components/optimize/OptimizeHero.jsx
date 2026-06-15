import { Link } from "react-router-dom";
import styles from "./OptimizeHero.module.css";
import heroCard from "../../assets/figma/op-hero-card.png";

function Icon({ name }) {
  if (name === "check")
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9.2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 12.4l2.6 2.6L16 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  if (name === "key")
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="4.2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M11 11l8 8M16 16l2-2M18.5 18.5l1.4-1.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <rect x="4.5" y="10.5" width="15" height="9.5" rx="2.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function OptimizeHero() {
  return (
    <section id="optimize-home" className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          <span className={styles.titleLine}>Pay Rent with a Credit Card</span>
          <span className={styles.titleLine}>
            <span className={styles.white}>Unlock Premium </span>
            <span className={styles.accent}>Travel &amp; Cashback</span>
          </span>
        </h1>

        <div className={styles.visual} aria-hidden="true">
          <img className={styles.visualImg} src={heroCard} alt="" />
        </div>

        <p className={styles.lead}>
          Stop letting your biggest payment go unrewarded. Shriv lets you
          securely pay rent with a credit card Canada wide, converting a
          mandatory expense into premium miles, points multipliers, and cashback
          while your landlord receives a standard bank transfer.
        </p>
        <p className={styles.sub}>
          Learn how to pay rent with a credit card, unlock massive points, and
          watch your landlord receive a standard bank transfer with zero changes
          on their end.
        </p>

        <Link to="/optimize-rent" className={styles.cta}>
          Start Earning Today
        </Link>

        <ul className={styles.trust}>
          <li>
            <span className={styles.trustIcon}>
              <Icon name="check" />
            </span>
            Free to join
          </li>
          <li>
            <span className={styles.trustIcon}>
              <Icon name="lock" />
            </span>
            Fully secure
          </li>
          <li>
            <span className={styles.trustIcon}>
              <Icon name="key" />
            </span>
            RPAA compliant
          </li>
        </ul>
      </div>
    </section>
  );
}
