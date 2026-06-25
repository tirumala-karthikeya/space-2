import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ContactForm.module.css";

const PURPOSE_OPTIONS = [
  { value: "GENERAL", label: "General Inquiry" },
  { value: "PARTNERSHIP", label: "Partnership" },
];

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    purpose: "GENERAL",
    agreed: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateField = (field) => (event) => {
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    if (field === "mobile") {
      value = value.replace(/\D/g, "").slice(0, 15);
    }

    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (form.mobile.length < 7 || form.mobile.length > 15) {
      alert("Please enter a valid mobile number between 7 and 15 digits.");
      return;
    }

    setLoading(true);
    setError(null);

    const API_URL = "/api/forms/submit";

    const payload = {
      formType: "contact_form",
      data: {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        mobile: form.mobile,
        address: form.address,
        purpose: form.purpose,
        agreed: form.agreed,
      },
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        setTicketId(result.ticket_id || null);
        setSubmitted(true);
      } else {
        setError(result.message || "An error occurred. Please check your inputs.");
      }
    } catch (err) {
      console.error("Connection Error:", err);
      setError("Could not connect to the server. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        {!submitted ? (
          <>
            <h2 className={styles.heading}>Contact Us</h2>

            {error && <div className={styles.errorBox}>{error}</div>}

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="firstName">
                    First Name*
                  </label>
                  <input
                    id="firstName"
                    className={styles.input}
                    type="text"
                    value={form.firstName}
                    onChange={updateField("firstName")}
                    disabled={loading}
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="lastName">
                    Last Name*
                  </label>
                  <input
                    id="lastName"
                    className={styles.input}
                    type="text"
                    value={form.lastName}
                    onChange={updateField("lastName")}
                    disabled={loading}
                    required
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="email">
                    Email*
                  </label>
                  <input
                    id="email"
                    className={styles.input}
                    type="email"
                    value={form.email}
                    onChange={updateField("email")}
                    disabled={loading}
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="mobile">
                    Mobile Number*
                  </label>
                  <input
                    id="mobile"
                    className={styles.input}
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={15}
                    value={form.mobile}
                    onChange={updateField("mobile")}
                    disabled={loading}
                    required
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="address">
                  Address*
                </label>
                <textarea
                  id="address"
                  className={`${styles.input} ${styles.textarea}`}
                  value={form.address}
                  onChange={updateField("address")}
                  disabled={loading}
                  required
                  rows={4}
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="purpose">
                  Purpose*
                </label>
                <select
                  id="purpose"
                  className={`${styles.input} ${styles.select}`}
                  value={form.purpose}
                  onChange={updateField("purpose")}
                  disabled={loading}
                  required
                >
                  {PURPOSE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <label className={styles.checkWrap}>
                <input
                  type="checkbox"
                  checked={form.agreed}
                  onChange={updateField("agreed")}
                  disabled={loading}
                  required
                />

                <span className={styles.checkText}>
                  By submitting this form, I confirm that I have read and understood{" "}
                  <Link to="/privacy-policy" className={styles.checkLink}>
                    Brainwave World's Privacy Statement
                  </Link>
                </span>
              </label>

              <div className={styles.submitWrap}>
                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className={styles.successMsg}>
            <div className={styles.successIcon}>✓</div>
            <h2 className={styles.heading}>Thank you!</h2>
            <p className={styles.successText}>We'll be in touch soon.</p>
            {ticketId && (
              <p className={styles.successText}>
                Your reference number: <strong>{ticketId}</strong>
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
