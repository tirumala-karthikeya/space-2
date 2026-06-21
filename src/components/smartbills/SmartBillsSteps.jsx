import styles from "./SmartBillsSteps.module.css";

const STEPS = [
  {
    n: "01",
    tone: "indigo",
    title: "Sync Your Billers",
    body: "Securely search and link your standard monthly accounts right inside your central airPe hub.",
  },
  {
    n: "02",
    tone: "blue",
    title: "Link & Automate",
    body: "Safely connect your favorite rewards or cashback credit card to serve as your primary funding source.",
  },
  {
    n: "03",
    tone: "rose",
    title: "Collect & Build",
    body: "Choose your payment dates. airPe handles your recurring bill payments quietly in the background, keeping you protected and rewarded.",
  },
];

export default function SmartBillsSteps() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>How it works</span>
          <h2 className={styles.heading}>The 3-Step Set-and-Forget System</h2>
        </header>

        <div className={styles.grid}>
          {STEPS.map((step) => (
            <article
              key={step.n}
              className={`${styles.card} ${styles[step.tone]}`}
            >
              <span className={styles.ghost} aria-hidden="true">
                {step.n}
              </span>
              <span className={styles.num}>{step.n}</span>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardBody}>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
