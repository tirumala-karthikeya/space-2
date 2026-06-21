import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./components/theme.css";
import ShrivNavbar from "./components/ShrivNavbar";
import ShrivFooter from "./components/ShrivFooter";
import HomePage from "./pages/HomePage";
import OptimizeRentPage from "./pages/OptimizeRentPage";
import CommercialRentPage from "./pages/CommercialRentPage";
import SmartBillsPage from "./pages/SmartBillsPage";
import InsideAirpePage from "./pages/InsideAirpePage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="shrivRoot">
      <ScrollToTop />
      <ShrivNavbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/optimize-rent" element={<OptimizeRentPage />} />
          <Route path="/commercial-rent" element={<CommercialRentPage />} />
          <Route path="/smart-bills" element={<SmartBillsPage />} />
          <Route path="/inside-airpe" element={<InsideAirpePage />} />
        </Routes>
      </main>
      <ShrivFooter />
    </div>
  );
}
