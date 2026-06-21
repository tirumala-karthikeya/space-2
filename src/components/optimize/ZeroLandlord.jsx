import { useState } from "react";
import styles from "./ZeroLandlord.module.css";

const REWARDS = [
  { title: "Travel Card", detail: "3% cashback · 3x points", rate: 0.03, mult: 3 },
  { title: "Cashback Card", detail: "2% cashback · 2x points", rate: 0.02, mult: 2 },
  { title: "Premium Card", detail: "5% cashback · 5x points", rate: 0.05, mult: 5 },
];

const MIN = 5000;
const MAX = 100000;
const inr = (n) => "₹" + Math.round(n).toLocaleString("en-US");
const num = (n) => Math.round(n).toLocaleString("en-US");

export default function ZeroLandlord() {
  const [rent, setRent] = useState(25000);
  const [activeIdx, setActiveIdx] = useState(1); // Cashback Card

  const card = REWARDS[activeIdx];
  const annual = rent * 12 * card.rate;
  const points = rent * 12 * card.mult;
  const pct = ((rent - MIN) / (MAX - MIN)) * 100;

  return (
    <section id="rent-calculator" className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        {/* LEFT COLUMN */}
        <div className={styles.left}>
          <span className={styles.label}>Rent Calculator</span>
          <h2 className={styles.heading}>
            The Zero Landlord
            <br />
            Drama Guarantee
          </h2>
          <p className={styles.subLabel}>
            Effortless rewards for you. Zero changes for your landlord.
          </p>
          <p className={styles.paragraph}>
            You don't need your landlord's permission to start earning on your
            lease. airPe handles the conversion instantly in the background so
            you can pay rent with a credit card Canada wide completely
            hassle-free.
          </p>
        </div>

        {/* RIGHT COLUMN — interactive calculator card */}
        <div className={styles.card}>
          <span className={styles.watermark} aria-hidden="true">
            ₹
          </span>

          {/* 1 + 2. Monthly rent + slider (boxed) */}
          <div className={styles.rentBox}>
            <div className={styles.rentRow}>
              <span className={styles.rentLabel}>Monthly Rent</span>
              <span className={styles.rentValue}>{inr(rent)}</span>
            </div>

            <div className={styles.slider}>
              <div className={styles.sliderTrack}>
                <div
                  className={styles.sliderFill}
                  style={{ width: `${pct}%` }}
                />
                <div className={styles.sliderKnob} style={{ left: `${pct}%` }} />
              </div>
              <input
                type="range"
                className={styles.sliderInput}
                min={MIN}
                max={MAX}
                step={1000}
                value={rent}
                onChange={(e) => setRent(Number(e.target.value))}
                aria-label="Monthly rent"
              />
              <div className={styles.sliderEnds}>
                <span>₹5k</span>
                <span>₹1L</span>
              </div>
            </div>
          </div>

          {/* 3. Annual earnings */}
          <div className={styles.earnings}>
            <span className={styles.earningsLabel}>Annual Earnings</span>
            <span className={styles.earningsValue}>{inr(annual)}</span>
            <span className={styles.earningsNote}>+ {num(points)} reward points</span>
          </div>

          {/* 4. Reward cards (clickable to switch rate) */}
          <div className={styles.rewards}>
            {REWARDS.map((r, i) => (
              <button
                type="button"
                key={r.title}
                onClick={() => setActiveIdx(i)}
                className={`${styles.rewardRow} ${
                  i === activeIdx ? styles.rewardRowActive : ""
                }`}
                aria-pressed={i === activeIdx}
              >
                <div className={styles.rewardMain}>
                  <span className={styles.rewardTitle}>{r.title}</span>
                  <span className={styles.rewardDetail}>{r.detail}</span>
                </div>
                {i === activeIdx && (
                  <span className={styles.activePill}>ACTIVE</span>
                )}
              </button>
            ))}
          </div>

          {/* 5. Platform fee */}
          <div className={styles.feeRow}>
            <span className={styles.feeLabel}>Est. platform fee</span>
            <span className={styles.feeValue}>~₹2700 / yr</span>
          </div>

          {/* 6. CTA */}
          <a href="#contact" className={styles.cta}>
            Start Earning Now →
          </a>
        </div>
      </div>
    </section>
  );
}
