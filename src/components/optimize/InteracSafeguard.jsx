import { useState } from "react";
import styles from "./InteracSafeguard.module.css";

const PAYMENT_ROWS = [
  { icon: "💳", label: "Payment method", value: "CIBC Aventura Visa ····4821" },
  { icon: "🏦", label: "Delivery method", value: "Interac e-Transfer" },
  { icon: "📧", label: "Recipient email", value: "landlord@email.com" },
  { icon: "💰", label: "Amount", value: "$2,150.00 CAD" },
];

const TIMELINE = [
  {
    n: "01",
    title: "Verify Securely",
    body: "Create your account in under two minutes using bank-grade identity verification.",
    meta: "~2 min",
  },
  {
    n: "02",
    title: "Link & Automate",
    body: "Connect your rewards card, add your landlord's details, and set your monthly schedule.",
    meta: "~5 min",
  },
  {
    n: "03",
    title: "Collect & Build",
    body: "Your landlord gets a direct deposit on time, every time. You pocket the points.",
    meta: "Every month",
  },
];

// Monday-first calendar; 1st falls on Wednesday (2 leading blanks)
const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const LEADING_BLANKS = 2;
const DATES = Array.from({ length: 30 }, (_, i) => i + 1);

const ordinal = (n) => {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
};

export default function InteracSafeguard() {
  const [selectedDate, setSelectedDate] = useState(1);
  const [question, setQuestion] = useState("What is your pet's name?");
  const [answer, setAnswer] = useState("buddy123");

  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.inner}>
        {/* HEADER */}
        <header className={styles.header}>
          <p className={styles.label}>
            Your credit card payment, delivered as a standard Canadian
            e-Transfer.
          </p>
          <h2 className={styles.heading}>
            The Automated{" "}
            <span className={styles.gradient}>Interac Safeguard</span>
          </h2>
        </header>

        {/* FEATURE PANEL */}
        <div className={styles.panel}>
          <div className={styles.panelLeft}>
            <span className={styles.panelLabel}>
              Skip the clumsy manual transfers
            </span>
            <p className={styles.panelHeadline}>
              Shriv seamlessly converts your credit card payment into a standard
              Interac e-Transfer automatically.
            </p>
            <p className={styles.panelBody}>
              Your landlord sees a familiar notification. You see a massive spike
              in your points balance. Skip the clumsy manual transfers forever.
            </p>
          </div>

          <div className={styles.panelRight}>
            <div className={styles.detailCard}>
              <span className={styles.detailTitle}>Payment Details</span>
              <div className={styles.detailRows}>
                {PAYMENT_ROWS.map((row) => (
                  <div key={row.label} className={styles.detailRow}>
                    <span className={styles.detailIcon} aria-hidden="true">
                      {row.icon}
                    </span>
                    <span className={styles.detailText}>
                      <span className={styles.detailLabel}>{row.label}</span>
                      <span className={styles.detailValue}>{row.value}</span>
                    </span>
                  </div>
                ))}
              </div>
              <button type="button" className={styles.confirmBtn}>
                Confirm &amp; Schedule
              </button>
            </div>
          </div>
        </div>

        {/* THREE-STEP TIMELINE */}
        <div className={styles.timeline}>
          {TIMELINE.map((step) => (
            <article key={step.n} className={styles.timelineStep}>
              <span className={styles.timelineNum} aria-hidden="true">
                {step.n}
              </span>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>{step.title}</h3>
                <p className={styles.timelineBody}>{step.body}</p>
                <span className={styles.timelineMeta}>{step.meta}</span>
              </div>
            </article>
          ))}
        </div>

        {/* TWO CARDS */}
        <div className={styles.cards}>
          {/* CARD A — Scheduling */}
          <article className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.cardIcon} aria-hidden="true">
                📅
              </span>
              <span className={styles.cardBadge}>Custom Scheduling</span>
            </div>
            <h3 className={styles.cardTitle}>Custom Payment Scheduling</h3>
            <p className={styles.cardBody}>
              Use the intuitive calendar picker to select your exact Payment
              Start Date. Schedule a few days early to build a stress-free buffer
              and guarantee it lands right on time.
            </p>

            <div className={styles.calendar}>
              <span className={styles.calendarLabel}>
                Payment start date
                <span className={styles.calendarSelected}>
                  · the {selectedDate}
                  {ordinal(selectedDate)}
                </span>
              </span>
              <div className={styles.calendarGrid}>
                {WEEKDAYS.map((d) => (
                  <span key={d} className={styles.calendarWeekday}>
                    {d}
                  </span>
                ))}
                {Array.from({ length: LEADING_BLANKS }, (_, i) => (
                  <span key={`b${i}`} className={styles.calendarEmpty} />
                ))}
                {DATES.map((date) => (
                  <button
                    type="button"
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={
                      date === selectedDate
                        ? `${styles.calendarCell} ${styles.calendarCellSelected}`
                        : styles.calendarCell
                    }
                    aria-pressed={date === selectedDate}
                  >
                    {date}
                  </button>
                ))}
              </div>
            </div>
          </article>

          {/* CARD B — Security */}
          <article className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.cardIcon} aria-hidden="true">
                🔐
              </span>
              <span className={styles.cardBadge}>Auto Security</span>
            </div>
            <h3 className={styles.cardTitle}>Automated Security Passwords</h3>
            <p className={styles.cardBody}>
              Input your landlord's security question and password once. Shriv
              handles the secure execution perfectly every single month — no
              manual entry required.
            </p>

            <div className={styles.form}>
              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="sec-question">
                  Security question
                </label>
                <div className={styles.formInput}>
                  <input
                    id="sec-question"
                    type="text"
                    className={styles.formControl}
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Enter a security question"
                  />
                </div>
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="sec-answer">
                  Security answer
                </label>
                <div className={styles.formInput}>
                  <input
                    id="sec-answer"
                    type="password"
                    className={styles.formControl}
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Enter the answer"
                  />
                  {answer.trim() && (
                    <span className={styles.formCheck} aria-hidden="true">
                      ✓
                    </span>
                  )}
                </div>
              </div>
              <span className={styles.formFooter}>
                Saved securely · AES-256 encrypted
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
