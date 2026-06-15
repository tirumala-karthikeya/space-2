import { useState } from "react";
import styles from "./Commercial.module.css";

const FLOAT_CARDS = [
  {
    emoji: "🌉",
    title: "The Cash Flow Bridge",
    body: "Don't let a temporary cash crunch disrupt your daily operations. If delayed client invoices leave you unable to pay commercial lease bills, Shriv bridges the gap immediately.",
  },
  {
    emoji: "👥",
    title: "Protect Corporate Payroll",
    body: "Leverage your corporate card's 45-day interest-free grace period to keep liquid capital in your primary account. Never choose between paying your staff and satisfying your landlord.",
  },
  {
    emoji: "🚀",
    title: "Fuel Business Scalability",
    body: "Maintain an agile financial cushion. Redirect freed-up cash reserves immediately into high-growth business needs like bulk inventory orders and increased marketing spend.",
  },
];

const REWARDS_CARDS = [
  {
    emoji: "✈️",
    title: "Millions of Points",
    body: "Commercial rent is a massive capital output. Shriv turns this mandatory liability into millions of reward points — unlocking elite travel tiers and cash back.",
  },
  {
    emoji: "🌍",
    title: "Global Flexibility",
    body: "It doesn't matter where your primary corporate credit line is located. Shriv seamlessly accepts domestic, US, and international business cards.",
  },
  {
    emoji: "⚙️",
    title: "Automatic Processing",
    body: "We handle all backend compliance and currency routing. Your landlord simply receives a standard on-time bank transfer with zero fees.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What happens if I can't pay my commercial lease in cash this month?",
    a: "Shriv lets you charge your monthly lease to your corporate credit card while your landlord still receives a standard bank transfer. This frees up your liquid cash for payroll and operations during a tight month. You simply repay the card on its normal billing cycle, using the interest-free grace period to your advantage.",
  },
  {
    q: "Does my property manager need to accept corporate credit cards?",
    a: "No. Your landlord or property manager never interacts with the card network at all. Shriv collects the payment from your card and settles directly to their account as a clean, on-time bank transfer — no terminals, accounts, or changes required on their end.",
  },
  {
    q: "Is there a limit on the amount of commercial rent I can pay through Shriv?",
    a: "Your payment ceiling is governed by your own corporate credit line, not by Shriv. Whether your lease runs a few thousand or well into six figures, we route it seamlessly across domestic and international cards. For very large recurring outputs, our team can structure the processing to fit your billing cycle.",
  },
];

export default function Commercial() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section id="commercial" className={styles.section}>
      <div className={styles.container}>
        {/* ===== BLOCK 1 — dark gradient hero card ===== */}
        <div className={styles.heroCard}>
          <div className={styles.heroLeft}>
            <span className={styles.heroLabel}>Commercial Rent</span>
            <h2 className={styles.heroHeading}>
              Protect Your Business Cash Flow with Strategic Lease Payments
            </h2>
            <p className={styles.heroBody}>
              Don't let fixed monthly bills drain your liquid cash reserves.
              Leverage your corporate credit lines to secure your property lease
              on time — keeping your business agile and well-capitalized.
            </p>
            <a href="#contact" className={styles.heroCta}>
              Optimize Business Rent →
            </a>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.statBox}>
              <div className={styles.statNumberRow}>
                <span className={styles.statNumber}>45</span>
                <span className={styles.statDays}>days</span>
              </div>
              <span className={styles.statLabel}>Interest-free float</span>
            </div>
          </div>
        </div>

        {/* ===== BLOCK 2 — Maximize Your Interest-Free Float ===== */}
        <div className={styles.block}>
          <div className={styles.centerHeader}>
            <span className={styles.tealLabel}>Cash Flow</span>
            <h2 className={styles.lightHeadingLarge}>
              Maximize Your Interest-Free Float
            </h2>
          </div>

          <div className={styles.cardGrid}>
            {FLOAT_CARDS.map((card) => (
              <article key={card.title} className={styles.card}>
                <span className={styles.cardEmoji} aria-hidden="true">
                  {card.emoji}
                </span>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardBody}>{card.body}</p>
              </article>
            ))}
          </div>
        </div>

        {/* ===== BLOCK 3 — Corporate Rewards Framework ===== */}
        <div className={styles.block}>
          <div className={styles.rewardsCard}>
            <div className={styles.rewardsHeader}>
              <span className={styles.tealLabel}>Rewards</span>
              <h2 className={styles.lightHeading}>Corporate Rewards Framework</h2>
              <p className={styles.rewardsSubtitle}>
                Let your highest monthly bills pay for your team's next business
                flights.
              </p>
            </div>

            <div className={styles.rewardsRow}>
              {REWARDS_CARDS.map((card) => (
                <div key={card.title} className={styles.rewardCol}>
                  <span className={styles.cardEmoji} aria-hidden="true">
                    {card.emoji}
                  </span>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardBody}>{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== BLOCK 4 — Common Questions ===== */}
        <div className={styles.block}>
          <div className={styles.centerHeader}>
            <span className={styles.tealLabel}>Commercial FAQs</span>
            <h2 className={styles.lightHeading}>Common Questions</h2>
          </div>

          <div className={styles.accordion}>
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              const panelId = `commercial-faq-panel-${index}`;
              const buttonId = `commercial-faq-button-${index}`;

              return (
                <div key={item.q} className={styles.faqItem}>
                  <button
                    type="button"
                    id={buttonId}
                    className={styles.faqQuestion}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                  >
                    <span className={styles.faqQuestionText}>{item.q}</span>
                    <span className={styles.faqIcon} aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`${styles.faqPanel} ${
                      isOpen ? styles.faqPanelOpen : ""
                    }`}
                  >
                    <p className={styles.faqAnswer}>{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
