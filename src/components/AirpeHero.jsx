import styles from "./AirpeHero.module.css";

/* ------------------------------------------------------------------
   3-step icons.
   These inline SVGs are placeholders calibrated to the Figma colours
   (blue card+shield / green bank / purple gift+star). To use the real
   3D PNGs, drop them in src/assets/figma and replace the matching
   <…Icon /> with  <img className={styles.iconImg} src={pngImport} alt="" />.
   ------------------------------------------------------------------ */
function PayIcon() {
  return (
    <svg viewBox="0 0 80 80" width="84" height="84" aria-hidden="true">
      <rect x="14" y="24" width="46" height="32" rx="6" fill="#2563EB" />
      <rect x="14" y="31" width="46" height="7" fill="#1E40AF" />
      <rect x="20" y="45" width="14" height="5" rx="2" fill="#93C5FD" />
      <circle cx="58" cy="54" r="13" fill="#1D4ED8" />
      <path
        d="M52.5 54.2l3.6 3.6 7-7.4"
        stroke="#fff"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BankIcon() {
  return (
    <svg viewBox="0 0 80 80" width="84" height="84" aria-hidden="true">
      <path d="M40 16l26 13H14L40 16z" fill="#fff" />
      <circle cx="40" cy="25" r="3.4" fill="#16A34A" />
      <rect x="20" y="33" width="6" height="20" fill="#fff" />
      <rect x="37" y="33" width="6" height="20" fill="#fff" />
      <rect x="54" y="33" width="6" height="20" fill="#fff" />
      <rect x="14" y="56" width="52" height="6" rx="2" fill="#fff" />
      <circle cx="60" cy="56" r="12" fill="#16A34A" />
      <path
        d="M55 56h10m0 0l-4-4m4 4l-4 4"
        stroke="#fff"
        strokeWidth="2.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RewardIcon() {
  return (
    <svg viewBox="0 0 80 80" width="84" height="84" aria-hidden="true">
      <rect x="18" y="34" width="44" height="28" rx="4" fill="#7C3AED" />
      <rect x="18" y="28" width="44" height="10" rx="3" fill="#8B5CF6" />
      <rect x="36" y="28" width="8" height="34" fill="#5B21B6" />
      <path
        d="M40 28c-6-10-16-4-9 2 3 2 9-2 9-2zm0 0c6-10 16-4 9 2-3 2-9-2-9-2z"
        fill="#A78BFA"
      />
      <circle cx="59" cy="55" r="13" fill="#F59E0B" />
      <path
        d="M59 48l2.3 4.6 5 .7-3.6 3.6.9 5-4.6-2.4-4.6 2.4.9-5-3.6-3.6 5-.7L59 48z"
        fill="#FDE68A"
      />
    </svg>
  );
}

function FlowArrow({ color }) {
  return (
    <svg
      className={styles.arrow}
      viewBox="0 0 64 24"
      width="64"
      height="24"
      aria-hidden="true"
    >
      <path
        d="M4 12h50m0 0l-12-8m12 8l-12 8"
        stroke={color}
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const STEPS = [
  { Icon: PayIcon, tint: "pay", label: "You Pay", sub: "Rent with Credit Card" },
  { Icon: BankIcon, tint: "bank", label: "Landlord gets", sub: "Standard Bank Transfer" },
  { Icon: RewardIcon, tint: "reward", label: "Reward Points", sub: "Earned" },
];

export default function AirpeHero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.glowTeal} aria-hidden="true" />
      <div className={styles.glowIndigo} aria-hidden="true" />
      <div className={styles.glowBlue} aria-hidden="true" />

      <div className={styles.inner}>
        <h1 className={styles.title}>
          <span className={styles.titleWhite}>Paying Rent with a Credit Card</span>
          <span className={styles.titleAccent}>Made Effortless</span>
        </h1>

        <div className={styles.flowCard}>
          <div className={styles.steps}>
            {STEPS.map((s, i) => (
              <div className={styles.stepGroup} key={s.label}>
                <div className={styles.step}>
                  <div className={`${styles.iconWrap} ${styles[s.tint]}`}>
                    <s.Icon />
                  </div>
                  <div className={`${styles.stepLabel} ${styles[`${s.tint}Label`]}`}>
                    {s.label}
                  </div>
                  <div className={styles.stepSub}>{s.sub}</div>
                </div>
                {i < STEPS.length - 1 && (
                  <FlowArrow color={i === 0 ? "#06B3FF" : "#31E27F"} />
                )}
              </div>
            ))}
          </div>

          <p className={styles.flowNote}>
            Turn rent into rewards. Your landlord gets paid the same way as always.
          </p>

          <a href="#contact" className={styles.cta}>
            Start Earning Today
          </a>
        </div>
      </div>
    </section>
  );
}
