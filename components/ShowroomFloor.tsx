"use client";

export default function ShowroomFloor() {

  return (
    <div
      className="
        absolute
        inset-0
        z-[2]
        pointer-events-none
      "
    >


      {/* ZEMİN PARLAKLIĞI */}

      <div
        className="
          absolute
          bottom-[-40px]
          left-1/2
          -translate-x-1/2
          w-[900px]
          h-[180px]
          bg-white/[0.08]
          blur-[120px]
          rounded-full
        "
      />


      {/* ARAÇ ALTI YANSIMA */}

      <div
        className="
          absolute
          bottom-[120px]
          left-1/2
          -translate-x-1/2
          w-[520px]
          h-[90px]
          bg-white/[0.12]
          blur-[70px]
          rounded-full
        "
      />


      {/* KOYU SHOWROOM ZEMİNİ */}

      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-[220px]
          bg-gradient-to-t
          from-black
          via-black/80
          to-transparent
        "
      />


      {/* HAFİF MERKEZ YANSIĞI */}

      <div
        className="
          absolute
          bottom-[40px]
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[120px]
          bg-white/[0.04]
          blur-[100px]
          rounded-full
        "
      />


    </div>
  );
}