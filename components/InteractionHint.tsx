"use client";

import { motion } from "framer-motion";

export default function InteractionHint() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="absolute z-30 left-1/2 top-1/2 -translate-x-1/2 translate-y-40 text-white/60"
    >
      <div className="flex flex-col items-center gap-3">
        <span className="text-xs tracking-[0.5em]">
          MOVE TO EXPLORE
        </span>

        <motion.div
          animate={{ x: [-10, 10, -10] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="text-xl"
        >
          ◀  ▶
        </motion.div>
      </div>
    </motion.div>
  );
}