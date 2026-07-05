import "@/App.css";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import TrustBadges from "@/components/sections/TrustBadges";
import AboutClinic from "@/components/sections/AboutClinic";
import ServicesSection from "@/components/sections/ServicesSection";
import DoctorProfile from "@/components/sections/DoctorProfile";
import AppointmentForm from "@/components/sections/AppointmentForm";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import HealthTips from "@/components/sections/HealthTips";
import Gallery from "@/components/sections/Gallery";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import FloatingButtons from "@/components/FloatingButtons";

function App() {
  return (
    <LanguageProvider>
    <div className="App font-body bg-white text-clinic-text antialiased">
      <Header />
      <main>
        <HeroSection />
        <TrustBadges />
        <AboutClinic />
        <ServicesSection />
        <DoctorProfile />
        <AppointmentForm />
        <WhyChooseUs />
        <Testimonials />
        <HealthTips />
        <Gallery />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
    </LanguageProvider>
  );
}

export default App;
