import { Fragment, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./ShrivNavbar.module.css";

const LINKS = [
  { label: "Home", to: "/" },
  {
    label: "Optimize Rent",
    to: "/optimize-rent",
    children: [
      { label: "Optimize Rent", to: "/optimize-rent" },
      { label: "Commercial Rent", to: "/commercial-rent" },
    ],
  },
  { label: "Smart Bills", to: "/smart-bills" },
  { label: "Inside airPe", to: "/inside-airpe" },
  { label: "Blogs", to: "/#blogs" },
  { label: "Contact Us", to: "/#contact" },
];

const Caret = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
    style={{ marginLeft: 5 }}
  >
    <path
      d="M3 4.5L6 7.5L9 4.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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

  const isGroupActive = (link) =>
    isActive(link.to) || (link.children || []).some((c) => isActive(c.to));

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.bar}>
        <Link to="/" className={styles.logo} aria-label="airPe home">
          airPe
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {LINKS.map((link) =>
            link.children ? (
              <div key={link.label} className={styles.dropdown}>
                <Link
                  to={link.to}
                  className={`${styles.link} ${isGroupActive(link) ? styles.active : ""}`}
                >
                  {link.label}
                  <Caret />
                </Link>
                <div className={styles.submenu} role="menu">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.to}
                      role="menuitem"
                      className={`${styles.submenuLink} ${isActive(child.to) ? styles.submenuActive : ""}`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className={`${styles.link} ${isActive(link.to) ? styles.active : ""}`}
              >
                {link.label}
              </Link>
            )
          )}
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
          <Fragment key={link.label}>
            <Link
              to={link.to}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
            {(link.children || [])
              .filter((c) => c.to !== link.to)
              .map((c) => (
                <Link
                  key={c.label}
                  to={c.to}
                  className={`${styles.mobileLink} ${styles.mobileSub}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {c.label}
                </Link>
              ))}
          </Fragment>
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
