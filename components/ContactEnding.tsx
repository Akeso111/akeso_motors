"use client";

import { motion } from "framer-motion";

type ContactEndingProps = {
  showAddress?: boolean;
};

export default function ContactEnding({
  showAddress = false,
}: ContactEndingProps) {
  return (
    <section className="bg-black border-t border-white/10 overflow-hidden">

      <div className="max-w-7xl mx-auto px-8 py-24">


        {/* BİLGİLER */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div
            className={`
              grid
              gap-14
              text-center
              ${
                showAddress
                  ? "md:grid-cols-3"
                  : "md:grid-cols-2"
              }
            `}
          >


            {/* ADRES */}

            {showAddress && (

              <div>

                <h3
                  className="
                    text-white
                    text-xl
                    tracking-[0.25em]
                    mb-6
                  "
                >
                  ADRES
                </h3>


                <p
                  className="
                    text-white/60
                    leading-8
                  "
                >
                  Çamlıca OSB. Mahallesi
                  <br />
                  1762. Sokak No:9
                  <br />
                  Bucak / BURDUR
                </p>

              </div>

            )}



            {/* İLETİŞİM */}

            <div>

              <h3
                className="
                  text-white
                  text-xl
                  tracking-[0.25em]
                  mb-6
                "
              >
                İLETİŞİM
              </h3>


              <a
                href="tel:+902485020063"
                className="
                  block
                  text-center
                  text-white/60
                  hover:text-white
                  transition
                  mb-4
                "
              >
                +90 (248) 502 00 63
              </a>


              <a
                href="tel:+905465157015"
                className="
                  block
                  text-center
                  text-white/60
                  hover:text-white
                  transition
                  mb-4
                "
              >
                +90 (546) 515 70 15
              </a>


              <a
                href="mailto:info@akesomotors.com"
                className="
                  block
                  text-center
                  text-white/60
                  hover:text-white
                  transition
                "
              >
                info@akesomotors.com
              </a>


            </div>




            {/* SOSYAL MEDYA */}

            <div>

              <h3
                className="
                  text-white
                  text-xl
                  tracking-[0.25em]
                  mb-6
                "
              >
                SOSYAL MEDYA
              </h3>


              <a
                href="https://www.instagram.com/akesomotors/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  block
                  text-center
                  text-white/60
                  hover:text-white
                  transition
                  mb-4
                "
              >
                Instagram
              </a>


              <a
                href="https://www.facebook.com/p/Akeso-Motors-61551617619010/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  block
                  text-center
                  text-white/60
                  hover:text-white
                  transition
                "
              >
                Facebook
              </a>


            </div>


          </div>


        </motion.div>





        {/* AKESO */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="
            mt-28
            flex
            flex-col
            items-center
            text-center
          "
        >


          <h1
            className="
              text-white
              text-6xl
              md:text-[9rem]
              font-extralight
              tracking-[0.45em]
              select-none
              ml-[0.45em]
            "
          >
            AKESO
          </h1>


          <p
            className="
              mt-6
              text-white/45
              tracking-[0.4em]
            "
          >
            
          </p>


          <div
            className="
              mt-14
              mb-10
              h-px
              w-full
              bg-white/10
            "
          />


          <p
            className="
              text-white/35
              text-sm
              leading-7
            "
          >
            © 2026 AKESO MEDİKAL TEKNOLOJİ SAN. TİC. LTD. ŞTİ.
            <br />
            Tüm Hakları Saklıdır.
          </p>


        </motion.div>


      </div>


    </section>
  );
}