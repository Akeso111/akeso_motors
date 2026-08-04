"use client";

import { motion } from "framer-motion";


export default function ComingSoon() {


  return (

    <motion.div


      initial={{
        opacity:0,
        y:40,
        scale:.96,
      }}


      animate={{
        opacity:1,
        y:0,
        scale:1,
      }}


      transition={{
        duration:1.5,
        ease:"easeOut",
      }}


      className="
      absolute
      z-30
      bottom-32
      left-1/2
      -translate-x-1/2
      text-center
      text-white
      "

    >





      {/* MODEL ADI */}


      <div
        className="
        relative
        overflow-hidden
        px-6
        "
      >



        <motion.h2


          animate={{
            opacity:[
              .9,
              1,
              .9
            ]
          }}


          transition={{
            duration:4,
            repeat:Infinity,
            ease:"easeInOut"
          }}



          className="
          text-5xl
          md:text-7xl
          font-light
          tracking-[0.5em]
          whitespace-nowrap
          drop-shadow-[0_0_25px_rgba(255,255,255,0.35)]
          "

        >

          CITY BEE


        </motion.h2>






        {/* IŞIK GEÇİŞİ */}



        <motion.div


          animate={{

            x:[
              "-150%",
              "150%"
            ]

          }}


          transition={{

            duration:5,

            repeat:Infinity,

            repeatDelay:4,

            ease:"easeInOut"

          }}



          className="
          absolute
          inset-y-0
          w-[80px]
          bg-gradient-to-r
          from-transparent
          via-white/40
          to-transparent
          blur-xl
          rotate-[20deg]
          "

        />



      </div>








      {/* ALT BAŞLIK */}



      <motion.p


        initial={{
          opacity:0
        }}


        animate={{
          opacity:1
        }}


        transition={{
          delay:1,
          duration:1
        }}



        className="
        mt-6
        text-sm
        tracking-[0.9em]
        text-white/60
        "

      >

        ÇOK YAKINDA

      </motion.p>







      <motion.p


        initial={{
          opacity:0
        }}


        animate={{
          opacity:1
        }}


        transition={{
          delay:1.3,
          duration:1
        }}



        className="
        mt-5
        text-[11px]
        tracking-[0.45em]
        text-white/30
        uppercase
        "

      >

        Yeni nesil elektrikli mobilite


      </motion.p>




    </motion.div>

  );

}