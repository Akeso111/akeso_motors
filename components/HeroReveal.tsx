import Image from "next/image";
import Curtains from "./VehicleCurtain";
import Spotlight from "./Spotlight";
import ScrollIndicator from "./ScrollIndicator";

export default function HeroReveal() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#050505]">

      {/* Arka plan */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111] via-black to-[#050505]" />

      {/* Hareketli spot (şimdilik statik) */}
      <Spotlight />

      {/* Araç */}
      <div className="absolute inset-0 flex items-end justify-center z-10">

        <Image
          src="/orion.png"
          alt="Project Orion"
          width={1100}
          height={700}
          priority
          className="object-contain"
        />

      </div>

      {/* Siyah araç örtüsü */}
      <Curtains />

      {/* Yazılar */}
      <div className="relative z-30 flex h-full flex-col items-center justify-end pb-28">

        <p className="uppercase tracking-[0.45em] text-white/60">
          COMING SOON
        </p>

        <h1 className="mt-5 text-6xl md:text-8xl font-black tracking-[0.08em]">
          PROJECT ORION
        </h1>

        <p className="mt-6 text-white/50">
          The Future is Waiting
        </p>

      </div>

      <ScrollIndicator />

    </section>
  );
}