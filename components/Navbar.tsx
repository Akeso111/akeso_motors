"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";


export default function Navbar() {

  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);



  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 40);

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };


  }, []);




  return (
    <header

      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-500
        backdrop-blur-2xl

        ${
          scrolled
          ?
          `
          border-b
          border-white/20
          bg-black/70
          shadow-[0_10px_40px_rgba(0,0,0,0.5)]
          `
          :
          `
          border-b
          border-white/10
          bg-black/20
          `
        }

      `}

    >



      <div

        className="
          max-w-7xl
          mx-auto
          flex
          items-center
          justify-between
          px-6
          md:px-8
          py-5
        "

      >



        {/* LOGO */}


        <Link

          href="/"

          onClick={() => setMenuOpen(false)}

          className="
            group
            flex
            items-center
            gap-3
          "

        >


          <Image

            src="/logoo.png"

            alt="Akeso Motors"

            width={44}

            height={44}

            priority

            className="
              transition-all
              duration-500
              group-hover:scale-110
            "

          />



          <span

            className="
              text-white
              text-2xl
              font-semibold
              tracking-[0.25em]
              transition-all
              duration-500
              group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]
            "

          >

            AKESO

          </span>


        </Link>







        {/* MASAÜSTÜ MENÜ */}



        <nav

          className="
            hidden
            lg:flex
            items-center
            gap-10
          "

        >


          <NavItem
            href="/"
            active={pathname === "/"}
          >
            Ana Sayfa
          </NavItem>



          <NavItem
            href="/urunler"
            active={pathname.startsWith("/urunler")}
          >
            Ürünler
          </NavItem>



          <NavItem
            href="/iletisim"
            active={pathname.startsWith("/iletisim")}
          >
            İletişim
          </NavItem>



          <NavItem
            href="/bayiler"
            active={pathname.startsWith("/bayiler")}
          >
            Bayiler
          </NavItem>


        </nav>







        {/* MOBİL BUTON */}



        <button

          type="button"

          onClick={() => setMenuOpen(!menuOpen)}

          aria-label="Menüyü aç"

          aria-expanded={menuOpen}

          className="
            lg:hidden
            relative
            z-[60]
            w-11
            h-11
            flex
            flex-col
            items-center
            justify-center
            gap-1.5
            rounded-full
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
          "

        >


          <span

            className={`

              block

              w-5

              h-px

              bg-white

              transition-all

              duration-300

              ${menuOpen ? "rotate-45 translate-y-[4px]" : ""}

            `}

          />



          <span

            className={`

              block

              w-5

              h-px

              bg-white

              transition-all

              duration-300

              ${menuOpen ? "opacity-0" : "opacity-100"}

            `}

          />



          <span

            className={`

              block

              w-5

              h-px

              bg-white

              transition-all

              duration-300

              ${menuOpen ? "-rotate-45 -translate-y-[4px]" : ""}

            `}

          />


        </button>



      </div>








      {/* MOBİL MENÜ */}



      <div

        className={`

          lg:hidden

          absolute

          top-full

          left-0

          w-full

          border-t

          border-white/10

          bg-black/90

          backdrop-blur-2xl

          transition-all

          duration-300


          ${
            menuOpen

            ?

            "opacity-100 translate-y-0 pointer-events-auto"

            :

            "opacity-0 -translate-y-3 pointer-events-none"

          }


        `}

      >


        <nav

          className="
          flex
          flex-col
          px-6
          py-6
          gap-2
          "

        >



          <MobileNavItem
            href="/"
            active={pathname === "/"}
            onClick={() => setMenuOpen(false)}
          >
            Ana Sayfa
          </MobileNavItem>



          <MobileNavItem
            href="/urunler"
            active={pathname.startsWith("/urunler")}
            onClick={() => setMenuOpen(false)}
          >
            Ürünler
          </MobileNavItem>



          <MobileNavItem
            href="/iletisim"
            active={pathname.startsWith("/iletisim")}
            onClick={() => setMenuOpen(false)}
          >
            İletişim
          </MobileNavItem>



          <MobileNavItem
            href="/bayiler"
            active={pathname.startsWith("/bayiler")}
            onClick={() => setMenuOpen(false)}
          >
            Bayiler
          </MobileNavItem>



        </nav>


      </div>



    </header>
  );

}







function NavItem({

  href,

  children,

  active,

}:{

  href:string;

  children:React.ReactNode;

  active:boolean;

}) {


  return (

    <Link

      href={href}

      className={`

        relative

        transition-all

        duration-300


        ${
          active
          ?
          "text-white"
          :
          "text-white/50 hover:text-white"
        }


        after:absolute

        after:left-0

        after:-bottom-2

        after:h-px

        after:bg-white

        after:transition-all

        after:duration-300


        ${
          active
          ?
          "after:w-full"
          :
          "after:w-0 hover:after:w-full"
        }

      `}

    >

      {children}

    </Link>

  );

}







function MobileNavItem({

  href,

  children,

  active,

  onClick,

}:{

  href:string;

  children:React.ReactNode;

  active:boolean;

  onClick:()=>void;

}) {


  return (

    <Link

      href={href}

      onClick={onClick}

      className={`


        w-full

        px-4

        py-4

        rounded-2xl


        text-base


        transition-all

        duration-300



        ${
          active

          ?

          "bg-white/10 text-white"

          :

          "text-white/60 hover:bg-white/5 hover:text-white"

        }


      `}

    >

      {children}

    </Link>

  );

}