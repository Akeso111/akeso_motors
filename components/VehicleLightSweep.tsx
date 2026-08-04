"use client";

import { motion } from "framer-motion";

export default function VehicleLightSweep() {

  return (
    <div
      className="
        absolute
        inset-0
        z-[6]
        pointer-events-none
        overflow-hidden
      "
    >

      <motion.div

        animate={{
          x:[
            "-120%",
            "120%"
          ],
          opacity:[
            0,
            0.45,
            0
          ],
        }}

        transition={{
          duration:5,
          repeat:Infinity,
          repeatDelay:4,
          ease:"easeInOut",
        }}

        className="
          absolute
          top-0
          left-0
          w-[220px]
          h-full
          rotate-[12deg]
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
          blur-[35px]
        "

      />


    </div>
  );
}