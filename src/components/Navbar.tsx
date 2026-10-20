import React, { useState, useEffect } from 'react';
import { Terminal, ShieldCheck, Cpu, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [time, setTime] = useState<string>('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(
        now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC'
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '01 // VISION & MISSION', href: '#microbase-vision' },
    { label: '02 // TECHNICAL ARSENAL', href: '#technical-arsenal' },
    { label: '03 // SYSTEMS ARCHITECTURE', href: '#systems-architecture' },
    { label: '04 // INITIATE CONTACT', href: '#initiate-contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090A0F]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/60'
          : 'bg-transparent border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-[#12141D] border border-[#F59E0B]/40 flex items-center justify-center shadow-inner group-hover:border-[#F59E0B] transition-colors">
            <Terminal className="w-5 h-5 text-[#F59E0B]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold tracking-tight text-white text-sm sm:text-base">
                MICROBASE
              </span>
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30 font-semibold">
                KING GOLD
              </span>
            </div>
            <p className="text-[11px] font-mono text-slate-400 tracking-wider">
              SYS.ARCH // O. J. OKWUDIRI
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-mono text-slate-300 hover:text-[#F59E0B] transition-colors tracking-wider"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Live Telemetry Status Bar */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#12141D] border border-white/10 text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
            </span>
            <span className="text-[#10B981] font-medium">NODES ONLINE</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 hidden xl:inline">{time}</span>
          </div>

          <a
            href="#initiate-contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-[#090A0F] font-mono text-xs font-bold tracking-wide transition-all shadow-lg shadow-[#F59E0B]/10"
          >
            <span>DISPATCH</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-[#12141D] border border-white/10 text-slate-300 hover:text-[#F59E0B]"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#12141D] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-white/5 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2 text-[#10B981]">
              <ShieldCheck className="w-4 h-4" /> ALL CLUSTERS NOMINAL
            </span>
            <span>{time}</span>
          </div>
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-xs font-mono text-slate-200 hover:text-[#F59E0B]"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#initiate-contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#F59E0B] text-[#090A0F] font-mono text-xs font-bold"
            >
              <Cpu className="w-4 h-4" /> INITIATE EXECUTIVE CONTACT
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
