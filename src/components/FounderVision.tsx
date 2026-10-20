import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Target, Cpu, Lock, Globe2, Award } from 'lucide-react';

export const FounderVision: React.FC = () => {
  const executivePillars = [
    {
      icon: Lock,
      code: 'PILLAR_01 // SOVEREIGNTY',
      title: 'Zero Third-Party Fragility',
      description:
        'Replacing brittle SaaS dependencies with self-hosted bare-metal infrastructure, independent MTA clusters, and custom Linux kernel optimizations.',
    },
    {
      icon: Cpu,
      code: 'PILLAR_02 // AUTONOMY',
      title: 'Agentic & Hardware Convergence',
      description:
        'Unifying multi-agent AI reasoning, distributed GPU fine-tuning, and ROS 2 spatial robotics into cohesive, self-governing operational loops.',
    },
    {
      icon: Globe2,
      code: 'PILLAR_03 // MARKET PRECISION',
      title: 'Institutional-Grade Execution',
      description:
        'Engineering deterministic low-latency systems for algorithmic financial markets (SMC/ICT), core banking ledgers, and high-concurrency mobile platforms.',
    },
  ];

  return (
    <section
      id="microbase-vision"
      className="py-24 lg:py-32 relative bg-[#090A0F] border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10"
        >
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#F59E0B] uppercase tracking-widest mb-3">
              <Shield className="w-4 h-4" />
              <span>01 // EXECUTIVE DOSSIER &amp; ECOSYSTEM DOCTRINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Founder&apos;s Profile, Core Vision &amp; Mission{' '}
              <span className="text-[#F59E0B]">(Microbase)</span>
            </h2>
          </div>

          <div className="font-mono text-xs text-slate-400 bg-[#12141D] px-4 py-2.5 rounded-lg border border-white/10">
            ENTITY: <span className="text-white font-semibold">MICROBASE ECOSYSTEM</span> // STATUS:{' '}
            <span className="text-[#10B981]">SOVEREIGN</span>
          </div>
        </motion.div>

        {/* Main Executive Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: About the Founder Dossier */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 rounded-xl bg-[#12141D] border border-white/10 p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#F59E0B]/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[11px] font-mono text-[#F59E0B] uppercase tracking-wider block">
                    ARCHITECT &amp; PRINCIPAL FOUNDER
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                    Obinna Joseph Okwudiri
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#F59E0B]/15 border border-[#F59E0B]/40 font-mono text-xs font-bold text-[#F59E0B]">
                  King Gold
                </span>
              </div>

              <div className="space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#10B981]" />
                  <span>About the Founder</span>
                </div>
                <p className="text-slate-200 text-base leading-relaxed">
                  <strong className="text-white font-semibold">Obinna Joseph Okwudiri</strong> is a
                  full-stack engineer, mobile &amp; web developer, and quantitative systems
                  architect who founded{' '}
                  <strong className="text-[#F59E0B] font-semibold">Microbase</strong> to bridge the
                  gap between high-performance software engineering, autonomous hardware/AI systems,
                  and institutional-grade infrastructure.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Operating under the professional alias <strong className="text-slate-200">King Gold</strong>, his
                  engineering methodology combines deep bare-metal Linux administration, multi-GPU
                  AI model orchestration, cross-platform mobile/web software architecture, and
                  algorithmic liquidity execution engines into unified, fault-tolerant production
                  systems.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10 grid grid-cols-2 gap-4 font-mono text-xs">
              <div>
                <span className="text-slate-500 block text-[10px]">DESIGNATION</span>
                <span className="text-white font-semibold">Founder &amp; Lead Architect</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">OPERATIONAL SCOPE</span>
                <span className="text-[#10B981] font-semibold">Emerging &amp; Global Markets</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Core Vision & Core Mission Statements */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Core Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1 rounded-xl bg-[#12141D] border border-[#F59E0B]/30 p-7 sm:p-8 relative overflow-hidden group hover:border-[#F59E0B]/60 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F59E0B]/15 text-[#F59E0B] font-mono text-xs font-semibold">
                  <Eye className="w-4 h-4" />
                  <span>CORE VISION STATEMENT</span>
                </div>
                <span className="font-mono text-xs text-slate-500">MICROBASE // DIRECTIVE 01</span>
              </div>

              <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium text-white leading-relaxed italic border-l-2 border-[#F59E0B] pl-5 py-1">
                &ldquo;To engineer self-sustaining, decentralized, and intelligent technological
                ecosystems that power the next generation of autonomous commerce, financial markets,
                and digital infrastructure across emerging and global markets.&rdquo;
              </blockquote>
            </motion.div>

            {/* Core Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 rounded-xl bg-[#12141D] border border-[#10B981]/30 p-7 sm:p-8 relative overflow-hidden group hover:border-[#10B981]/60 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#10B981]/15 text-[#10B981] font-mono text-xs font-semibold">
                  <Target className="w-4 h-4" />
                  <span>CORE MISSION STATEMENT</span>
                </div>
                <span className="font-mono text-xs text-slate-500">MICROBASE // DIRECTIVE 02</span>
              </div>

              <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium text-white leading-relaxed italic border-l-2 border-[#10B981] pl-5 py-1">
                &ldquo;At Microbase, our mission is to relentlessly build resilient, low-latency
                software, bare-metal cloud infrastructure, and autonomous agentic systems—replacing
                fragile, third-party dependencies with sovereign, precision-engineered code.&rdquo;
              </blockquote>
            </motion.div>
          </div>
        </div>

        {/* Bottom Architectural Philosophy Strip */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {executivePillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="p-6 rounded-xl bg-[#12141D]/70 border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] text-[#F59E0B]">{pillar.code}</span>
                <pillar.icon className="w-4 h-4 text-[#10B981]" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">{pillar.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
