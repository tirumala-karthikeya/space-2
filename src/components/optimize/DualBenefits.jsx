import styles from "./DualBenefits.module.css";

const BARS = [
  { h: 30, teal: false },
  { h: 38, teal: false },
  { h: 34, teal: false },
  { h: 46, teal: false },
  { h: 52, teal: false },
  { h: 60, teal: false },
  { h: 70, teal: true },
  { h: 82, teal: true },
  { h: 92, teal: true },
  { h: 100, teal: true },
];

const CASHBACK_STATS = [
  { value: "$600", label: "Avg. annual cashback" },
  { value: "1.5×", label: "Miles per dollar" },
  { value: "50+", label: "Cards supported" },
];

export default function DualBenefits() {
  return (
    <section id="dual-benefits" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.label}>Why Shriv</span>
          <h2 className={styles.heading}>
            The Dual Benefits of Shriv
            <br />
            <span className={styles.headingGradient}>Rent Payments</span>
          </h2>
          <p className={styles.subtitle}>
            The full utility of the Shriv platform — built for renters who play
            smarter.
          </p>
        </header>

        <div className={styles.grid}>
          {/* CARD 1 — dark */}
          <article className={`${styles.card} ${styles.cardDark}`}>
            <div className={styles.cardTop}>
              <span className={styles.benefitLabelDark}>Benefit 01</span>
              <span className={styles.iconBadgeDark} aria-hidden="true">
                ✈️
              </span>
            </div>

            <h3 className={styles.cardTitleDark}>
              Premium Miles
              <br />
              &amp; Cash Back
            </h3>

            <p className={styles.cardBodyDark}>
              Route your lease payment through Shriv to collect maximum travel
              miles, point multipliers, or pure cash back straight to your
              favourite card.
            </p>

            <div className={styles.statRow}>
              {CASHBACK_STATS.map((s) => (
                <div key={s.label} className={styles.statBox}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </article>

          {/* CARD 2 — white */}
          <article className={`${styles.card} ${styles.cardLight}`}>
            <div className={styles.cardTop}>
              <span className={styles.benefitLabelLight}>Benefit 02</span>
              <span className={styles.iconBadgeLight} aria-hidden="true">
                📈
              </span>
            </div>

            <h3 className={styles.cardTitleLight}>
              Boost Your
              <br />
              Credit Score
            </h3>

            <p className={styles.cardBodyLight}>
              Shriv automatically and securely reports your consistent, on-time
              rent history to Equifax and TransUnion — elevating your credit
              score passively every month.
            </p>

            <div className={styles.scoreWidget}>
              <div className={styles.scoreHead}>
                <div>
                  <span className={styles.scoreLabel}>Current score</span>
                  <span className={styles.scoreValue}>742</span>
                </div>
                <span className={styles.scoreDelta}>↑ +28 this year</span>
              </div>

              <div className={styles.chart}>
                {BARS.map((b, i) => (
                  <span
                    key={i}
                    className={`${styles.bar} ${b.teal ? styles.barTeal : ""}`}
                    style={{ height: `${b.h}%` }}
                  />
                ))}
              </div>

              <div className={styles.chartAxis}>
                <span className={styles.axisStart}>Jan</span>
                <span className={styles.axisEnd}>Now</span>
              </div>

              <div className={styles.legend}>
                <span className={styles.legendChip}>
                  <span
                    className={`${styles.legendDot} ${styles.dotEquifax}`}
                  />
                  Equifax
                </span>
                <span className={styles.legendChip}>
                  <span
                    className={`${styles.legendDot} ${styles.dotTransunion}`}
                  />
                  TransUnion
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
