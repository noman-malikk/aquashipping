import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function QuoteStep({ children, stepKey }: { children: ReactNode; stepKey: string }) {
  return (
    <motion.div
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -18 }}
      initial={{ opacity: 0, x: 18 }}
      key={stepKey}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
