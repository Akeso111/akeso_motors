"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/data/products";

type Props = {
  currentSlug: string;
};

export default function OtherProducts({
  currentSlug,
}: Props) {

  const getScale = (slug: string) => {
    switch (slug) {

      case "city-bee":
        return "scale-125";

      case "ruby":
        return "scale-110";

      case "toro":
        return "scale-100";

      case "raba":
        return "scale-75";

      case "l500":
        return "scale-90";

      case "yagi-pro":
        return "scale-85";

      default:
        return "scale-100";
    }
  };

  return (
    <>

      {/* MOBİL MENÜ */}

      <div
        className="
        fixed
        top-20
        left-0
        right-0
        z-40
        lg:hidden
        overflow-x-auto
        px-4
        pb-2
        scrollbar-hide
        "
      >
        <div className="flex gap-3 w-max">

          {products.map((product) => {

            const active = product.slug === currentSlug;

            return (

              <Link
                key={product.slug}
                href={`/urunler/${product.slug}`}
                className={`
                relative
                min-w-[88px]
                w-[88px]
                rounded-2xl
                overflow-hidden
                border
                transition-all
                duration-300

                ${
                  active
                    ? "border-white bg-white/[0.08]"
                    : "border-white/10 bg-black/70"
                }
                `}
              >

                {active && (
                  <div
                    className="
                    absolute
                    left-0
                    top-0
                    bottom-0
                    w-1
                    bg-white
                    "
                  />
                )}

                <div
                  className="
                  relative
                  h-16
                  overflow-hidden
                  "
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={`
                    object-contain
                    ${getScale(product.slug)}
                    ${
                      active
                        ? "brightness-125"
                        : "opacity-60"
                    }
                    `}
                  />
                </div>

                <p
                  className={`
                  text-center
                  text-[10px]
                  py-2

                  ${
                    active
                      ? "text-white"
                      : "text-white/50"
                  }
                  `}
                >
                  {product.name}
                </p>

              </Link>

            );

          })}

        </div>
      </div>

      {/* MASAÜSTÜ MENÜ */}

      <div
        className="
        fixed
        left-6
        top-1/2
        -translate-y-1/2
        z-40
        hidden
        lg:flex
        flex-col
        gap-3
        "
      >

        <p
          className="
          text-[10px]
          tracking-[0.4em]
          text-white/40
          mb-2
          "
        >
          AKESO SERIES
        </p>

        {products.map((product) => {

          const active = product.slug === currentSlug;

          return (

            <Link
              key={product.slug}
              href={`/urunler/${product.slug}`}
              className={`
              group
              relative
              w-28
              rounded-2xl
              overflow-hidden
              border
              transition-all
              duration-300

              ${
                active
                  ? "border-white bg-white/[0.08] scale-105"
                  : "border-white/10 bg-black/60 hover:border-white/40"
              }
              `}
            >

              {active && (
                <div
                  className="
                  absolute
                  left-0
                  top-0
                  bottom-0
                  w-1
                  bg-white
                  "
                />
              )}

              <div
                className="
                relative
                h-20
                overflow-hidden
                "
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className={`
                  object-contain
                  transition-transform
                  duration-300
                  ${getScale(product.slug)}
                  ${
                    active
                      ? "brightness-125"
                      : "opacity-60 group-hover:opacity-100"
                  }
                  `}
                />
              </div>

              <p
                className={`
                text-center
                text-[11px]
                py-2
                tracking-wide

                ${
                  active
                    ? "text-white"
                    : "text-white/50"
                }
                `}
              >
                {product.name}
              </p>

            </Link>

          );

        })}

      </div>

    </>
  );

}