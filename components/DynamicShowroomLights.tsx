"use client";

import { motion, useTransform } from "framer-motion";

interface DynamicShowroomLightsProps {
  openAmount: number;
}

export default function DynamicShowroomLights({
  openAmount,
}: DynamicShowroomLightsProps) {


  const opacity = Math.min(
    openAmount / 200,
    1
  );


  return (
    <div
      className="
        absolute
        inset-0
        z-[5]
        pointer-events-none
      "
      style={{
        opacity: 0.25 + opacity * 0.75,
      }}
    >


      {/* ÜST ARAÇ VURGUSU */}

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
          top-[-100px]
          left-1/2
          -translate-x-1/2
          w-[600px]
          h-[450px]
          bg-white
          blur-[130px]
          rounded-full
        "

      />



      {/* SOL ARAÇ ÜZERİ IŞIK */}

      <div
        className="
          absolute
          left-[-100px]
          bottom-[120px]
          w-[400px]
          h-[300px]
          rotate-[25deg]
          bg-white/20
          blur-[100px]
        "
      />



      {/* SAĞ ARAÇ ÜZERİ IŞIK */}

      <div
        className="
          absolute
          right-[-100px]
          bottom-[120px]
          w-[400px]
          h-[300px]
          rotate-[-25deg]
          bg-white/20
          blur-[100px]
        "
      />



      {/* ZEMİN PARLAMASI */}

      <div
        className="
          absolute
          bottom-[50px]
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[120px]
          bg-white/20
          blur-[120px]
          rounded-full
        "
      />


    </div>
  );
}