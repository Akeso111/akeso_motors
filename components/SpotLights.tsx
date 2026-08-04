"use client";

import { motion } from "framer-motion";

export default function SpotLights() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
        delay: 1,
      }}
      className="
        absolute
        inset-0
        z-10
        pointer-events-none
      "
    >

      {/* Sol alt sanat ışığı */}

      <div
        className="
          absolute
          left-[-40px]
          bottom-[-80px]
          w-[380px]
          h-[500px]
          bg-gradient-to-tr
          from-white/25
          via-white/10
          to-transparent
          blur-2xl
          rotate-[38deg]
        "
      />


      {/* Sağ alt sanat ışığı */}

      <div
        className="
          absolute
          right-[-40px]
          bottom-[-80px]
          w-[380px]
          h-[500px]
          bg-gradient-to-tl
          from-white/25
          via-white/10
          to-transparent
          blur-2xl
          rotate-[-38deg]
        "
      />


      {/* Araç üstü hafif aydınlatma */}

      <div
        className="
          absolute
          left-1/2
          top-[55%]
          -translate-x-1/2
          -translate-y-1/2
          w-[450px]
          h-[300px]
          rounded-full
          bg-white/5
          blur-3xl
        "
      />


    </motion.div>
  );
}