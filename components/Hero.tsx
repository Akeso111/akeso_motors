"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {

  return (
    <motion.section

      initial={{
        scale:1,
      }}

      animate={{
        scale:[
          1,
          1.025,
          1.015
        ],
      }}

      transition={{
        duration:8,
        ease:"easeInOut",
      }}

      className="
      absolute
      inset-0
      z-0
      flex
      items-center
      justify-center
      -translate-x-[8px]
      "

    >



      <div className="
      relative
      w-[900px]
      h-[600px]
      ">




        {/* SHOWROOM ATMOSFER IŞIĞI */}


        <motion.div


          initial={{
            opacity:0,
            scale:.95,
          }}


          animate={{

            opacity:[
              .25,
              .32,
              .25
            ],

            scale:[
              1,
              1.03,
              1
            ]

          }}


          transition={{

            duration:6,

            repeat:Infinity,

            ease:"easeInOut",

            delay:1

          }}


          className="
          absolute
          inset-0
          rounded-full
          bg-white/10
          blur-[90px]
          "

        />









        {/* FAR PARLAMASI */}



        <motion.div


          animate={{

            opacity:[

              .25,

              .35,

              .25

            ],


            scale:[

              1,

              1.05,

              1

            ]


          }}



          transition={{

            duration:4,

            repeat:Infinity,

            ease:"easeInOut"

          }}



          className="
          absolute
          top-[43%]
          left-1/2
          -translate-x-1/2
          w-[180px]
          h-[80px]
          rounded-full
          bg-white/20
          blur-[50px]
          "

        />









        {/* ARAÇ */}



        <motion.div


          initial={{

            opacity:0,

            y:30,

            scale:.96,

          }}



          animate={{

            opacity:1,

            y:0,

            scale:[

              1,

              1.015,

              1

            ],


          }}




          transition={{


            opacity:{

              duration:1.8,

              delay:.8,

            },


            y:{

              duration:1.8,

              delay:.8,

              ease:"easeOut"

            },


            scale:{

              duration:6,

              delay:2.5,

              repeat:Infinity,

              ease:"easeInOut"

            }


          }}



          className="
          absolute
          inset-0
          "

        >



          <Image

            src="/orion.png"

            alt="City Bee"

            fill

            priority

            draggable={false}

            className="
            object-contain
            select-none
            "

          />



        </motion.div>









        {/* ZEMİN YANSIMASI */}



        <motion.div


          animate={{

            opacity:[

              .12,

              .32,

              .12

            ],


            scale:[

              .9,

              1.05,

              .9

            ]

          }}



          transition={{

            duration:5,

            repeat:Infinity,

            ease:"easeInOut"

          }}



          className="
          absolute
          bottom-[65px]
          left-1/2
          -translate-x-1/2
          w-[520px]
          h-[90px]
          bg-white/20
          blur-[90px]
          rounded-full
          "

        />





      </div>


    </motion.section>
  );
}