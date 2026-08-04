"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/app/data/products";


type Props = {
  product: Product;
};


export default function ProductCard({ product }: Props) {


  return (

    <div

      className="
      group
      relative
      rounded-3xl
      border
      border-white/10
      bg-white/[0.03]
      overflow-hidden
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-white/30
      "

    >



      {/* HOVER IŞIĞI */}

      <div

        className="
        pointer-events-none
        absolute
        inset-0
        opacity-0
        group-hover:opacity-100
        transition
        duration-700
        bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_55%)]
        "

      />





      {/* GÖRSEL */}


      <div className="
      relative
      h-[260px]
      overflow-hidden
      ">


        <Image

          src={product.image}

          alt={product.name}

          fill

          className="
          object-contain
          p-8
          transition-all
          duration-700
          group-hover:scale-110
          "

        />



        {product.badge && (

          <div

            className="
            absolute
            top-5
            left-5
            rounded-full
            bg-white
            text-black
            px-4
            py-1
            text-xs
            font-semibold
            "

          >

            {product.badge}

          </div>

        )}



      </div>







      {/* İÇERİK */}



      <div className="
      relative
      z-10
      p-7
      ">



        <h2

          className="
          text-3xl
          font-semibold
          "

        >

          {product.name}

        </h2>





        <p

          className="
          mt-3
          text-white/60
          "

        >

          {product.subtitle}

        </p>








        {/* TEKNİKLER */}



        {product.specs && (


          <div

            className="
            mt-6
            grid
            grid-cols-2
            gap-3
            "

          >


            {product.specs.motorPower &&
              <Spec title="Motor" value={product.specs.motorPower}/>
            }


            {product.specs.battery &&
              <Spec title="Batarya" value={product.specs.battery}/>
            }


            {product.specs.maxRange &&
              <Spec title="Menzil" value={product.specs.maxRange}/>
            }


            {product.specs.maxSpeed &&
              <Spec title="Hız" value={product.specs.maxSpeed}/>
            }


            {product.specs.chargingTime &&
              <Spec title="Şarj" value={product.specs.chargingTime}/>
            }


            {product.specs.maxLoad &&
              <Spec title="Kapasite" value={product.specs.maxLoad}/>
            }


            {product.specs.brake &&
              <Spec title="Fren" value={product.specs.brake}/>
            }


            {product.specs.tireSize &&
              <Spec title="Lastik" value={product.specs.tireSize}/>
            }


            {product.specs.gradeAbility &&
              <Spec title="Tırmanma" value={product.specs.gradeAbility}/>
            }


          </div>

        )}







        {/* BUTON */}



        <Link

          href={`/urunler/${product.slug}`}

          className="
          block
          text-center
          mt-8
          px-6
          py-3
          rounded-full
          border
          border-white/20
          transition-all
          duration-300
          hover:bg-white
          hover:text-black
          hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]
          "

        >

          Detayları İncele

        </Link>




      </div>



    </div>

  );

}







function Spec({

  title,

  value,

}:{

  title:string;

  value:string;

}) {


  return (

    <div

      className="
      rounded-xl
      border
      border-white/10
      bg-white/[0.03]
      p-3
      transition
      duration-300
      group-hover:border-white/20
      "

    >


      <p

        className="
        text-xs
        text-white/40
        uppercase
        "

      >

        {title}

      </p>



      <p

        className="
        text-sm
        mt-1
        "

      >

        {value}

      </p>



    </div>

  );

}