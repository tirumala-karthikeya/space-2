import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ComplaintForm.module.css";

const PURPOSE_OPTIONS = [
  { value: "PAYMENT", label: "Payment issue" },
  { value: "ACCOUNT", label: "Account concern" },
  { value: "TECHNICAL", label: "Technical problem" },
  { value: "SERVICE", label: "Service experience" },
  { value: "OTHER", label: "Other request" },
];

export default function ComplaintForm() {
  const [form, setForm] = useState({
    userName: "",
    phone: "",
    email: "",
    complaintPurpose: "PAYMENT",
    complaintDetails: "",
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

    if (field === "phone") {
      value = value.replace(/\D/g, "").slice(0, 15);
    }

    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (form.phone.length < 7 || form.phone.length > 15) {
      alert("Please enter a valid phone number between 7 and 15 digits.");
      return;
    }

    setLoading(true);
    setError(null);

    const API_URL = "/api/forms/submit";

    const payload = {
      formType: "complaint_form",
      data: {
        userName: form.userName,
        phone: form.phone,
        email: form.email,
        complaintPurpose: form.complaintPurpose,
        complaintDetails: form.complaintDetails,
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
        setError(result.message || "An error occurred. Please check your inputs and try again.");
      }
    } catch (err) {
      console.error("Connection Error:", err);
      setError("Could not connect to the server. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {!submitted ? (
          <>
            <div className={styles.headerBlock}>
              <span className={styles.eyebrow}>Request Desk</span>
              <h1 className={styles.heading}>Raise a Request</h1>
              <p className={styles.subheading}>
                Have a question about your bills, rewards, or airpe account? Tell
                us what's happening — our team reviews every request and follows
                up with clear next steps.
              </p>
            </div>

            {error && <div className={styles.errorBox}>{error}</div>}

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="complaintUserName">
                    Full Name*
                  </label>
                  <input
                    id="complaintUserName"
                    className={styles.input}
                    type="text"
                    placeholder="Enter your full name"
                    value={form.userName}
                    onChange={updateField("userName")}
                    disabled={loading}
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="complaintPhone">
                    Phone Number*
                  </label>
                  <input
                    id="complaintPhone"
                    className={styles.input}
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={15}
                    placeholder="Enter your phone number"
                    value={form.phone}
                    onChange={updateField("phone")}
                    disabled={loading}
                    required
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="complaintEmail">
                    Email*
                  </label>
                  <input
                    id="complaintEmail"
                    className={styles.input}
                    type="email"
                    placeholder="Enter your email address"
                    value={form.email}
                    onChange={updateField("email")}
                    disabled={loading}
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="complaintPurpose">
                    Purpose of Request*
                  </label>
                  <select
                    id="complaintPurpose"
                    className={`${styles.input} ${styles.select}`}
                    value={form.complaintPurpose}
                    onChange={updateField("complaintPurpose")}
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
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="complaintDetails">
                  Request Details*
                </label>
                <textarea
                  id="complaintDetails"
                  className={`${styles.input} ${styles.textarea}`}
                  value={form.complaintDetails}
                  onChange={updateField("complaintDetails")}
                  disabled={loading}
                  required
                  rows={5}
                />
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
                  {loading ? "Submitting..." : "Submit Request"}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className={styles.successMsg}>
            <div className={styles.successIcon}>✓</div>
            <h1 className={styles.heading}>Request Received</h1>
            <p className={styles.successText}>
              Thank you. Our team will review your request and contact you soon.
            </p>
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
