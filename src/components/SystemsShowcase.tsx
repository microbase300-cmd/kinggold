import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu,
  CandlestickChart,
  Smartphone,
  Server,
  Landmark,
  Bot,
  ShieldAlert,
  Layers,
  ChevronDown,
  ChevronUp,
  Terminal,
  CheckCircle,
  Lock,
} from 'lucide-react';

interface SystemInitiative {
  id: string;
  code: string;
  title: string;
  domain: string;
  category: 'AI & ROBOTICS' | 'QUANT & FINTECH' | 'MOBILE & MEDIA' | 'INFRA & SECURITY';
  icon: React.ElementType;
  isMemorySynthesized?: boolean;
  architectureSummary: string;
  technicalUtility: string;
  blueprintSpecs: string[];
  stackTags: string[];
  metrics: { label: string; value: string }[];
}

export const SystemsShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [expandedId, setExpandedId] = useState<string | null>('sys-01');

  const initiatives: SystemInitiative[] = [
    {
      id: 'sys-01',
      code: 'SYS_ARCH // 01',
      title: 'Autonomous Robotics & Local Delivery Simulation Framework',
      domain: 'Robotics & Spatial Simulation',
      category: 'AI & ROBOTICS',
      icon: Cpu,
      architectureSummary:
        'Autonomous routing algorithms, local last-mile delivery simulation, and real-time telemetry processing engineered on a containerized ROS 2 Humble & Gazebo Fortress virtual twin architecture.',
      technicalUtility:
        'Enables deterministic validation of autonomous ground navigation in dense, unstructured urban environments prior to edge deployment on embedded NVIDIA Jetson AGX Orin compute modules.',
      blueprintSpecs: [
        'Multi-sensor fusion pipeline integrating 64-channel 3D LiDAR point clouds, stereo depth + visual odometry, industrial IMU, and dual-antenna RTK GNSS.',
        'Nav2 autonomous path-planning stack with dynamic obstacle avoidance and terrain traversability costmaps.',
        'Containerized WSLg/Docker simulation bridge separating build volumes from cloud-synced source trees to prevent I/O lock contention.',
      ],
      stackTags: [
        'ROS 2 Humble',
        'Gazebo Fortress',
        'Nav2',
        '64-Ch LiDAR Fusion',
        'RTK GNSS',
        'Jetson Orin Edge',
        'Docker',
      ],
      metrics: [
        { label: 'SENSOR FUSION', value: 'LiDAR + Stereo + RTK' },
        { label: 'TARGET RUNTIME', value: 'Ubuntu 22.04 / JetPack 6' },
      ],
    },
    {
      id: 'sys-02',
      code: 'SYS_ARCH // 02',
      title: 'Algorithmic Precious Metals & Synthetic Index Execution Engine',
      domain: 'Quantitative Finance & Automated Trading',
      category: 'QUANT & FINTECH',
      icon: CandlestickChart,
      architectureSummary:
        'Automated MT5 execution bot targeting London session liquidity sweeps, Fair Value Gaps, and dynamic risk management on high-volatility pairs.',
      technicalUtility:
        'Eliminates discretionary execution latency by algorithmically scanning multi-timeframe market structure, validating institutional order-flow displacement, and managing multi-stage stop-loss/take-profit life cycles.',
      blueprintSpecs: [
        'Automated detection of Asian range highs/lows and London/New York session liquidity raids (Smart Money Concepts & ICT framework).',
        'Real-time Fair Value Gap (FVG) & Market Structure Shift (MSS) confirmation engine coded in native MQL5 and TradingView Pine Script.',
        'Dynamic equity drawdown circuit-breakers, ATR-calibrated lot sizing, and automated partial position scaling on XAUUSD and synthetic volatility indices.',
      ],
      stackTags: [
        'MetaTrader 5 (MQL5)',
        'Pine Script',
        'SMC / ICT',
        'Liquidity Sweep',
        'FVG / MSS',
        'XAUUSD & Synthetics',
      ],
      metrics: [
        { label: 'EXECUTION WINDOW', value: 'London / NY Killzones' },
        { label: 'RISK ENGINE', value: 'Deterministic Drawdown Guard' },
      ],
    },
    {
      id: 'sys-03',
      code: 'SYS_ARCH // 03',
      title: 'Cross-Platform Digital News & Media Aggregation Platform',
      domain: 'Mobile & Web Media Distribution',
      category: 'MOBILE & MEDIA',
      icon: Smartphone,
      architectureSummary:
        'High-concurrency Python backend services paired with a performant React Native (Expo) mobile frontend for real-time content delivery.',
      technicalUtility:
        'Delivers low-latency, offline-resilient media streams, full-text priority alerts, and synchronized multi-platform notifications across modern and legacy Android/iOS devices.',
      blueprintSpecs: [
        'Asynchronous Python ingestion and syndication API serving structured media payloads with low-latency caching.',
        'Universal React Native (Expo) client engineered with adaptive safe-area viewports, selectable cryptographic/reference fields, and zero-truncation notification drawers.',
        'Custom Android binary AXML manifest patching (compileSdkVersionCodename normalization), 4-byte zipalign optimization, and Tri-Scheme (v1/v2/v3) cryptographic APK signing.',
      ],
      stackTags: [
        'Python Async Backend',
        'React Native',
        'Expo Universal',
        'Tri-Scheme APK Signing',
        'Push Telemetry',
        'REST APIs',
      ],
      metrics: [
        { label: 'COMPATIBILITY', value: 'Android API 24–36 & Web' },
        { label: 'BINARY INTEGRITY', value: 'v1 + v2 + v3 Signed' },
      ],
    },
    {
      id: 'sys-04',
      code: 'SYS_ARCH // 04',
      title: 'Self-Hosted Enterprise Mail & High-Availability VPS Infrastructure',
      domain: 'Cloud Infrastructure & Network Security',
      category: 'INFRA & SECURITY',
      icon: Server,
      architectureSummary:
        'Custom Linux server orchestration, automated DNS/SSL provisioning via Cloudflare, and independent high-deliverability MTA clusters.',
      technicalUtility:
        'Provides complete cryptographic email sovereignty and high-throughput transactional/enterprise dispatch without reliance on third-party cloud email relays.',
      blueprintSpecs: [
        'Native C++ & containerized MTA orchestration (PowerMTA, KumoMTA, Postal, Postfix, Mailu) tuned to operate under <10MB idle RAM footprint on lean 1GB–4GB Linux VPS nodes.',
        'Linux kernel sysctl tuning (tcp_tw_reuse, somaxconn=4096, 65k file descriptors) paired with local Unbound DNS caching (127.0.0.1:53) for sub-millisecond MX resolution.',
        'End-to-end Port 25/587/2525 STARTTLS encryption, 2048-bit RSA DKIM signing, strict SPF, DMARC enforcement, and bidirectional Forward-Confirmed Reverse DNS (PTR) alignment.',
      ],
      stackTags: [
        'Ubuntu 24.04 LTS',
        'PowerMTA / KumoMTA',
        'Postal / Postfix',
        'Unbound DNS',
        'Cloudflare SSL',
        'SPF / DKIM / DMARC / PTR',
      ],
      metrics: [
        { label: 'MX HANDSHAKE', value: 'Google / Outlook / Yahoo 250 OK' },
        { label: 'IDLE FOOTPRINT', value: '<10MB Native Daemon' },
      ],
    },
    {
      id: 'sys-05',
      code: 'SYS_ARCH // 05',
      title: 'Open-Source Core Banking & Microfinance Mobile Architecture',
      domain: 'Fintech Systems',
      category: 'QUANT & FINTECH',
      icon: Landmark,
      architectureSummary:
        'Integration and customization of enterprise core banking backends with cross-platform mobile client interfaces.',
      technicalUtility:
        'Empowers financial institutions and microfinance operators with sovereign, auditable ledger management, double-entry accounting, and mobile-first client onboarding.',
      blueprintSpecs: [
        'Modular middleware bridging open-source enterprise core banking engines with modern REST/GraphQL mobile gateways.',
        'Role-based access control (RBAC), cryptographic transaction settlement tracking, and immutable audit trail logging.',
        'Cross-platform mobile client optimized for low-bandwidth emerging market networks with deterministic state synchronization.',
      ],
      stackTags: [
        'Core Banking API',
        'Fintech Ledger',
        'React Native',
        'TypeScript',
        'Zero-Trust Auth',
        'Microservices',
      ],
      metrics: [
        { label: 'LEDGER INTEGRITY', value: 'ACID Double-Entry' },
        { label: 'CLIENT TARGET', value: 'Cross-Platform Mobile' },
      ],
    },
    {
      id: 'sys-06',
      code: 'SYS_ARCH // 06 [MEMORY SYNTHESIS]',
      title: 'Distributed Multi-GPU LLM Fine-Tuning & Real-Time SSE Inference Engine',
      domain: 'Generative AI & Distributed Model Serving',
      category: 'AI & ROBOTICS',
      icon: Bot,
      isMemorySynthesized: true,
      architectureSummary:
        '4-bit QLoRA distributed training pipeline for 14B+ parameter foundation models paired with a FastAPI Server-Sent Events (SSE) streaming backend and Turborepo universal web/mobile monorepo.',
      technicalUtility:
        'Synthesized from collaborative R&D: enables domain-specific instruction tuning across multi-GPU clusters while streaming deterministic, structured prompt/completion tokens in real time to web and mobile clients.',
      blueprintSpecs: [
        'Distributed multi-GPU 4-bit QLoRA training via Accelerate & Axolotl (`lora_r: 64`, `lora_alpha: 128`, `fp16`) with disabled sample-packing to eliminate cross-sample attention bleeding.',
        'Automated adapter persistence to model registries paired with turnkey 4-bit quantized remote inference tunnels.',
        'Turborepo monorepo architecture uniting a FastAPI `/v1/generate` SSE streaming backend, shared Zod/TypeScript design-token packages, an Expo Universal App, and a Next.js 15 web platform.',
      ],
      stackTags: [
        '4-Bit QLoRA (14B LLM)',
        'Multi-GPU Accelerate',
        'FastAPI SSE Streaming',
        'Turborepo Monorepo',
        'Expo + Next.js 15',
        'Zod Shared Schemas',
      ],
      metrics: [
        { label: 'TRAINING TOPOLOGY', value: 'Dual-GPU 30GB VRAM QLoRA' },
        { label: 'STREAM PROTOCOL', value: 'Real-Time FastAPI SSE' },
      ],
    },
    {
      id: 'sys-07',
      code: 'SYS_ARCH // 07 [MEMORY SYNTHESIS]',
      title: 'Autonomous Cybersecurity Reconnaissance & LPU-Accelerated Defense Agent',
      domain: 'Offensive/Defensive Security & Agentic AI',
      category: 'INFRA & SECURITY',
      icon: ShieldAlert,
      isMemorySynthesized: true,
      architectureSummary:
        'High-speed agentic cybersecurity auditing framework executing inside virtualized Linux environments, routing 27B-parameter reasoning workloads over LPU cloud inference pipelines.',
      technicalUtility:
        'Synthesized from collaborative R&D: accelerates autonomous security reconnaissance, vulnerability triage, and defensive tool execution by 40x while reducing local host CPU/RAM overhead to zero.',
      blueprintSpecs: [
        'WSL2 Ubuntu security orchestration environment integrated with OpenAI-compatible LPU inference endpoints running 27B-parameter deep-reasoning models.',
        'Reduced end-to-end tool-calling and reconnaissance reasoning latency from 45–120s (local CPU Ollama) down to 0.95–2.80s per autonomous cycle.',
        'Hardened environment isolation with zero background telemetry leakage and deterministic CLI command verification.',
      ],
      stackTags: [
        'Agentic Cybersecurity',
        '27B Reasoning LLM',
        'LPU Inference Routing',
        'WSL2 Linux Security',
        'Automated Recon',
        'Zero-Telemetry Hardening',
      ],
      metrics: [
        { label: 'INFERENCE LATENCY', value: '0.95s – 2.80s (40x Speedup)' },
        { label: 'LOCAL HOST LOAD', value: '0% CPU / GPU Overhead' },
      ],
    },
  ];

  const categories = [
    'ALL',
    'AI & ROBOTICS',
    'QUANT & FINTECH',
    'INFRA & SECURITY',
    'MOBILE & MEDIA',
  ];

  const filteredInitiatives =
    selectedCategory === 'ALL'
      ? initiatives
      : initiatives.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="systems-architecture"
      className="py-24 lg:py-32 relative bg-[#090A0F] border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-white/10"
        >
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#F59E0B] uppercase tracking-widest mb-3">
              <Layers className="w-4 h-4" />
              <span>03 // PRODUCTION ARCHITECTURES &amp; R&amp;D INITIATIVES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Systems &amp; R&amp;D Initiatives
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl">
              Strictly anonymized architectural blueprints engineered by{' '}
              <span className="text-white font-medium">Obinna Joseph Okwudiri (King Gold)</span>{' '}
              under the <span className="text-[#F59E0B] font-medium">Microbase</span> ecosystem,
              classified by system architecture, industry domain, and technical utility.
            </p>
          </div>

          {/* Strict Anonymization Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#12141D] border border-[#10B981]/30 font-mono text-xs text-[#10B981] shrink-0 self-start lg:self-auto">
            <Lock className="w-3.5 h-3.5" />
            <span>OPSEC // CLIENT &amp; CODE NAMES REDACTED</span>
          </div>
        </motion.div>

        {/* Category Filter Bar */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-mono text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  active
                    ? 'bg-[#F59E0B] text-[#090A0F] shadow-lg shadow-[#F59E0B]/20'
                    : 'bg-[#12141D] text-slate-300 border border-white/10 hover:border-[#F59E0B]/40 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Systems Cards Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredInitiatives.map((sys, idx) => {
              const isExpanded = expandedId === sys.id;
              return (
                <motion.div
                  layout
                  key={sys.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className={`rounded-xl bg-[#12141D] border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                    sys.isMemorySynthesized
                      ? 'border-[#10B981]/35 hover:border-[#10B981]/70'
                      : 'border-white/10 hover:border-[#F59E0B]/50'
                  } ${ idx === 0 && selectedCategory === 'ALL' ? 'lg:col-span-2' : '' }`}
                >
                  <div className="p-6 sm:p-8">
                    {/* Card Top Metadata */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs font-bold text-[#F59E0B]">
                          {sys.code}
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="font-mono text-xs text-[#10B981] font-medium">
                          {sys.domain}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {sys.isMemorySynthesized && (
                          <span className="px-2.5 py-0.5 rounded bg-[#10B981]/15 border border-[#10B981]/40 font-mono text-[10px] font-semibold text-[#10B981]">
                            R&amp;D TELEMETRY LOG
                          </span>
                        )}
                        <span className="px-2.5 py-0.5 rounded bg-[#090A0F] border border-white/10 font-mono text-[10px] text-slate-300">
                          {sys.category}
                        </span>
                      </div>
                    </div>

                    {/* Title & Core Architecture */}
                    <div className="mt-5 flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-[#090A0F] border border-[#F59E0B]/30 text-[#F59E0B] shrink-0 mt-0.5">
                        <sys.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                          {sys.title}
                        </h3>
                        <p className="mt-2.5 text-sm sm:text-base text-slate-200 leading-relaxed">
                          <span className="font-mono text-xs text-[#F59E0B] uppercase mr-2">
                            [Architecture]:
                          </span>
                          {sys.architectureSummary}
                        </p>
                        <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                          <span className="font-mono text-xs text-[#10B981] uppercase mr-2">
                            [Technical Utility]:
                          </span>
                          {sys.technicalUtility}
                        </p>
                      </div>
                    </div>

                    {/* Key Telemetry Metrics Row */}
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {sys.metrics.map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="px-3.5 py-2.5 rounded-lg bg-[#090A0F] border border-white/10 flex items-center justify-between font-mono text-xs"
                        >
                          <span className="text-slate-400 text-[11px]">{m.label}</span>
                          <span className="text-white font-semibold">{m.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Expandable Deep Blueprint Specification */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-5 pt-5 border-t border-white/10 bg-[#090A0F]/80 rounded-lg p-4 space-y-3">
                            <div className="flex items-center gap-2 font-mono text-xs text-[#F59E0B]">
                              <Terminal className="w-3.5 h-3.5" />
                              <span>SYSTEM BLUEPRINT &amp; IMPLEMENTATION PARAMETERS</span>
                            </div>
                            <ul className="space-y-2">
                              {sys.blueprintSpecs.map((spec, sIdx) => (
                                <li
                                  key={sIdx}
                                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                                >
                                  <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                                  <span>{spec}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Card Footer: Tags & Blueprint Toggle */}
                  <div className="px-6 sm:px-8 py-4 bg-[#090A0F]/60 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {sys.stackTags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded bg-[#12141D] border border-white/10 font-mono text-[11px] text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setExpandedId(isExpanded ? null : sys.id)}
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#F59E0B] hover:text-amber-300 transition-colors cursor-pointer shrink-0"
                    >
                      <span>{isExpanded ? 'HIDE BLUEPRINT' : 'INSPECT BLUEPRINT'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
