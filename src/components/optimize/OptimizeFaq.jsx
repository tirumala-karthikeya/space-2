import { useState } from "react";
import styles from "./OptimizeFaq.module.css";

const FAQ_ITEMS = [
  {
    q: "How to pay rent with credit card Canada style using Shriv?",
    a: "Add your landlord as a payee, link your credit card, and schedule the payment inside Shriv. We charge the card and send a bank transfer or cheque to your landlord, so rent leaves on time every month. You keep your card rewards while your landlord gets paid the way they prefer.",
  },
  {
    q: "Can you pay rent with a credit card Canada wide if your landlord doesn't accept cards?",
    a: "Yes. Shriv sits between your card and your landlord, so they never need a card terminal or any account with us. You pay by credit card and we settle directly to their bank account by Interac or EFT. It works for tenants across every province and territory.",
  },
  {
    q: "Does this work for clearing credit card welcome bonuses?",
    a: "Absolutely. Rent is usually your largest recurring expense, which makes it an easy way to hit minimum-spend thresholds on a new card. Route a payment or two through Shriv and you can clear most welcome-bonus requirements without changing your spending habits.",
  },
];

export default function OptimizeFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Frequently Asked Questions</h2>

        <div className={styles.accordion}>
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `optimize-faq-panel-${index}`;
            const buttonId = `optimize-faq-button-${index}`;

            return (
              <div key={item.q} className={styles.item}>
                <button
                  type="button"
                  id={buttonId}
                  className={styles.question}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(index)}
                >
                  <span className={styles.questionText}>{item.q}</span>
                  <span className={styles.icon} aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}
                >
                  <p className={styles.answer}>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
