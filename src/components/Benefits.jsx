import styles from "./Benefits.module.css";
import imgRewards from "../assets/figma/benefit-rent-maximization.png";
import imgBills from "../assets/figma/benefit-bill-consolidation.png";
import imgAuto from "../assets/figma/benefit-automation.png";

const CARDS = [
  {
    image: imgRewards,
    title: "Rent Rewards Unlocked",
    subtitle: "Same Rent Payment, More Rewards",
    body: "Rent's leaving your account anyway, might as well get something back. Shriv lets you pay rent with a credit card, turning money you already owe into travel miles, points, or cashback.",
    link: "Claim Your Rewards",
  },
  {
    image: imgBills,
    title: "Smart Bill Consolidation",
    subtitle: "All Your Bills. One Master Hub.",
    body: "Stop juggling platforms. Manage rent, utilities, and recurring expenses in one secure place. Never lose track of your cash flow again.",
    link: "Simplify Bills",
  },
  {
    image: imgAuto,
    title: "Set-and-Forget Automation",
    subtitle: "Rent on Autopilot. Always on Time",
    body: "No missed payments, no late fees, no stress. Schedule your payments once and let our automated system execute your transfers quietly in the background.",
    link: "Put Payments on Autopilot",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>One Platform. Endless Benefits.</h2>

        <div className={styles.grid}>
          {CARDS.map((card) => (
            <article key={card.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <div className={styles.illustration}>
                <img src={card.image} alt={card.title} loading="lazy" />
              </div>
              <p className={styles.cardSubtitle}>{card.subtitle}</p>
              <p className={styles.cardBody}>{card.body}</p>
              <a href="#contact" className={styles.cardLink}>
                {card.link} <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
