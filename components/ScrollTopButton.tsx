"use client";

export default function ScrollTopButton() {

  const goTop = () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth"

    });

  };


  return (

    <button

      onClick={goTop}

      className="
      mt-16
      mx-auto
      block
      px-8
      py-3
      rounded-full
      border
      border-white/20
      text-white/70
      hover:bg-white
      hover:text-black
      transition
      "

    >

      ↑ Yukarı Dön

    </button>

  );

}