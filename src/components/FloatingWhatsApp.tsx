import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 flex items-center group"
    >
      {/* Popover Badge on Hover */}
      <div className="hidden sm:block absolute right-full mr-3.5 px-3 py-1.5 rounded-lg bg-[#12141D]/95 border border-[#10B981]/40 text-[#10B981] font-mono text-xs font-semibold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none translate-x-1 group-hover:translate-x-0">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
          Direct Signal // King Gold
        </span>
      </div>

      {/* Floating Action Button */}
      <a
        href="https://wa.me/2348063315614?text=Hello%20Obinna%20(King%20Gold)%2C%20reaching%20out%20from%20your%20portfolio"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Message"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#10B981] text-[#090A0F] shadow-2xl shadow-[#10B981]/40 border-2 border-white/20 hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
        {/* Pulsing indicator ring */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border border-[#090A0F]"></span>
        </span>
      </a>
    </motion.div>
  );
};
