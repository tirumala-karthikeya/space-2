import { Link } from "react-router-dom";
import styles from "./ShrivFooter.module.css";

const COMPANY = [
  { label: "Optimize Rent", to: "/optimize-rent" },
  { label: "Smart Bills", to: "/smart-bills" },
  { label: "Blogs", to: "/#blogs" },
  { label: "Contact", to: "/#contact" },
];

const OTHERS = [{ label: "Inside airPe", to: "/inside-airpe" }];

const LEGAL = [
  { label: "Terms & Condition", href: "#terms" },
  { label: "Disclaimer", href: "#disclaimer" },
  { label: "Privacy Policy", href: "#privacy" },
];

const SOCIALS = [
  {
    label: "Twitter",
    href: "#",
    path: "M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.3 1.7-2.2-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.8 3.6A11.3 11.3 0 0 1 3.8 4.6a4 4 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.8-.5a4 4 0 0 0 3.2 4 4 4 0 0 1-1.8.1 4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 18.1 11.3 11.3 0 0 0 8.1 20c7.4 0 11.5-6.2 11.5-11.5v-.5c.8-.6 1.5-1.3 2-2.2z",
  },
  {
    label: "Facebook",
    href: "#",
    path: "M14 9h2.5l.5-3H14V4.3c0-.9.3-1.5 1.5-1.5H17V.1C16.7 0 15.8 0 14.8 0 12.6 0 11 1.3 11 3.9V6H8.5v3H11v9h3V9z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.9c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1s-3.6 0-4.9-.1c-3.2-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9C2.4 3.9 4 2.3 7.1 2.2 8.4 2.2 8.8 2.2 12 2.2zm0 4.9a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8zm0 8a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2zm5-8.4a1.1 1.1 0 1 0 0 2.3 1.1 1.1 0 0 0 0-2.3z",
  },
  {
    label: "Google",
    href: "#",
    path: "M21.8 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.5a4.7 4.7 0 0 1-2 3.1v2.6h3.3c1.9-1.8 3-4.4 3-7.5zM12 22c2.7 0 5-.9 6.6-2.4l-3.3-2.6c-.9.6-2 1-3.3 1-2.6 0-4.7-1.7-5.5-4.1H3.1v2.6A10 10 0 0 0 12 22zm-5.5-8.1a6 6 0 0 1 0-3.8V7.5H3.1a10 10 0 0 0 0 9l3.4-2.6zM12 5.9c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 0 0 3.1 7.5l3.4 2.6C7.3 7.6 9.4 5.9 12 5.9z",
  },
];

export default function ShrivFooter() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <span className={styles.brand}>airPe</span>
            <p className={styles.tagline}>Effortless Bill Payments</p>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Company</h4>
            {COMPANY.map((l) => (
              <Link key={l.label} to={l.to} className={styles.link}>
                {l.label}
              </Link>
            ))}
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Others</h4>
            {OTHERS.map((l) => (
              <Link key={l.label} to={l.to} className={styles.link}>
                {l.label}
              </Link>
            ))}
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact</h4>
            <p className={styles.metaLabel}>Registered Address</p>
            <p className={styles.metaText}>
              Mississauga, ON,
              <br />
              Canada, L4Z0A9
            </p>
            <a href="tel:+16047205021" className={styles.link}>
              +1 604 720 5021
            </a>
            <p className={styles.metaLabel}>Working Hours</p>
            <p className={styles.metaText}>
              Monday – Friday
              <br />
              09:00 AM – 05:00 PM EST
            </p>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Legal</h4>
            {LEGAL.map((l) => (
              <a key={l.label} href={l.href} className={styles.link}>
                {l.label}
              </a>
            ))}
            <p className={`${styles.metaLabel} ${styles.followLabel}`}>Follow Us on:</p>
            <div className={styles.socials}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className={styles.social}
                  aria-label={s.label}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2026 Brainwaveworld. All rights reserved</span>
          <span className={styles.flag} aria-label="Canada">
            🇨🇦
          </span>
        </div>
      </div>
    </footer>
  );
}
