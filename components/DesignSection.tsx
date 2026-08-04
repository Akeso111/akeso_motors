"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DesignSection() {
  return (
    <section className="relative bg-black py-40 overflow-hidden">

      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >

          <p className="text-white/40 tracking-[0.45em] uppercase">
            AKESO DESIGN
          </p>

          <h2 className="mt-6 text-5xl md:text-7xl font-extralight tracking-[0.15em]">
            Tasarımın
            <br />
            Yeni Hali
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-white/60 leading-9 text-lg">
            City Bee yalnızca bir ulaşım aracı değil,
            şehir yaşamı için tasarlanmış modern bir deneyimdir.
          </p>

        </motion.div>



        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mt-24 flex justify-center"
        >

          <Image
            src="/images/hero-cover.png"
            alt="City Bee"
            width={1800}
            height={1000}
            className="
              w-full
              max-w-[1500px]
              object-contain
              drop-shadow-[0_0_120px_rgba(255,255,255,.15)]
            "
          />

        </motion.div>

      </div>

    </section>
  );
}