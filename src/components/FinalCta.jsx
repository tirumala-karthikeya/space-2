import styles from "./FinalCta.module.css";

export default function FinalCta() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          The Smartest Renters
          <br />
          Already Made the Switch
        </h2>
        <p className={styles.sub}>
          Every month without airPe is a month of rewards you'll never get back.
        </p>
        <a href="#contact" className={styles.cta}>
          Start Earning Before Next Rent Day <span aria-hidden="true">→</span>
        </a>
        <p className={styles.login}>
          Already have an account?{" "}
          <a href="#login" className={styles.loginLink}>
            Log In
          </a>
        </p>
      </div>
    </section>
  );
}
