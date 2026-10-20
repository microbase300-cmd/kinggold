import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  Send,
  ShieldCheck,
  Cpu,
  Globe,
  CheckCircle2,
  ArrowUpRight,
  Layers,
  Radio,
} from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export const ContactFooter: React.FC = () => {
  const [senderName, setSenderName] = useState('');
  const [senderOrg, setSenderOrg] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [domainFocus, setDomainFocus] = useState('Full-Stack & Mobile Systems Architecture');
  const [brief, setBrief] = useState('');
  const [transmitted, setTransmitted] = useState(false);

  const handleDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    setTransmitted(true);
  };

  return (
    <footer id="initiate-contact" className="bg-[#090A0F] pt-24 pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Executive Dispatch Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-20 border-b border-white/10">
          {/* Left: Direct Channels & Operational Mandate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#F59E0B] uppercase tracking-widest">
              <Radio className="w-4 h-4 text-[#10B981]" />
              <span>04 // TRANSMISSION &amp; ADVISORY DISPATCH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Initiate Executive Contact
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Available for high-impact systems architecture, sovereign bare-metal &amp; MTA cloud
              deployments, enterprise full-stack/mobile engineering, agentic AI infrastructure, and
              quantitative trading R&amp;D under the{' '}
              <span className="text-[#F59E0B] font-semibold">Microbase</span> ecosystem.
            </p>

            {/* Operational Readiness Cards */}
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-[#12141D] border border-white/10 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] text-slate-400 uppercase block">
                    PRINCIPAL ARCHITECT
                  </span>
                  <span className="text-white font-bold text-sm sm:text-base">
                    Obinna Joseph Okwudiri (King Gold)
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#F59E0B]/15 border border-[#F59E0B]/40 font-mono text-xs text-[#F59E0B] font-semibold">
                  Founder @ Microbase
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#12141D] border border-white/10 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] text-slate-400 uppercase block">
                    ENGAGEMENT DOMAINS
                  </span>
                  <span className="text-slate-200 font-mono text-xs">
                    Full-Stack • Mobile • Bare-Metal Cloud • Agentic AI • Quant
                  </span>
                </div>
                <ShieldCheck className="w-5 h-5 text-[#10B981] shrink-0" />
              </div>

              <div className="p-4 rounded-xl bg-[#12141D] border border-white/10 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] text-slate-400 uppercase block">
                    INFRASTRUCTURE POSTURE
                  </span>
                  <span className="text-[#10B981] font-mono text-xs font-semibold">
                    Sovereign Nodes Online // Global &amp; Emerging Markets
                  </span>
                </div>
                <Globe className="w-5 h-5 text-[#F59E0B] shrink-0" />
              </div>
            </div>
          </motion.div>

          {/* Right: Interactive Terminal Transmission Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="rounded-xl bg-[#12141D] border border-white/15 shadow-2xl overflow-hidden">
              <div className="px-5 py-3.5 bg-[#090A0F] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
                  <Terminal className="w-4 h-4 text-[#F59E0B]" />
                  <span>microbase://dispatch/new-transmission</span>
                </div>
                <span className="font-mono text-[10px] text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/30">
                  TLS_1.3_READY
                </span>
              </div>

              {transmitted ? (
                <div className="p-8 sm:p-10 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#10B981]/15 border border-[#10B981]/40 text-[#10B981] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-mono">
                    TRANSMISSION PAYLOAD STAGED
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-[#F59E0B] font-semibold">{senderName || 'Partner'}</span>.
                    Your architectural brief regarding{' '}
                    <span className="text-white font-mono">{domainFocus}</span> has been formatted
                    for executive review at <strong className="text-white">Microbase</strong>.
                  </p>
                  <div className="p-4 rounded-lg bg-[#090A0F] border border-white/10 font-mono text-xs text-left text-slate-300 space-y-1 max-w-lg mx-auto">
                    <div>
                      <span className="text-slate-500">ORIGIN:</span> {senderName} ({senderOrg || 'Independent'}) — {senderEmail}
                    </div>
                    <div>
                      <span className="text-slate-500">DIRECTIVE:</span> {domainFocus}
                    </div>
                    <div className="truncate">
                      <span className="text-slate-500">PAYLOAD:</span> {brief}
                    </div>
                  </div>
                  <div className="pt-3">
                    <button
                      onClick={() => {
                        setTransmitted(false);
                        setBrief('');
                      }}
                      className="px-5 py-2.5 rounded-lg bg-[#090A0F] border border-[#F59E0B]/40 text-[#F59E0B] font-mono text-xs font-semibold hover:bg-[#F59E0B] hover:text-[#090A0F] transition-colors cursor-pointer"
                    >
                      NEW TRANSMISSION
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleDispatch} className="p-6 sm:p-8 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[11px] text-slate-400 uppercase mb-1.5">
                        01 // YOUR NAME OR ALIAS *
                      </label>
                      <input
                        type="text"
                        required
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="e.g. Executive Partner"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0F] border border-white/10 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#F59E0B] font-mono"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[11px] text-slate-400 uppercase mb-1.5">
                        02 // ORGANIZATION / FUND
                      </label>
                      <input
                        type="text"
                        value={senderOrg}
                        onChange={(e) => setSenderOrg(e.target.value)}
                        placeholder="e.g. Enterprise / Venture / Lab"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0F] border border-white/10 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#F59E0B] font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[11px] text-slate-400 uppercase mb-1.5">
                        03 // RETURN ELECTRONIC MAIL *
                      </label>
                      <input
                        type="email"
                        required
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder="partner@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0F] border border-white/10 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#F59E0B] font-mono"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[11px] text-slate-400 uppercase mb-1.5">
                        04 // ARCHITECTURAL DOMAIN
                      </label>
                      <select
                        value={domainFocus}
                        onChange={(e) => setDomainFocus(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0F] border border-white/10 text-sm text-white focus:outline-none focus:border-[#F59E0B] font-mono"
                      >
                        <option value="Full-Stack & Mobile Systems Architecture">
                          Full-Stack &amp; Mobile Systems Architecture
                        </option>
                        <option value="Bare-Metal VPS & Enterprise MTA Infrastructure">
                          Bare-Metal VPS &amp; Enterprise MTA Infrastructure
                        </option>
                        <option value="Agentic AI, LLM Fine-Tuning & Robotics">
                          Agentic AI, LLM Fine-Tuning &amp; Robotics
                        </option>
                        <option value="Quantitative Trading & MQL5/Pine Execution">
                          Quantitative Trading &amp; MQL5/Pine Execution
                        </option>
                        <option value="Microbase Strategic Partnership">
                          Microbase Strategic Partnership
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-slate-400 uppercase mb-1.5">
                      05 // TECHNICAL BRIEF &amp; OBJECTIVES *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={brief}
                      onChange={(e) => setBrief(e.target.value)}
                      placeholder="Specify system requirements, latency targets, infrastructure scope, or partnership parameters..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0F] border border-white/10 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#F59E0B] font-mono"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <span className="font-mono text-[11px] text-slate-400 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-[#10B981]" />
                      Direct routing to Obinna Joseph Okwudiri (King Gold)
                    </span>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-[#090A0F] font-mono text-xs font-bold tracking-wider transition-all shadow-lg shadow-[#F59E0B]/20 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>TRANSMIT BRIEF</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom Executive Telemetry Bar */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span className="text-white font-semibold">
              OBINNA JOSEPH OKWUDIRI (KING GOLD)
            </span>
            <span>—</span>
            <span className="text-[#F59E0B]">FOUNDER @ MICROBASE</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#microbase-vision"
              className="hover:text-[#F59E0B] transition-colors inline-flex items-center gap-1"
            >
              <span>VISION</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="#technical-arsenal"
              className="hover:text-[#F59E0B] transition-colors inline-flex items-center gap-1"
            >
              <span>ARSENAL</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="#systems-architecture"
              className="hover:text-[#F59E0B] transition-colors inline-flex items-center gap-1"
            >
              <Layers className="w-3 h-3" />
              <span>SYSTEMS</span>
            </a>
            <span className="text-slate-500">
              © {CURRENT_YEAR} Microbase Ecosystem. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
