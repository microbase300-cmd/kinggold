import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FounderVision } from './components/FounderVision';
import { TechBento } from './components/TechBento';
import { SystemsShowcase } from './components/SystemsShowcase';
import { ContactFooter } from './components/ContactFooter';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export function App() {
  return (
    <div className="min-h-screen bg-[#090A0F] text-slate-100 selection:bg-[#F59E0B]/30 selection:text-[#F59E0B]">
      <Navbar />
      <main>
        <Hero />
        <FounderVision />
        <TechBento />
        <SystemsShowcase />
      </main>
      <ContactFooter />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
