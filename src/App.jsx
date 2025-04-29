import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CounterSection from './components/CounterSection';
import CompanyCarousel from './components/CompanyCarousel';
import GrowBussiness from './components/GrowBussiness';
import Pinnacle from './components/Pinnacle';
import GenesisSection from './components/GenesisSection';
import PreviewSection from './components/PreviewSection';
import DiscerningSection from './components/DiscerningSection';
import Testimonial from './components/Testimonial';
import SwimmingPool from './components/SwimmingPool';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CounterSection />
      <CompanyCarousel />
      <GrowBussiness />
      <Pinnacle />
      <GenesisSection />
      <PreviewSection />
      <DiscerningSection />
      <Testimonial />
      <SwimmingPool />
      <Footer />
      <div className="mt-50" />
    </>
  );
}

export default App;
