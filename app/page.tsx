"use client";

import { useState } from "react";

import Hero from "@/components/Hero";
import VehicleCurtain from "@/components/VehicleCurtain";
import Spotlight from "@/components/Spotlight";
import SpotLights from "@/components/SpotLights";
import ShowroomLights from "@/components/ShowroomLights";
import DynamicShowroomLights from "@/components/DynamicShowroomLights";
import VehicleLightSweep from "@/components/VehicleLightSweep";
import VehicleAccentLight from "@/components/VehicleAccentLight";
import ShowroomFloor from "@/components/ShowroomFloor";
import ComingSoon from "@/components/ComingSoon";
import LogoReveal from "@/components/LogoReveal";
import HomeProducts from "@/components/HomeProducts";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  const [openAmount, setOpenAmount] = useState(0);

  return (
    <main
      className="
      bg-black
      text-white
      "
    >
      {/* AÇILIŞ SHOWROOM */}

      <section
        className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        "
      >
        {/* ARAÇ */}

        <Hero />

        {/* ZEMİN */}

        <ShowroomFloor />

        {/* ARAÇ IŞIK TARAMASI */}

        <VehicleLightSweep />

        {/* GÖVDE VURGU */}

        <VehicleAccentLight />

        {/* SHOWROOM ATMOSFER */}

        <ShowroomLights />

        {/* KÖŞE IŞIKLARI */}

        <SpotLights />

        {/* PERDE IŞIKLARI */}

        <DynamicShowroomLights
          openAmount={openAmount}
        />

        {/* PERDE */}

        <VehicleCurtain
          onOpenChange={setOpenAmount}
        />

        {/* LOGO */}

        <LogoReveal />

        {openAmount > 70 && (
          <ComingSoon />
        )}

        {/* SPOT */}

        <Spotlight />
      </section>

      {/* ÜRÜNLERE GEÇİŞ */}

      <section
        className="
        relative
        bg-black
        pt-32
        "
      >
        <div
          className="
          absolute
          top-0
          left-0
          right-0
          h-40
          bg-gradient-to-b
          from-black
          to-transparent
          pointer-events-none
          "
        />

        <div
          className="
          relative
          z-10
          text-center
          px-6
          mb-16
          "
        >
          <p
            className="
            text-xs
            tracking-[0.6em]
            text-white/30
            uppercase
            mb-6
            "
          >
            AKESO MOTORS
          </p>

          <h2
            className="
            text-4xl
            md:text-7xl
            font-semibold
            tracking-tight
            "
          >
            Geleceğin
            <br />
            Elektrikli Serisi
          </h2>

          <p
            className="
            mt-6
            text-white/50
            max-w-xl
            mx-auto
            leading-relaxed
            "
          >
            Şehir içi kullanım ve profesyonel çözümler için
            tasarlanan yeni nesil elektrikli araçlarımız.
          </p>
        </div>

        <HomeProducts />
      </section>

      {/* WHATSAPP */}

      <WhatsAppButton />
    </main>
  );
}