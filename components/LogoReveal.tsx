"use client";

import { motion } from "framer-motion";


export default function LogoReveal() {


  return (

    <motion.div


      initial={{
        opacity:0,
        scale:.92,
        y:20
      }}


      animate={{
        opacity:1,
        scale:1,
        y:0
      }}


      transition={{
        duration:2,
        delay:1,
        ease:"easeOut"
      }}



      className="
      absolute
      z-30
      top-[43%]
      left-1/2
      -translate-x-1/2
      -translate-y-1/2
      pointer-events-none
      "

    >






      <div

        className="
        relative
        overflow-hidden
        px-8
        py-3
        "

      >






        {/* LOGO IŞIK TARAMASI */}



        <motion.div


          animate={{

            x:[

              "-160%",

              "160%"

            ]

          }}



          transition={{

            duration:6,

            repeat:Infinity,

            repeatDelay:7,

            ease:"easeInOut"

          }}



          className="
          absolute
          inset-y-0
          w-[90px]
          bg-gradient-to-r
          from-transparent
          via-white/35
          to-transparent
          blur-xl
          rotate-[18deg]
          "

        />









        <motion.h1


          animate={{

            opacity:[

              .92,

              1,

              .92

            ]

          }}



          transition={{

            duration:5,

            repeat:Infinity,

            ease:"easeInOut"

          }}




          className="
          relative
          text-5xl
          sm:text-6xl
          md:text-7xl
          font-extralight
          tracking-[0.5em]
          uppercase
          bg-gradient-to-r
          from-white
          via-white/80
          to-white
          bg-clip-text
          text-transparent
          drop-shadow-[0_0_20px_rgba(255,255,255,0.35)]
          whitespace-nowrap
          "

        >

          AKESO


        </motion.h1>







      </div>


    </motion.div>

  );

}