"use client";

import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <section className="relative bg-black py-28 px-8">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <h2
            className="
              text-center
              text-white
              text-4xl
              md:text-5xl
              font-light
              tracking-[0.35em]
            "
          >
            KONUM
          </h2>

          <p
            className="
              mt-5
              text-center
              text-white/55
              max-w-2xl
              mx-auto
              leading-8
            "
          >
            AKESO Medikal Teknoloji San. Tic. Ltd. Şti.
            fabrikasını harita üzerinden görüntüleyebilir,
            tek tıkla yol tarifi oluşturabilirsiniz.
          </p>

        </motion.div>



        <motion.div

          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}

          className="
            mt-14
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            shadow-[0_0_60px_rgba(255,255,255,0.05)]
          "

        >

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6214788818743!2d30.55269525456384!3d37.422420798525636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c441bb45987289%3A0x2bae3ac6cfacd363!2sAkeso%20Medikal%20Teknoloji%20San.Tic.Ltd.%C5%9Eti.!5e0!3m2!1str!2str!4v1785409362087!5m2!1str!2str"
            width="100%"
            height="550"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />

        </motion.div>



        <motion.div

          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}

          className="
            flex
            justify-center
            mt-10
          "

        >

          <a
            href="https://maps.google.com/?q=Akeso%20Medikal%20Teknoloji%20San.%20Tic.%20Ltd.%20Şti."
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-10
              py-4
              border
              border-white/15
              text-white
              tracking-[0.25em]
              uppercase
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
            "
          >
            Yol Tarifi Al
          </a>

        </motion.div>

      </div>

    </section>
  );
}