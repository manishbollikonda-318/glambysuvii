import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import InstagramPortfolio from './components/InstagramPortfolio';
import AppointmentBooking from './components/AppointmentBooking';
import LocationMap from './components/LocationMap';
import InquirySection from './components/InquirySection';
import WhatsAppFAB from './components/WhatsAppFAB';

function App() {
  return (
    <div className="min-h-screen bg-background-pink font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <InstagramPortfolio />
        <AppointmentBooking />
        <LocationMap />
        <InquirySection />
      </main>
      <WhatsAppFAB />
    </div>
  );
}

export default App;
