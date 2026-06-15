import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./ShrivNavbar.module.css";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "Optimize Rent", to: "/optimize-rent" },
  { label: "Smart Bills", to: "/#benefits" },
  { label: "Inside SHRIV", to: "/#how-it-works" },
  { label: "Blogs", to: "/#blogs" },
  { label: "Contact Us", to: "/#contact" },
];

export default function ShrivNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (to) => {
    const base = to.split("#")[0] || "/";
    return base === pathname && !to.includes("#");
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.bar}>
        <Link to="/" className={styles.logo} aria-label="Shriv home">
          Shriv
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`${styles.link} ${isActive(link.to) ? styles.active : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link to="/optimize-rent" className={styles.cta}>
          Get Started <span aria-hidden="true">→</span>
        </Link>

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
          <Link
            key={link.label}
            to={link.to}
            className={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          to="/optimize-rent"
          className={styles.mobileCta}
          onClick={() => setMenuOpen(false)}
        >
          Get Started →
        </Link>
      </div>
    </header>
  );
}
