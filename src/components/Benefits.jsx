import styles from "./Benefits.module.css";
import imgRentMax from "../assets/figma/benefit-rent-maximization.jpg";
import imgBillHub from "../assets/figma/benefit-bill-consolidation.jpg";
import imgCredit from "../assets/figma/benefit-credit-building.jpg";
import imgAuto from "../assets/figma/benefit-automation.jpg";

const CARDS = [
  {
    image: imgRentMax,
    title: "Rent Maximization",
    subtitle: "Turn Your Rent Into Rewards",
    body: "Your rent is your largest monthly expense. Put it to work. Shriv bridges the gap so you can pay rent with a credit card, effortlessly racking up premium travel miles, points, or cashback on money you already owe.",
    link: "Claim Your Rewards",
  },
  {
    image: imgBillHub,
    title: "Smart Bill Consolidation",
    subtitle: "All Your Bills. One Master Hub.",
    body: "Stop juggling multiple bills across different payment platforms. Securely centralize your rent, commercial utilities, and major recurring expenses in one clean dashboard. Never lose track of your cash flow again.",
    link: "Simplify Bills",
  },
  {
    image: imgCredit,
    title: "Programmatic Credit Building",
    subtitle: "Every Payment Builds Your Future",
    body: "Watch your credit score grow with every payment you were already making. Shriv securely reports your consistent, on-time payment history to major Canadian credit bureaus to help elevate your credit file with every payment you schedule.",
    link: "Track Credit Impact",
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
