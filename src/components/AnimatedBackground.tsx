import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(15,185,177,0.24),transparent_16rem),radial-gradient(circle_at_84%_24%,rgba(249,115,22,0.16),transparent_16rem)]" />
      <svg className="absolute inset-0 h-full w-full opacity-45" viewBox="0 0 1200 720" preserveAspectRatio="none">
        <motion.path
          d="M80 560 C240 380 360 420 520 270 S860 170 1120 110"
          fill="none"
          stroke="url(#routeGradient)"
          strokeWidth="3"
          strokeDasharray="10 14"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.path
          d="M160 160 C320 220 420 100 600 190 S850 390 1080 300"
          fill="none"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="2"
          strokeDasharray="8 16"
          initial={{ pathLength: 1 }}
          animate={{ pathLength: 0.2 }}
          transition={{ duration: 3.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="routeGradient" x1="0" x2="1">
            <stop offset="0%" stopColor="#0fb9b1" />
            <stop offset="58%" stopColor="#0b5cff" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
