import { notFound } from "next/navigation";
import { products } from "../../data/products";

import ProductGallery from "@/components/ProductGallery";
import OtherProducts from "@/components/OtherProducts";

import {
  Zap,
  BatteryCharging,
  Ruler,
  CircleDot,
  Weight,
  Gauge,
  Cpu,
  Lightbulb,
  Wrench,
  Clock3,
  Mountain,
  Disc,
  Car,
  Route,
} from "lucide-react";


type Props = {
  params: Promise<{
    slug: string;
  }>;
};


export default async function ProductDetailPage({ params }: Props) {

  const { slug } = await params;


  const product = products.find(
    (item) => item.slug === slug
  );


  if (!product) {
    notFound();
  }



  const technical = [
    {
      title: "Motor Gücü",
      value: product.specs?.motorPower,
      icon: Zap,
    },
    {
      title: "Batarya",
      value: product.specs?.battery,
      icon: BatteryCharging,
    },
    {
      title: "Genel Ölçüler",
      value: product.specs?.overallDim,
      icon: Ruler,
    },
    {
      title: "Lastik Ölçüsü",
      value: product.specs?.tireSize,
      icon: CircleDot,
    },
    {
      title: "Maksimum Yük",
      value: product.specs?.maxLoad,
      icon: Weight,
    },
    {
      title: "Maksimum Hız",
      value: product.specs?.maxSpeed,
      icon: Gauge,
    },
    {
      title: "Kontrol Ünitesi",
      value: product.specs?.controller,
      icon: Cpu,
    },
    {
      title: "Aydınlatma",
      value: product.specs?.light,
      icon: Lightbulb,
    },
    {
      title: "Ön Çatal",
      value: product.specs?.frontFork,
      icon: Wrench,
    },
    {
      title: "Şarj Süresi",
      value: product.specs?.chargingTime,
      icon: Clock3,
    },
    {
      title: "Tırmanma",
      value: product.specs?.gradeAbility,
      icon: Mountain,
    },
    {
      title: "Fren",
      value: product.specs?.brake,
      icon: Disc,
    },
    {
      title: "Ön / Arka Tekerlek",
      value: product.specs?.frontRearWheel,
      icon: Car,
    },
    {
      title: "Menzil",
      value: product.specs?.maxRange,
      icon: Route,
    },

  ].filter(
    (item) => item.value
  );



  return (

    <main
      className="
      min-h-screen
      bg-black
      text-white
      py-16
      "
    >


      <OtherProducts
        currentSlug={product.slug}
      />



      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        md:px-12
        "
      >



        <section
          className="
          grid
          lg:grid-cols-[1.1fr_0.9fr]
          gap-14
          items-center
          "
        >


          <div className="w-full">

            <ProductGallery
              images={
                product.gallery?.length
                  ? product.gallery
                  : [product.image]
              }
              name={product.name}
              slug={product.slug}
            />

          </div>





          <div>


            <p
              className="
              text-xs
              tracking-[0.5em]
              text-white/30
              mb-5
              "
            >
              AKESO MOTORS
            </p>




            <h1
              className="
              text-4xl
              md:text-6xl
              font-semibold
              tracking-tight
              "
            >
              {product.name}
            </h1>




            <p
              className="
              mt-6
              text-lg
              text-white/60
              leading-relaxed
              "
            >
              {product.description}
            </p>




            <a
              href={`https://wa.me/905465157015?text=${encodeURIComponent(
                `Merhaba ${product.name} hakkında bilgi alabilir miyim?`
              )}`}
              target="_blank"
              className="
              inline-flex
              mt-8
              px-8
              py-3
              rounded-full
              bg-white
              text-black
              hover:bg-white/80
              transition
              "
            >
              WhatsApp'tan Bilgi Al
            </a>


          </div>


        </section>







        <section className="mt-20">


          <h2
            className="
            text-3xl
            md:text-4xl
            font-semibold
            mb-8
            "
          >
            Teknik Özellikler
          </h2>




          <div
            className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-4
            "
          >


            {technical.map((item, index) => {

              const Icon = item.icon;


              return (

                <div
                  key={index}
                  className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-gradient-to-br
                  from-white/[0.06]
                  to-white/[0.02]
                  backdrop-blur-xl
                  p-4
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-white/30
                  "
                >


                  <Icon
                    className="
                    absolute
                    -right-5
                    -top-5
                    w-20
                    h-20
                    text-white/5
                    transition
                    duration-500
                    group-hover:scale-110
                    "
                  />



                  <div
                    className="
                    relative
                    z-10
                    w-11
                    h-11
                    rounded-xl
                    bg-white/10
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    mb-4
                    transition
                    duration-500
                    group-hover:bg-white
                    "
                  >


                    <Icon
                      size={22}
                      className="
                      text-white
                      group-hover:text-black
                      transition
                      "
                    />


                  </div>




                  <p
                    className="
                    relative
                    z-10
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-white/45
                    "
                  >
                    {item.title}
                  </p>




                  <p
                    className="
                    relative
                    z-10
                    mt-3
                    text-sm
                    font-semibold
                    leading-relaxed
                    "
                  >
                    {item.value}
                  </p>




                  <div
                    className="
                    mt-5
                    h-px
                    w-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                    "
                  />


                </div>

              );

            })}


          </div>


        </section>



      </div>


    </main>

  );

}