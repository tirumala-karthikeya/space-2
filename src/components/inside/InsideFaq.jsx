import { useState } from "react";
import styles from "./InsideFaq.module.css";

const FAQ_ITEMS = [
  {
    q: "How secure is airPe's digital wallet infrastructure?",
    a: "Extremely. airPe uses bank-grade AES 256-bit encryption and card tokenization. Your raw card details are never stored on our servers or exposed to landlords and utility companies.",
  },
  {
    q: "Can I use different credit cards for different bills?",
    a: "Yes. You can link multiple rewards cards and assign a specific card to each biller, so every payment routes through the card that earns you the most points or cashback.",
  },
];

export default function InsideFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) =>
    setOpenIndex((current) => (current === index ? -1 : index));

  return (
    <section id="product-faq" className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>FAQ</span>
        <h2 className={styles.heading}>Product FAQ's</h2>

        <div className={styles.accordion}>
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `inside-faq-panel-${index}`;
            const buttonId = `inside-faq-button-${index}`;

            return (
              <div
                key={item.q}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
              >
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
                    {isOpen ? "×" : "+"}
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
