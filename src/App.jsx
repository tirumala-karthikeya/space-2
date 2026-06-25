import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./components/theme.css";
import AirpeNavbar from "./components/AirpeNavbar";
import AirpeFooter from "./components/AirpeFooter";
import CookieBanner from "./components/CookieBanner";
import HomePage from "./pages/HomePage";
import OptimizeRentPage from "./pages/OptimizeRentPage";
import CommercialRentPage from "./pages/CommercialRentPage";
import SmartBillsPage from "./pages/SmartBillsPage";
import InsideAirpePage from "./pages/InsideAirpePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import RaiseComplaintPage from "./pages/RaiseComplaintPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="airpeRoot">
      <ScrollToTop />
      <AirpeNavbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/optimize-rent" element={<OptimizeRentPage />} />
          <Route path="/commercial-rent" element={<CommercialRentPage />} />
          <Route path="/smart-bills" element={<SmartBillsPage />} />
          <Route path="/inside-airpe" element={<InsideAirpePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/raise-complaint" element={<RaiseComplaintPage />} />
        </Routes>
      </main>
      <AirpeFooter />
      <CookieBanner />
    </div>
  );
}
