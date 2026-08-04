"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";


export default function WhatsAppButton() {

  const pathname = usePathname();

  const phoneNumber = "905465157015";


  let message =
    "Merhaba, Akeso Motors hakkında bilgi almak için iletişime geçtim.";


  if (pathname === "/urunler") {

    message =
      "Merhaba, Akeso Motors ürünleri hakkında bilgi almak için iletişime geçtim.";

  }


  if (pathname === "/bayiler") {

    message =
      "Merhaba, Akeso Motors bayiliği hakkında bilgi almak için iletişime geçtim.";

  }


  if (pathname === "/iletisim") {

    message =
      "Merhaba, Akeso Motors ile iletişime geçmek istiyorum.";

  }


  const whatsappUrl =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;





  return (

    <motion.a

      href={whatsappUrl}

      target="_blank"

      rel="noopener noreferrer"

      aria-label="WhatsApp ile iletişime geç"


      animate={{

        scale:[1,1.05,1]

      }}


      transition={{

        duration:3,

        repeat:Infinity,

        ease:"easeInOut"

      }}


      whileHover={{

        scale:1.15

      }}


      className="
      fixed
      bottom-6
      right-6
      z-[100]
      w-16
      h-16
      rounded-full
      bg-[#25D366]
      flex
      items-center
      justify-center
      shadow-[0_0_45px_rgba(37,211,102,0.45)]
      transition
      "

    >



      <div

        className="
        absolute
        inset-0
        rounded-full
        bg-[#25D366]
        blur-xl
        opacity-40
        "

      />





      <svg

        xmlns="http://www.w3.org/2000/svg"

        viewBox="0 0 24 24"

        fill="white"

        className="
        relative
        z-10
        w-8
        h-8
        "

      >

        <path d="M20.52 3.48A11.78 11.78 0 0 0 12.05 0C5.55 0 .27 5.28.27 11.78c0 2.08.54 4.11 1.57 5.9L.17 24l6.46-1.69a11.74 11.74 0 0 0 5.42 1.31h.01c6.49 0 11.77-5.28 11.77-11.78 0-3.14-1.22-6.09-3.31-8.36ZM12.06 21.55h-.01a9.78 9.78 0 0 1-4.99-1.36l-.36-.21-3.83 1 1.02-3.73-.23-.38a9.78 9.78 0 0 1-1.5-5.08c0-5.39 4.39-9.78 9.79-9.78 2.61 0 5.07 1.02 6.91 2.86a9.75 9.75 0 0 1 2.87 6.93c0 5.39-4.39 9.77-9.77 9.77Zm5.37-7.33c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.15-1.21-.45-2.31-1.43-.85-.76-1.43-1.7-1.6-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.5.07-.76.36-.26.29-.99.97-.99 2.36s1.01 2.74 1.15 2.93c.14.19 1.99 3.04 4.82 4.26.67.29 1.2.46 1.61.59.68.22 1.3.19 1.79.12.55-.08 1.7-.7 1.94-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34Z"/>

      </svg>



    </motion.a>


  );

}