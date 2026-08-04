"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { useEffect } from "react";


interface VehicleCurtainProps {
  onOpenChange?: (value:number)=>void;
}


export default function VehicleCurtain({
  onOpenChange
}:VehicleCurtainProps){


  const open = useMotionValue(0);


  const smooth = useSpring(open,{
    stiffness:60,
    damping:30,
  });



  const y = useTransform(
    smooth,
    value => -value
  );



  useEffect(()=>{


    const timer=setTimeout(()=>{


      open.set(150);

      onOpenChange?.(150);


    },600);



    return()=>clearTimeout(timer);


  },[open,onOpenChange]);







  return (

    <div
      className="
      absolute
      inset-0
      z-20
      pointer-events-none
      " 
    >





      {/* PERDE ALANI */}


      <div

        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[860px]
        h-[600px]
        overflow-hidden
        "

      >



        <motion.div


          style={{
            y
          }}


          className="
          absolute
          left-0
          top-0
          w-[860px]
          h-[600px]
          "

        >





          <svg

            viewBox="0 0 860 600"

            className="
            w-full
            h-full
            "

          >



            <defs>


              <linearGradient

                id="fabric"

                x1="0"

                x2="1"

              >



                <stop
                  offset="0%"
                  stopColor="#000"
                />


                <stop
                  offset="18%"
                  stopColor="#333"
                />


                <stop
                  offset="35%"
                  stopColor="#050505"
                />


                <stop
                  offset="50%"
                  stopColor="#252525"
                />


                <stop
                  offset="65%"
                  stopColor="#050505"
                />


                <stop
                  offset="82%"
                  stopColor="#333"
                />


                <stop
                  offset="100%"
                  stopColor="#000"
                />



              </linearGradient>


            </defs>






            <path


              d="
              
              M0 0

              H860


              V500


              Q820 560 760 500

              Q700 560 640 500

              Q580 560 520 500

              Q460 560 400 500

              Q340 560 280 500

              Q220 560 160 500

              Q80 560 0 500


              Z

              "


              fill="url(#fabric)"

            />



          </svg>




        </motion.div>



      </div>









      {/* ÇERÇEVE */}



      <div

        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[860px]
        h-[600px]
        z-30
        "

      >




        {/* ÜST */}


        <div

          className="
          absolute
          top-0
          left-0
          w-full
          h-[2px]
          bg-white
          shadow-[0_0_30px_white]
          "

        />





        {/* SOL */}


        <div

          className="
          absolute
          left-0
          top-0
          h-[460px]
          w-[2px]
          bg-white
          shadow-[0_0_20px_white]
          "

        />





        {/* SAĞ */}


        <div

          className="
          absolute
          right-0
          top-0
          h-[460px]
          w-[2px]
          bg-white
          shadow-[0_0_20px_white]
          "

        />



      </div>






    </div>

  );

}