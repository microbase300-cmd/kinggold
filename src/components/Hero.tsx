import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  Cpu,
  Activity,
  Shield,
  ChevronRight,
  Compass,
  Radio,
  Server,
  TrendingUp,
  Layers,
  Code2,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeLogIndex, setActiveLogIndex] = useState(0);

  const telemetryLogs = [
    {
      ts: '08:00:01.142',
      module: 'QUANT.MT5.EXEC',
      msg: 'London Session Liquidity Sweep detected // FVG + MSS confirmed on XAUUSD',
      status: 'EXEC_FILLED',
    },
    {
      ts: '08:00:02.408',
      module: 'INFRA.MTA.CLUSTER',
      msg: 'Virtual MTA queue optimal // SPF+DKIM+DMARC+PTR verified // <10MB native footprint',
      status: 'DELIVERING',
    },
    {
      ts: '08:00:03.890',
      module: 'AI.AGENT.ORCH',
      msg: 'Distributed 4-bit QLoRA 14B/27B inference pipeline active // SSE stream nominal',
      status: 'STREAMING',
    },
    {
      ts: '08:00:05.019',
      module: 'ROBOTICS.NAV2',
      msg: '64-ch LiDAR + RTK GNSS + Stereo IMU fusion locked // Autonomous pathing active',
      status: 'SYNCHRONIZED',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLogIndex((prev) => (prev + 1) % telemetryLogs.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [telemetryLogs.length]);

  return (
    <section className="relative min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-28 flex items-center bg-telemetry-grid bg-radial-glow overflow-hidden border-b border-white/10">
      {/* Subtle Ambient Accent Lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#10B981]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Executive Identity & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Identity Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#12141D] border border-[#F59E0B]/40 shadow-lg shadow-black/40">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[#F59E0B] uppercase">
                Founder @ Microbase <span className="text-slate-500 mx-1">|</span> Systems Architect
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                Obinna Joseph Okwudiri{' '}
                <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-amber-300 to-[#F59E0B] italic font-bold">
                  (King Gold)
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-mono font-medium text-[#10B981] tracking-tight pt-1">
                Software Engineer, Mobile Developer &amp; Web Developer.
              </p>
            </div>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Architecting resilient full-stack applications, autonomous agentic systems, bare-metal
              server infrastructure, and quantitative trading engines under the{' '}
              <span className="text-white font-semibold underline decoration-[#F59E0B]/60 underline-offset-4">
                Microbase
              </span>{' '}
              ecosystem.
            </p>

            {/* Key Executive Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                { label: 'CORE STACK', value: 'Go / Py / TS / MQL5', icon: Code2 },
                { label: 'INFRASTRUCTURE', value: 'Bare-Metal & GPU', icon: Server },
                { label: 'QUANT SYSTEMS', value: 'SMC / ICT / FVG', icon: TrendingUp },
                { label: 'ARCHITECTURE', value: 'Sovereign & Zero-Trust', icon: Shield },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[#12141D]/90 border border-white/10 hover:border-[#F59E0B]/40 transition-colors"
                >
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 uppercase">
                    <stat.icon className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>{stat.label}</span>
                  </div>
                  <div className="mt-1 font-mono text-xs sm:text-sm font-bold text-white">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <a
                href="#systems-architecture"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-[#090A0F] font-mono text-xs sm:text-sm font-bold tracking-wide transition-all shadow-lg shadow-[#F59E0B]/20 hover:translate-y-[-1px]"
              >
                <Layers className="w-4 h-4" />
                <span>Explore Systems Architecture</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#microbase-vision"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-[#12141D] hover:bg-[#191C28] text-white border border-[#F59E0B]/40 hover:border-[#F59E0B] font-mono text-xs sm:text-sm font-semibold tracking-wide transition-all"
              >
                <Compass className="w-4 h-4 text-[#F59E0B]" />
                <span>Microbase Vision</span>
              </a>

              <a
                href="#initiate-contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-[#12141D]/70 hover:bg-[#12141D] text-slate-200 border border-white/10 hover:border-[#10B981]/50 font-mono text-xs sm:text-sm font-medium tracking-wide transition-all"
              >
                <Radio className="w-4 h-4 text-[#10B981]" />
                <span>Initiate Contact</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Live Telemetry & Architecture Console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="rounded-xl bg-[#12141D] border border-white/15 shadow-2xl shadow-black/80 overflow-hidden">
              {/* Terminal Top Bar */}
              <div className="px-4 py-3 bg-[#090A0F] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
                  <span className="ml-2 font-mono text-[11px] text-slate-400">
                    root@microbase-core:~# telemetry --live
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
                  SYS_NOMINAL
                </span>
              </div>

              {/* Telemetry Body */}
              <div className="p-5 space-y-5 font-mono text-xs">
                {/* Node Cluster Matrix */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-[#090A0F]/90 border border-white/10">
                    <div className="flex items-center justify-between text-slate-400 text-[10px]">
                      <span>COMPUTE TOPOLOGY</span>
                      <Cpu className="w-3.5 h-3.5 text-[#F59E0B]" />
                    </div>
                    <div className="mt-1.5 text-sm font-bold text-white">
                      RTX 4090 / 5090 + VPS
                    </div>
                    <div className="mt-1 flex items-center gap-1.5 text-[10px] text-[#10B981]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                      <span>Multi-Node Bare-Metal</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#090A0F]/90 border border-white/10">
                    <div className="flex items-center justify-between text-slate-400 text-[10px]">
                      <span>ALGORITHMIC ENGINE</span>
                      <Activity className="w-3.5 h-3.5 text-[#10B981]" />
                    </div>
                    <div className="mt-1.5 text-sm font-bold text-white">
                      MQL5 &amp; Pine Script
                    </div>
                    <div className="mt-1 flex items-center gap-1.5 text-[10px] text-[#F59E0B]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                      <span>SMC / ICT / FVG / MSS</span>
                    </div>
                  </div>
                </div>

                {/* Real-time Subsystem Bars */}
                <div className="space-y-2.5 bg-[#090A0F]/60 p-3.5 rounded-lg border border-white/5">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider flex justify-between">
                    <span>Subsystem Load &amp; Deliverability</span>
                    <span className="text-[#10B981]">99.98% SLA</span>
                  </div>

                  {[
                    { name: 'Full-Stack & Mobile (Go / Py / Expo)', pct: '98%', color: 'bg-[#F59E0B]' },
                    { name: 'MTA & Linux Kernel Tuning (SPF/DKIM/DMARC)', pct: '100%', color: 'bg-[#10B981]' },
                    { name: 'Agentic LLM & QLoRA Inference Clusters', pct: '95%', color: 'bg-[#F59E0B]' },
                    { name: 'Quant Tick Execution & Liquidity Detection', pct: '99%', color: 'bg-[#10B981]' },
                  ].map((bar, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-300">{bar.name}</span>
                        <span className="text-slate-400">{bar.pct}</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div className={`h-full ${bar.color} rounded-full`} style={{ width: bar.pct }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Live Event Stream Box */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-3 h-3 text-[#F59E0B]" />
                      LIVE EXECUTION BUS
                    </span>
                    <span className="text-[#F59E0B]">STREAM_ACTIVE</span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#090A0F] border border-white/10 space-y-2 min-h-[118px]">
                    {telemetryLogs.map((log, index) => {
                      const isCurrent = index === activeLogIndex;
                      return (
                        <div
                          key={index}
                          className={`text-[11px] leading-snug transition-opacity duration-300 ${
                            isCurrent ? 'opacity-100 text-white' : 'opacity-45 text-slate-500'
                          }`}
                        >
                          <span className="text-slate-500">[{log.ts}]</span>{' '}
                          <span className="text-[#F59E0B] font-semibold">{log.module}:</span>{' '}
                          <span>{log.msg}</span>{' '}
                          <span className="text-[#10B981] font-semibold">[{log.status}]</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
