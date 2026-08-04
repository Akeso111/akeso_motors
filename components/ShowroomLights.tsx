"use client";

export default function ShowroomLights() {

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">


      {/* ÜST SOFTBOX IŞIĞI */}

      <div
        className="
          absolute
          top-[-120px]
          left-1/2
          -translate-x-1/2
          w-[520px]
          h-[420px]
          bg-white/[0.08]
          blur-[120px]
          rounded-full
        "
      />


      {/* SOL ALT SPOT HÜZMESİ */}

      <div
        className="
          absolute
          bottom-[-180px]
          left-[-140px]
          w-[520px]
          h-[600px]
          rotate-[28deg]
          bg-white/[0.07]
          blur-[110px]
        "
      />


      {/* SAĞ ALT SPOT HÜZMESİ */}

      <div
        className="
          absolute
          bottom-[-180px]
          right-[-140px]
          w-[520px]
          h-[600px]
          rotate-[-28deg]
          bg-white/[0.07]
          blur-[110px]
        "
      />


      {/* ARAÇ ALT YANSIMASI */}

      <div
        className="
          absolute
          bottom-[80px]
          left-1/2
          -translate-x-1/2
          w-[650px]
          h-[120px]
          bg-white/[0.06]
          blur-[100px]
          rounded-full
        "
      />


      {/* MERKEZ HAVASI */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(
            ellipse_at_center,
            rgba(255,255,255,0.05),
            transparent_65%
          )]
        "
      />


    </div>
  );
}