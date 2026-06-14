import "./components/theme.css";
import ShrivNavbar from "./components/ShrivNavbar";
import ShrivHero from "./components/ShrivHero";
import Benefits from "./components/Benefits";
import RentCalculator from "./components/RentCalculator";
import HowItWorks from "./components/HowItWorks";
import TrustSecurity from "./components/TrustSecurity";
import FinalCta from "./components/FinalCta";
import ShrivFooter from "./components/ShrivFooter";

export default function App() {
  return (
    <div className="shrivRoot">
      <ShrivNavbar />
      <main>
        <ShrivHero />
        <Benefits />
        <RentCalculator />
        <HowItWorks />
        <TrustSecurity />
        <FinalCta />
      </main>
      <ShrivFooter />
    </div>
  );
}
