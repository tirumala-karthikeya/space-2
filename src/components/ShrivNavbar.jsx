import { useEffect, useState } from "react";
import styles from "./ShrivNavbar.module.css";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Optimize Rent", href: "#benefits" },
  { label: "Smart Bills", href: "#benefits" },
  { label: "Inside SHRIV", href: "#how-it-works" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact Us", href: "#contact" },
];

export default function ShrivNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.bar}>
        <a href="#home" className={styles.logo} aria-label="Shriv home">
          Shriv
        </a>

        <nav className={styles.nav} aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.label} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className={styles.cta}>
          Get Started <span aria-hidden="true">→</span>
        </a>

        <button
          type="button"
          className={styles.hamburger}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`${styles.barLine} ${menuOpen ? styles.b1 : ""}`} />
          <span className={`${styles.barLine} ${menuOpen ? styles.b2 : ""}`} />
          <span className={`${styles.barLine} ${menuOpen ? styles.b3 : ""}`} />
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className={styles.mobileCta}
          onClick={() => setMenuOpen(false)}
        >
          Get Started →
        </a>
      </div>
    </header>
  );
}
