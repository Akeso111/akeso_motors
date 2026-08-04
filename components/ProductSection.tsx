"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Specs = {
  motorPower?: string;
  battery?: string;
  overallDim?: string;
  tireSize?: string;
  maxLoad?: string;
  maxSpeed?: string;
  controller?: string;
  light?: string;
  frontFork?: string;
  chargingTime?: string;
  gradeAbility?: string;
  brake?: string;
  frontRearWheel?: string;
  maxRange?: string;
};

type ProductSectionProps = {
  name: string;
  slug: string;
  description: string;
  image: string;
  reverse?: boolean;
  whatsappMessage?: string;
  specs?: Specs;
};

export default function ProductSection({
  name,
  slug,
  description,
  image,
  reverse = false,
  specs,
}: ProductSectionProps) {

  const getImageScale = () => {
    switch (slug) {
      case "city-bee":
        return "scale-[1.08]";

      case "ruby":
        return "scale-[1.08]";

      case "toro":
        return "scale-[1.15]";

      case "raba":
        return "scale-[1.22]";

      case "l500":
        return "scale-[1.18]";

      case "yagi-pro":
        return "scale-[1.20]";

      default:
        return "scale-[1.12]";
    }
  };

  const technical = [
    {
      title: "Motor Gücü",
      value: specs?.motorPower,
    },
    {
      title: "Batarya",
      value: specs?.battery,
    },
    {
      title: "Genel Ölçüler",
      value: specs?.overallDim,
    },
    {
      title: "Lastik Ölçüsü",
      value: specs?.tireSize,
    },
    {
      title: "Maksimum Yük",
      value: specs?.maxLoad,
    },
    {
      title: "Maksimum Hız",
      value: specs?.maxSpeed,
    },
    {
      title: "Kontrol Ünitesi",
      value: specs?.controller,
    },
    {
      title: "Aydınlatma",
      value: specs?.light,
    },
  ].filter((item) => item.value);

  return (
    <section
      className="
      relative
      min-h-[90vh]
      bg-black
      text-white
      flex
      items-center
      overflow-hidden
      py-24
      "
    >
      <div
        className={`
        max-w-7xl
        mx-auto
        w-full
        px-6
        md:px-12
        flex
        flex-col
        md:flex-row
        items-center
        gap-20
        ${reverse ? "md:flex-row-reverse" : ""}
        `}
      >
        {/* GÖRSEL */}

        <motion.div
          initial={{
            opacity: 0,
            x: reverse ? 120 : -120,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
          }}
          className="
          w-full
          md:w-1/2
          "
        >
          <div
            className="
            relative
            h-[500px]
            md:h-[650px]
            rounded-3xl
            overflow-hidden
            border
            border-white/10
            bg-white/[0.025]
            shadow-[0_0_120px_rgba(255,255,255,0.08)]
            "
          >
            <div
              className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16),transparent_60%)]
              "
            />

            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                scale: {
                  duration: 0.4,
                },
              }}
              className="
              relative
              w-full
              h-full
              flex
              items-center
              justify-center
              "
            >
              <Image
                src={image}
                alt={name}
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className={`
                object-contain
                object-center
                transition-all
                duration-500
                ${getImageScale()}
                `}
              />
            </motion.div>
          </div>
        </motion.div>
                {/* BİLGİ */}

        <motion.div
          initial={{
            opacity: 0,
            x: reverse ? -100 : 100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
          className="
          w-full
          md:w-1/2
          "
        >
          <p
            className="
            text-xs
            tracking-[0.5em]
            text-white/30
            uppercase
            mb-6
            "
          >
            AKESO SERIES
          </p>

          <h2
            className="
            text-5xl
            md:text-7xl
            font-semibold
            tracking-tight
            mb-6
            "
          >
            {name}
          </h2>

          <p
            className="
            text-white/60
            text-lg
            leading-relaxed
            whitespace-pre-line
            "
          >
            {description}
          </p>

          <Link
            href={`/urunler/${slug}`}
            className="
            inline-flex
            mt-8
            px-8
            py-3
            rounded-full
            border
            border-white/20
            hover:bg-white
            hover:text-black
            transition-all
            duration-300
            "
          >
            Detayları İncele
          </Link>

          <div
            className="
            mt-10
            grid
            grid-cols-2
            gap-4
            "
          >
            {technical.slice(0, 4).map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -5,
                }}
                className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur
                p-4
                hover:border-white/40
                transition
                "
              >
                <p
                  className="
                  text-xs
                  text-white/40
                  uppercase
                  "
                >
                  {item.title}
                </p>

                <p
                  className="
                  mt-2
                  text-sm
                  "
                >
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}