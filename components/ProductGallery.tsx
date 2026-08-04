"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


type Props = {
  images: string[];
  name: string;
  slug?: string;
};


export default function ProductGallery({
  images,
  name,
  slug
}: Props) {


  const [activeImage, setActiveImage] = useState(images[0]);



  const getScale = () => {

    switch(slug){

      case "raba":
        return "scale-[0.95]";

      case "toro":
        return "scale-[1]";

      case "l500":
        return "scale-[0.98]";

      case "yagi-pro":
        return "scale-[0.98]";

      case "city-bee":
        return "scale-[1]";

      case "ruby":
        return "scale-[1]";

      default:
        return "scale-[1]";

    }

  };



  const currentIndex = images.indexOf(activeImage);



  const prevImage = () => {

    const index =
      currentIndex === 0
        ? images.length - 1
        : currentIndex - 1;

    setActiveImage(images[index]);

  };



  const nextImage = () => {

    const index =
      currentIndex === images.length - 1
        ? 0
        : currentIndex + 1;

    setActiveImage(images[index]);

  };



  return (

    <div className="w-full">


      <div
        className="
        relative
        h-[420px]
        md:h-[560px]
        rounded-3xl
        overflow-hidden
        border
        border-white/10
        bg-white/[0.03]
        shadow-[0_0_100px_rgba(255,255,255,0.08)]
        "
      >


        <div
          className="
          absolute
          inset-0
          bg-white/[0.03]
          blur-3xl
          "
        />



        <Image

          src={activeImage}

          alt={name}

          fill

          priority

          sizes="100vw"

          className={`
          object-contain
          z-10
          transition-transform
          duration-500
          ease-out
          ${getScale()}
          `}

        />



        {
          images.length > 1 && (

            <>

              <button

                onClick={prevImage}

                className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                z-20
                w-12
                h-12
                rounded-full
                bg-black/60
                border
                border-white/20
                flex
                items-center
                justify-center
                hover:bg-white
                hover:text-black
                transition
                "

              >

                <ChevronLeft size={26}/>

              </button>




              <button

                onClick={nextImage}

                className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                z-20
                w-12
                h-12
                rounded-full
                bg-black/60
                border
                border-white/20
                flex
                items-center
                justify-center
                hover:bg-white
                hover:text-black
                transition
                "

              >

                <ChevronRight size={26}/>

              </button>

            </>

          )
        }


      </div>





      {
        images.length > 1 && (

          <div
            className="
            flex
            gap-3
            mt-5
            "
          >

            {
              images.map((img,index)=>(

                <button

                  key={index}

                  onClick={() => setActiveImage(img)}

                  className={`
                  relative
                  w-20
                  h-16
                  rounded-xl
                  overflow-hidden
                  border
                  transition
                  ${
                    activeImage === img
                    ? "border-white"
                    : "border-white/10 hover:border-white/40"
                  }
                  `}

                >

                  <Image

                    src={img}

                    alt={name}

                    fill

                    className="
                    object-contain
                    p-2
                    "

                  />

                </button>

              ))
            }

          </div>

        )

      }



    </div>

  );

}