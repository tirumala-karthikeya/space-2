import { Link } from "react-router-dom";
import styles from "./SmartBillsHero.module.css";

export default function SmartBillsHero() {
  return (
    <section id="smart-bills-home" className={styles.hero}>
      <div className={styles.inner}>
        {/* whole card is the banner (smartbills-hero-banner.png set as background in CSS) */}
        <div className={styles.card}>
          <div className={styles.copy}>
            <h1 className={styles.title}>
              <span className={styles.titleDark}>One App, Every Utility</span>
              <span className={styles.accent}>Zero Monthly Chores.</span>
            </h1>
            <Link to="/smart-bills" className={styles.cta}>
              Consolidate Your Bills Now
            </Link>
          </div>
        </div>

        <p className={styles.lead}>
          Bring all your monthly bills into a single, automated dashboard. Safely
          pay bills with a credit card in Canada and turn administrative
          headaches into automated rewards.
        </p>
      </div>
    </section>
  );
}
