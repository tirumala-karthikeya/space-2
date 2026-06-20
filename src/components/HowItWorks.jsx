import styles from "./HowItWorks.module.css";

const STEPS = [
  {
    n: 1,
    title: "Sign Up Securely",
    body: "Create your account in under two minutes using our bank-grade verification.",
  },
  {
    n: 2,
    title: "Link & Automate",
    body: "Link your card, add recipient details, and set your schedule. Fees are always shown upfront, no surprises.",
  },
  {
    n: 3,
    title: "Collect Points",
    body: "Your recipient gets paid right on time. They don't even need a Shriv account. You pocket the points.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.headingPanel}>
          <h2 className={styles.heading}>Get Started in Minutes</h2>
          <p className={styles.subheading}>
            No paperwork. No hassle. Up and running in minutes.
          </p>
        </div>

        <div className={styles.steps}>
          {STEPS.map((step, i) => (
            <div key={step.n} className={styles.stepWrap}>
              <article className={styles.step}>
                <span className={styles.num}>{step.n}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepBody}>{step.body}</p>
                {step.note && <p className={styles.note}>{step.note}</p>}
              </article>
              {i < STEPS.length - 1 && (
                <span className={styles.connector} aria-hidden="true">
                  ›
                </span>
              )}
            </div>
          ))}
        </div>

        <a href="#contact" className={styles.cta}>
          Get Started Now <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
