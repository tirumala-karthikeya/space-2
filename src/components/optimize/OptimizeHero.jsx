import { Link } from "react-router-dom";
import styles from "./OptimizeHero.module.css";

export default function OptimizeHero() {
  return (
    <section id="optimize-home" className={styles.hero}>
      <div className={styles.inner}>
        {/* whole card is the banner (op-hero-card.png set as background in CSS) */}
        <div className={styles.card}>
          <div className={styles.copy}>
            <h1 className={styles.title}>
              <span className={styles.titleDark}>What If Your</span>
              <span className={styles.titleDark}>Biggest Bill</span>
              <span>
                <span className={styles.titleDark}>Paid You </span>
                <span className={styles.accent}>Back?</span>
              </span>
            </h1>
            <Link to="/optimize-rent" className={styles.cta}>
              Start Earning on Rent
            </Link>
          </div>
        </div>

        <p className={styles.lead}>
          Stop letting your biggest payment go unrewarded. airPe lets you pay
          rent with a credit card across Canada, turning a mandatory expense into
          miles, points, and cashback while your landlord receives a standard
          bank transfer.
        </p>
      </div>
    </section>
  );
}
