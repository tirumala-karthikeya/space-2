import { useState } from "react";
import styles from "./SmartBillsFaq.module.css";

const FAQ_ITEMS = [
  {
    q: "How to automate bill payments using airPe?",
    a: "Link your monthly billers, connect your rewards credit card as the funding source, and pick your payment dates. airPe charges your card and settles each bill on schedule, so your utilities, insurance, and subscriptions are paid on time without you lifting a finger.",
  },
  {
    q: "How long do bill payments take to process?",
    a: "Most payments are initiated the moment they are scheduled and settle to your biller within 1–3 business days, depending on the provider. You'll see every payment's status in your dashboard, and we send a confirmation once funds are delivered.",
  },
];

export default function SmartBillsFaq() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggle = (index) =>
    setOpenIndex((current) => (current === index ? -1 : index));

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>FAQ</span>
          <h2 className={styles.heading}>Bill Payments FAQ</h2>
          <p className={styles.sub}>
            Everything you need to know about automating your monthly expenses
            through airPe.
          </p>
        </div>

        <div className={styles.accordion}>
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `smartbills-faq-panel-${index}`;
            const buttonId = `smartbills-faq-button-${index}`;

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
                  <span
                    className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 12 12" fill="none">
                      <path
                        d="M3 4.5 6 7.5 9 4.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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
