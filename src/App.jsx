import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CounterSection from './components/CounterSection';
import CompanyCarousel from './components/CompanyCarousel';
import GrowBussiness from './components/GrowBussiness';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CounterSection />
      <CompanyCarousel />
      <GrowBussiness />
      <div className="mt-50" />
    </>
  );
}

export default App;
