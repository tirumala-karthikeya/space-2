import styles from "./InteracSafeguard.module.css";
import paymentDetails from "../../assets/figma/op-payment-details.png";
import calendarIcon from "../../assets/figma/op-icon-calendar.png";
import shieldIcon from "../../assets/figma/op-icon-shield.png";

export default function InteracSafeguard() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.inner}>
        {/* HEADER */}
        <header className={styles.header}>
          <p className={styles.label}>
            Your credit card payment, delivered as a standard Canadian
            e-Transfer.
          </p>
          <h2 className={styles.heading}>
            The Automated{" "}
            <span className={styles.gradient}>Interac Safeguard</span>
          </h2>
        </header>

        {/* FEATURE PANEL (container 1) */}
        <div className={styles.panel}>
          <div className={styles.panelLeft}>
            <p className={styles.panelHeadline}>
              Skip the manual transfers. airPe converts your credit card payment
              into a standard Interac e-Transfer automatically. Your landlord sees
              a familiar notification; you see a spike in your points balance.
            </p>
          </div>

          <div className={styles.panelRight}>
            <img
              className={styles.paymentImg}
              src={paymentDetails}
              alt="Payment details: CIBC Aventura Visa, Interac e-Transfer to landlord, $2,150.00 CAD"
            />
          </div>
        </div>

        {/* TWO CARDS (containers 2 & 3) */}
        <div className={styles.cards}>
          {/* container 2 — Scheduling */}
          <article className={styles.card}>
            <div className={styles.cardMain}>
              <span className={styles.cardIcon} aria-hidden="true">
                📅
              </span>
              <h3 className={styles.cardTitle}>Custom Payment Scheduling</h3>
              <p className={styles.cardBody}>
                Use the intuitive calendar picker to select your exact Payment
                Start Date.
              </p>
              <p className={styles.cardBody}>
                Schedule it a few days early to build a stress-free buffer and
                guarantee it lands right on time.
              </p>
            </div>
            <img className={styles.cardIllo} src={calendarIcon} alt="" aria-hidden="true" />
          </article>

          {/* container 3 — Security */}
          <article className={styles.card}>
            <div className={styles.cardMain}>
              <span className={styles.cardIcon} aria-hidden="true">
                🔐
              </span>
              <h3 className={styles.cardTitle}>Automated Security Passwords</h3>
              <p className={styles.cardBody}>
                Works with Visa, Mastercard, Amex, and more.
              </p>
              <p className={styles.cardBody}>Pick the card that earns you the most.</p>
            </div>
            <img className={styles.cardIllo} src={shieldIcon} alt="" aria-hidden="true" />
          </article>
        </div>
      </div>
    </section>
  );
}
