import AirpeHero from "../components/AirpeHero";
import Benefits from "../components/Benefits";
import RentCalculator from "../components/RentCalculator";
import HowItWorks from "../components/HowItWorks";
import TrustSecurity from "../components/TrustSecurity";
import FinalCta from "../components/FinalCta";
import ContactForm from "../components/ContactForm";

export default function HomePage() {
  return (
    <>
      <AirpeHero />
      <Benefits />
      <RentCalculator />
      <HowItWorks />
      <TrustSecurity />
      <FinalCta />
      <ContactForm />
    </>
  );
}
