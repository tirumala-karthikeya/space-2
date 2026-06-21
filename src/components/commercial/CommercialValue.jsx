import styles from "./CommercialValue.module.css";

const FLOW_CARDS = [
  {
    icon: "🌉",
    title: "The Cash Flow Bridge",
    body: "Got delayed invoices but rent is due? airPe covers your lease payment now, so you're never stuck waiting on clients to pay your landlord.",
  },
  {
    icon: "👥",
    title: "Protect Corporate Payroll",
    body: "Use your card's interest-free grace period to keep cash in your account longer. Never choose between payroll and rent.",
  },
  {
    icon: "🚀",
    title: "Fuel Business Scalability",
    body: "Free up cash for what grows your business, inventory, marketing, opportunities.",
  },
];

const REWARDS = [
  {
    icon: "✈️",
    title: "Millions of Points",
    body: "Commercial rent is a massive expense. airPe turns it into your biggest recurring asset, unlocking elite travel tiers and cashback.",
  },
  {
    icon: "🌍",
    title: "Global Flexibility",
    body: "It doesn't matter where your corporate card is issued. airPe accepts domestic, US, and international business cards.",
  },
  {
    icon: "⚙️",
    title: "Automatic Processing",
    body: "We handle compliance and currency routing in the background. Your landlord gets a standard, on-time bank transfer with zero fees.",
  },
];

export default function CommercialValue() {
  return (
    <section id="commercial-value" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Cash Flow</span>
          <h2 className={styles.heading}>Make Every Dollar Work Harder</h2>
        </header>

        {/* top 3 cards */}
        <div className={styles.cardRow}>
          {FLOW_CARDS.map((c) => (
            <article key={c.title} className={styles.card}>
              <span className={styles.cardIcon} aria-hidden="true">
                {c.icon}
              </span>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardBody}>{c.body}</p>
            </article>
          ))}
        </div>

        {/* rewards container */}
        <div className={styles.rewards}>
          <span className={`${styles.eyebrow} ${styles.eyebrowTight}`}>Rewards</span>
          <h3 className={styles.rewardsTitle}>Corporate Rewards Framework</h3>
          <p className={styles.rewardsSub}>
            Let your biggest monthly bill pay for your team's next business flights.
          </p>

          <div className={styles.rewardsGrid}>
            {REWARDS.map((r) => (
              <div key={r.title} className={styles.rewardItem}>
                <span className={styles.rewardIcon} aria-hidden="true">
                  {r.icon}
                </span>
                <h4 className={styles.rewardItemTitle}>{r.title}</h4>
                <p className={styles.rewardItemBody}>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
