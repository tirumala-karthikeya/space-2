import { useMemo, useState } from "react";
import styles from "./RentCalculator.module.css";

// Average credit-card reward rate used for the estimate.
const REWARD_RATE = 0.02;

function formatCurrency(value) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function RentCalculator() {
  const [raw, setRaw] = useState("");

  const monthly = Number(raw) || 0;

  const { annualReward, points } = useMemo(() => {
    const annual = monthly * 12;
    return {
      annualReward: annual * REWARD_RATE,
      points: Math.round(annual),
    };
  }, [monthly]);

  const handleChange = (e) => {
    // keep digits only
    const digits = e.target.value.replace(/[^\d]/g, "");
    setRaw(digits);
  };

  return (
    <section id="calculator" className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <h2 className={styles.heading}>What's Your Rent Really Worth?</h2>
        <p className={styles.subheading}>
          See what you could be earning on rent every year.
        </p>

        <div className={styles.panel}>
          <label className={styles.label} htmlFor="monthly-expenses">
            My monthly expenses are:
          </label>
          <div className={styles.inputWrap}>
            <span className={styles.currency}>$</span>
            <input
              id="monthly-expenses"
              className={styles.input}
              inputMode="numeric"
              placeholder="0"
              value={raw}
              onChange={handleChange}
              aria-describedby="calc-result"
            />
          </div>

          {monthly > 0 && (
            <div id="calc-result" className={`${styles.result} ${styles.resultActive}`}>
              <div className={styles.resultItem}>
                <span className={styles.resultValue}>
                  {formatCurrency(annualReward)}
                </span>
                <span className={styles.resultLabel}>Estimated annual reward</span>
              </div>
              <div className={styles.resultDivider} />
              <div className={styles.resultItem}>
                <span className={styles.resultValue}>
                  {points.toLocaleString("en-CA")}
                </span>
                <span className={styles.resultLabel}>Reward points / year</span>
              </div>
            </div>
          )}
        </div>

        <p className={styles.tagline}>
          Paying rent is unavoidable. Earning from it is a choice.
        </p>

        <a href="#contact" className={styles.cta}>
          Start Earning Now <span aria-hidden="true">→</span>
        </a>

        <p className={styles.disclaimer}>
          Disclaimer - Reward estimates are based on average credit card cashback
          and points rates. Actual earnings may vary based on your card's reward
          structure and terms.
        </p>
      </div>
    </section>
  );
}
