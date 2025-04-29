import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CounterSection from './components/CounterSection';
import CompanyCarousel from './components/CompanyCarousel';
import GrowBussiness from './components/GrowBussiness';
import Pinnacle from './components/Pinnacle';
import GenesisSection from './components/GenesisSection';

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
      <div className="mt-50" />
    </>
  );
}

export default App;
