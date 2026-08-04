"use client";

import { motion } from "framer-motion";

export default function VehicleAccentLight() {

  return (
    <div
      className="
        absolute
        inset-0
        z-[7]
        pointer-events-none
      "
    >


      {/* FAR BÖLGESİ VURGUSU */}

      <motion.div
        animate={{
          opacity:[
            0.15,
            0.35,
            0.15
          ],
        }}
        transition={{
          duration:4,
          repeat:Infinity,
          ease:"easeInOut",
        }}
        className="
          absolute
          top-[42%]
          left-1/2
          -translate-x-1/2
          w-[260px]
          h-[90px]
          bg-white/20
          blur-[55px]
          rounded-full
        "
      />


      {/* SOL GÖVDE IŞIĞI */}

      <div
        className="
          absolute
          left-[22%]
          top-[35%]
          w-[180px]
          h-[350px]
          rotate-[25deg]
          bg-white/[0.08]
          blur-[80px]
        "
      />


      {/* SAĞ GÖVDE IŞIĞI */}

      <div
        className="
          absolute
          right-[22%]
          top-[35%]
          w-[180px]
          h-[350px]
          rotate-[-25deg]
          bg-white/[0.08]
          blur-[80px]
        "
      />


      {/* ALT ŞASİ PARLAMASI */}

      <div
        className="
          absolute
          bottom-[120px]
          left-1/2
          -translate-x-1/2
          w-[420px]
          h-[50px]
          bg-white/[0.10]
          blur-[60px]
          rounded-full
        "
      />


    </div>
  );
}