import { Link } from "react-router-dom";
import styles from "./CommercialHero.module.css";

export default function CommercialHero() {
  return (
    <section id="commercial-home" className={styles.hero}>
      <div className={styles.inner}>
        {/* whole card is the banner (commercial-hero-banner.jpg set as background in CSS) */}
        <div className={styles.card}>
          <div className={styles.copy}>
            <h1 className={styles.title}>
              <span className={styles.titleDark}>A Smarter Way to</span>
              <span className={styles.titleDark}>Pay your</span>
              <span className={styles.accent}>Commercial Rent</span>
            </h1>
            <Link to="/commercial-rent" className={styles.cta}>
              Optimize Business Rent
            </Link>
          </div>
        </div>

        <p className={styles.lead}>
          Don't let fixed monthly bills drain your liquid cash reserves. Leverage
          your corporate credit lines to secure your property lease on time —
          keeping your business agile and well-capitalized.
        </p>
      </div>
    </section>
  );
}
