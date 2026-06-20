import { useState } from "react";
import styles from "./CommercialFaq.module.css";

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

export default function CommercialFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) =>
    setOpenIndex((current) => (current === index ? -1 : index));

  return (
    <section id="commercial-faq" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Commercial FAQs</h2>

        <div className={styles.accordion}>
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `commercial-faq-panel-${index}`;
            const buttonId = `commercial-faq-button-${index}`;

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
                    {isOpen ? "⌃" : "⌄"}
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
