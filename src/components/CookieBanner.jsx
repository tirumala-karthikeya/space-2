import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CookieBanner.module.css";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className={styles.cookieBanner}>
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <h3>Cookies &amp; Privacy</h3>
          <p>
            We use cookies and similar technologies to improve your browsing
            experience, provide live chat support, analyze website traffic, and
            enhance our services. By clicking “Accept”, you agree to our use of
            cookies as described in our Cookie Policy.
          </p>
        </div>

        <div className={styles.actions}>
          <Link to="/cookie-policy" className={styles.policyLink}>
            Cookie Policy
          </Link>

          <button
            type="button"
            className={styles.declineBtn}
            onClick={declineCookies}
          >
            Decline
          </button>

          <button
            type="button"
            className={styles.acceptBtn}
            onClick={acceptCookies}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
