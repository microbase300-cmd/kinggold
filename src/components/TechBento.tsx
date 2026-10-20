import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Server,
  Bot,
  CandlestickChart,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Zap,
  Smartphone,
  Database,
  Network,
} from 'lucide-react';

interface ArsenalPillar {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  accent: 'gold' | 'emerald';
  spanClass: string;
  summary: string;
  capabilities: string[];
  tags: string[];
  telemetryMetric: {
    label: string;
    value: string;
    status: string;
  };
}

export const TechBento: React.FC = () => {
  const pillars: ArsenalPillar[] = [
    {
      id: 'fullstack-mobile',
      code: 'DOMAIN_01 // CORE SOFTWARE ENGINEERING',
      title: 'Full-Stack & Mobile Engineering',
      subtitle: 'High-Concurrency Backends & Universal Cross-Platform Clients',
      icon: Code2,
      accent: 'gold',
      spanClass: 'lg:col-span-6',
      summary:
        'End-to-end engineering of distributed microservices, real-time streaming APIs, and production mobile/web applications optimized for sub-second responsiveness.',
      capabilities: [
        'Go (Golang) & Python (FastAPI / AsyncIO) high-concurrency backend services & scalable microservices',
        'React, Next.js, TypeScript, and Turborepo monorepo design systems with shared token architecture',
        'React Native & Expo universal mobile applications with custom native Android AXML/manifest tooling & Tri-Scheme APK signing',
        'Modern REST, GraphQL, and Server-Sent Events (SSE) real-time bidirectional data pipelines',
      ],
      tags: [
        'Go (Golang)',
        'Python',
        'React',
        'React Native / Expo',
        'TypeScript',
        'REST / GraphQL APIs',
        'Microservices',
        'FastAPI / SSE',
      ],
      telemetryMetric: {
        label: 'CLIENT / API THROUGHPUT',
        value: 'Universal iOS, Android & Web',
        status: 'PRODUCTION_VERIFIED',
      },
    },
    {
      id: 'infra-devops-baremetal',
      code: 'DOMAIN_02 // SOVEREIGN CLOUD & NETWORKING',
      title: 'Infrastructure, DevOps & Bare-Metal',
      subtitle: 'High-Availability Linux VPS, Custom MTA Clusters & GPU Compute',
      icon: Server,
      accent: 'emerald',
      spanClass: 'lg:col-span-6',
      summary:
        'Sovereign bare-metal server provisioning, kernel-level TCP/IP tuning, independent enterprise mail infrastructure, and high-density GPU compute orchestration.',
      capabilities: [
        'Linux VPS administration (Ubuntu LTS), sysctl kernel network tuning (tcp_tw_reuse, high file-descriptor limits, swap optimization) & Docker containerization',
        'Cloudflare DNS/SSL automation, reverse proxy routing, and local Unbound DNS caching for sub-millisecond MX/A record resolution',
        'Self-hosted Mail Transfer Agents (PowerMTA, KumoMTA, Postal, Postfix, Mailu) with strict SPF, DKIM, DMARC, and rDNS (PTR) deliverability engineering',
        'High-density GPU compute clusters (NVIDIA RTX 4090 / 5090 architectures & multi-GPU nodes) for heavy compute workloads',
      ],
      tags: [
        'Linux VPS',
        'Docker',
        'Cloudflare DNS/SSL',
        'Postfix',
        'KumoMTA',
        'Postal',
        'Mailu',
        'PowerMTA',
        'SPF/DKIM/DMARC',
        'RTX 4090/5090 Clusters',
      ],
      telemetryMetric: {
        label: 'MTA & VPS DELIVERABILITY',
        value: 'Port 25 / 587 / 2525 TLS Verified',
        status: '100% AUTH_ALIGNED',
      },
    },
    {
      id: 'ai-agentic-workflows',
      code: 'DOMAIN_03 // AUTONOMOUS INTELLIGENCE',
      title: 'AI & Agentic Workflows',
      subtitle: 'Multi-Agent Orchestration, Local LLM Serving & Generative Pipelines',
      icon: Bot,
      accent: 'emerald',
      spanClass: 'lg:col-span-6',
      summary:
        'Designing autonomous multi-agent reasoning systems, distributed QLoRA fine-tuning pipelines, and local/cloud high-speed LLM inference engines.',
      capabilities: [
        'Multi-agent orchestration frameworks (LangChain, CrewAI) with deterministic tool-calling and autonomous task decomposition',
        'Local LLM execution via Ollama & high-speed LPU/GPU inference routing for 14B–27B+ parameter reasoning models',
        'Distributed 4-bit QLoRA fine-tuning pipelines with sequence-packing isolation and automated Hugging Face adapter pipelines',
        'Automated generative media, real-time audio/video synthesis, and autonomous cybersecurity reconnaissance workflows',
      ],
      tags: [
        'LangChain',
        'CrewAI',
        'Ollama',
        '4-Bit QLoRA Fine-Tuning',
        'Local LLM Execution',
        'Generative Media Pipelines',
        'Agentic Tool-Calling',
      ],
      telemetryMetric: {
        label: 'INFERENCE LATENCY',
        value: 'Sub-Second Token Streaming',
        status: 'AGENTS_AUTONOMOUS',
      },
    },
    {
      id: 'quant-trading-fintech',
      code: 'DOMAIN_04 // ALGORITHMIC MARKETS',
      title: 'Quantitative Trading & Financial Engineering',
      subtitle: 'MQL5 & Pine Script Execution Engines // SMC & ICT Market Microstructure',
      icon: CandlestickChart,
      accent: 'gold',
      spanClass: 'lg:col-span-6',
      summary:
        'Precision algorithmic execution engines codifying institutional order-flow concepts into automated, emotionless trading systems across global financial markets.',
      capabilities: [
        'MetaTrader 5 (MQL5) Expert Advisors and TradingView (Pine Script) algorithmic indicators & automated execution engines',
        'Smart Money Concepts (SMC) & Inner Circle Trader (ICT) algorithmic frameworks with multi-timeframe order-block mapping',
        'Automated session liquidity sweep detection (London/New York killzones), Fair Value Gaps (FVG), and Market Structure Shifts (MSS)',
        'Dynamic position sizing, drawdown protection, and tick-level execution across precious metals (XAUUSD) and synthetic volatility indices',
      ],
      tags: [
        'MetaTrader 5 (MQL5)',
        'TradingView (Pine Script)',
        'Smart Money Concepts (SMC)',
        'ICT Frameworks',
        'Liquidity Sweep Detection',
        'Fair Value Gaps (FVG)',
        'Market Structure Shifts (MSS)',
        'Precious Metals & Synthetics',
      ],
      telemetryMetric: {
        label: 'EXECUTION DISCIPLINE',
        value: 'Deterministic Risk & Order Flow',
        status: 'ALGO_ACTIVE',
      },
    },
  ];

  return (
    <section
      id="technical-arsenal"
      className="py-24 lg:py-32 relative bg-[#090A0F] border-b border-white/10 bg-telemetry-grid"
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
              <Cpu className="w-4 h-4" />
              <span>02 // FOUR-PILLAR CAPABILITY MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical Arsenal <span className="text-[#F59E0B]">(Bento Grid)</span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-mono">
            Full-spectrum command across software architecture, sovereign bare-metal cloud,
            autonomous AI agents, and quantitative market execution.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {pillars.map((pillar, idx) => {
            const isGold = pillar.accent === 'gold';
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`${pillar.spanClass} rounded-xl bg-[#12141D] border ${
                  isGold
                    ? 'border-[#F59E0B]/25 hover:border-[#F59E0B]/60'
                    : 'border-[#10B981]/25 hover:border-[#10B981]/60'
                } p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/50 group`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <span className="font-mono text-[11px] tracking-wider text-slate-400">
                      {pillar.code}
                    </span>
                    <div
                      className={`p-2.5 rounded-lg border ${
                        isGold
                          ? 'bg-[#F59E0B]/10 border-[#F59E0B]/30 text-[#F59E0B]'
                          : 'bg-[#10B981]/10 border-[#10B981]/30 text-[#10B981]'
                      }`}
                    >
                      <pillar.icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Summary */}
                  <div className="mt-5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#F59E0B] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-mono text-[#10B981] mt-1">{pillar.subtitle}</p>
                    <p className="text-sm text-slate-300 mt-3 leading-relaxed">{pillar.summary}</p>
                  </div>

                  {/* Detailed Capabilities List */}
                  <ul className="mt-5 space-y-2.5">
                    {pillar.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isGold ? 'text-[#F59E0B]' : 'text-[#10B981]'
                          }`}
                        />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags & Telemetry Footer */}
                <div className="mt-7 pt-5 border-t border-white/10 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-[#090A0F] border border-white/10 font-mono text-[11px] text-slate-200 hover:border-[#F59E0B]/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between px-3.5 py-2 rounded-lg bg-[#090A0F] border border-white/5 font-mono text-[11px]">
                    <div className="flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span className="text-slate-400">{pillar.telemetryMetric.label}:</span>
                      <span className="text-white font-semibold">
                        {pillar.telemetryMetric.value}
                      </span>
                    </div>
                    <span className="text-[#10B981] hidden sm:inline">
                      [{pillar.telemetryMetric.status}]
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Supplementary Hardware & Protocol Telemetry Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 rounded-xl bg-[#12141D] border border-white/10 p-5 grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs"
        >
          <div className="flex items-center gap-3">
            <Smartphone className="w-5 h-5 text-[#F59E0B] shrink-0" />
            <div>
              <div className="text-slate-400 text-[10px]">MOBILE PACKAGING</div>
              <div className="text-white font-semibold">Expo / AXML / Tri-Scheme APK</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Network className="w-5 h-5 text-[#10B981] shrink-0" />
            <div>
              <div className="text-slate-400 text-[10px]">MAIL DELIVERABILITY</div>
              <div className="text-white font-semibold">SPF + DKIM + DMARC + PTR</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Database className="w-5 h-5 text-[#F59E0B] shrink-0" />
            <div>
              <div className="text-slate-400 text-[10px]">COMPUTE HARDWARE</div>
              <div className="text-white font-semibold">RTX 4090 / 5090 &amp; Jetson Orin</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#10B981] shrink-0" />
            <div>
              <div className="text-slate-400 text-[10px]">MARKET EXECUTION</div>
              <div className="text-white font-semibold">XAUUSD &amp; Synthetic Indices</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
