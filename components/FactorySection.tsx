"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FactorySection() {

  return (
    <section
      className="
        relative
        min-h-screen
        bg-black
        text-white
        flex
        items-center
        justify-center
        px-8
        py-32
      "
    >

      <div
        className="
          max-w-7xl
          w-full
          grid
          lg:grid-cols-2
          gap-16
          items-center
        "
      >


        {/* FOTOĞRAF */}

        <motion.div

          initial={{
            opacity:0,
            x:-40,
          }}

          whileInView={{
            opacity:1,
            x:0,
          }}

          transition={{
            duration:1,
          }}

          viewport={{
            once:true,
          }}

          className="
            relative
            w-full
            h-[450px]
            overflow-hidden
            border
            border-white/10
          "

        >

          <Image
            src="/fabrika.png"
            alt="Akeso Fabrika"
            fill
            className="
              object-cover
            "
          />

        </motion.div>




        {/* BİLGİLER */}

        <motion.div

          initial={{
            opacity:0,
            x:40,
          }}

          whileInView={{
            opacity:1,
            x:0,
          }}

          transition={{
            duration:1,
          }}

          viewport={{
            once:true,
          }}

        >


          <h2
            className="
              text-4xl
              font-light
              tracking-[0.25em]
              leading-relaxed
            "
          >
            AKESO MEDİKAL
            <br />
            TEKNOLOJİ SAN. TİC. LTD. ŞTİ.
          </h2>




          <div
            className="
              mt-10
              space-y-8
              text-white/70
              tracking-wide
            "
          >



            {/* ADRES */}

            <div>

              <h3
                className="
                  text-white
                  text-sm
                  uppercase
                  tracking-[0.3em]
                  mb-3
                "
              >
                Adres
              </h3>


              <p>
                Çamlıca OSB. Mahallesi
                <br />
                1762. Sokak No:9
                <br />
                Bucak / BURDUR
              </p>

            </div>




            {/* KONUM */}

            <div>

              <h3
                className="
                  text-white
                  text-sm
                  uppercase
                  tracking-[0.3em]
                  mb-3
                "
              >
                Konum
              </h3>


              <p>
                Çamlıca Organize Sanayi Bölgesi
                <br />
                Bucak / BURDUR
              </p>

            </div>




            {/* TELEFON */}

            <div>

              <h3
                className="
                  text-white
                  text-sm
                  uppercase
                  tracking-[0.3em]
                  mb-3
                "
              >
                Telefon
              </h3>


              <p>
                +90 (248) 502 00 63
                <br />
                +90 (546) 515 70 15
              </p>

            </div>




            {/* MAIL */}

            <div>

              <h3
                className="
                  text-white
                  text-sm
                  uppercase
                  tracking-[0.3em]
                  mb-3
                "
              >
                E-Posta
              </h3>


              <p>
                info@akesomotors.com
              </p>

            </div>



          </div>


        </motion.div>


      </div>


    </section>
  );
}