"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 overflow-hidden">

      <div className="max-w-7xl mx-auto px-8 py-20">


        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <div
            className="
              grid
              gap-14
              text-center
              md:grid-cols-3
            "
          >


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
                  text-white/60
                  hover:text-white
                  transition
                "
              >
                Facebook
              </a>


            </div>





            {/* YASAL */}

            <div>

              <h3
                className="
                  text-white
                  text-xl
                  tracking-[0.25em]
                  mb-6
                "
              >
                YASAL
              </h3>


              <Link
                href="/kvkk"
                className="
                  block
                  text-white/60
                  hover:text-white
                  transition
                  mb-4
                "
              >
                KVKK
              </Link>


              <Link
                href="/gizlilik"
                className="
                  block
                  text-white/60
                  hover:text-white
                  transition
                "
              >
                Gizlilik Politikası
              </Link>


            </div>


          </div>


        </motion.div>




        {/* AKESO LOGO */}

        <motion.div
          initial={{
            opacity:0,
            y:70,
          }}
          whileInView={{
            opacity:1,
            y:0,
          }}
          viewport={{
            once:true,
          }}
          transition={{
            duration:1,
          }}
          className="
            mt-24
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
              ml-[0.45em]
            "
          >
            AKESO
          </h1>


          <div
            className="
              mt-14
              h-px
              w-full
              bg-white/10
            "
          />


          <p
            className="
              mt-10
              text-white/35
              text-sm
            "
          >
            © 2026 AKESO MEDİKAL TEKNOLOJİ SAN. TİC. LTD. ŞTİ.
            <br />
            Tüm Hakları Saklıdır.
          </p>


        </motion.div>


      </div>

    </footer>
  );
}