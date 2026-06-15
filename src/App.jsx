import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./components/theme.css";
import ShrivNavbar from "./components/ShrivNavbar";
import ShrivFooter from "./components/ShrivFooter";
import HomePage from "./pages/HomePage";
import OptimizeRentPage from "./pages/OptimizeRentPage";

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
        </Routes>
      </main>
      <ShrivFooter />
    </div>
  );
}
