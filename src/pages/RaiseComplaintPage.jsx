import { Link } from "react-router-dom";
import ComplaintForm from "../components/ComplaintForm";
import styles from "./RaiseComplaint.module.css";

export default function RaiseComplaintPage() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.contentContainer}>
        <Link to="/" className={styles.backBtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.backIcon}
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          <span>Back to Home</span>
        </Link>

        <ComplaintForm />
      </div>
    </div>
  );
}
