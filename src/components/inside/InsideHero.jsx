import { Link } from "react-router-dom";
import styles from "./InsideHero.module.css";
import dashboard from "../../assets/figma/inside-hero-dashboard.png";

export default function InsideHero() {
  return (
    <section id="inside-home" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.card}>
          <div className={styles.copy}>
            <h1 className={styles.title}>
              Your Entire
              <br />
              Financial
              <br />
              Footprint,
              <br />
              <span className={styles.accent}>Organized</span>
            </h1>
            <Link to="/inside-airpe" className={styles.cta}>
              Experience the Dashboard
            </Link>
          </div>

          <div className={styles.preview}>
            <img
              src={dashboard}
              alt="airPe dashboard showing a payment setup tracker and quick actions"
              loading="lazy"
            />
          </div>
        </div>

        <p className={styles.lead}>
          Step into your financial command center. Track your monthly expenses,
          deploy your favorite cards, and optimize your cash flow from one sleek
          interface.
        </p>
      </div>
    </section>
  );
}
