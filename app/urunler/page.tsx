"use client";

import ProductSection from "@/components/ProductSection";

export default function UrunlerPage() {

  return (

    <main className="
    bg-black
    text-white
    ">



      {/* SHOWROOM HERO */}

      <section
        className="
        relative
        min-h-[45vh]
        flex
        items-center
        justify-center
        overflow-hidden
        "
      >



        <div
          className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_45%)]
          "
        />



        <div
          className="
          relative
          z-10
          text-center
          px-6
          "
        >



          <p
            className="
            text-sm
            tracking-[0.6em]
            text-white/40
            uppercase
            mb-8
            "
          >
            AKESO MOTORS
          </p>





          <h1
            className="
            text-5xl
            md:text-8xl
            font-semibold
            tracking-tight
            "
          >
            Elektrikli
            <br/>
            Mobilite Serisi
          </h1>





          <p
            className="
            mt-8
            text-white/50
            text-lg
            max-w-xl
            mx-auto
            leading-relaxed
            "
          >
            Şehir içi kullanım ve profesyonel ihtiyaçlar için
            geliştirilen yeni nesil elektrikli araç çözümleri.
          </p>



        </div>


      </section>







      {/* CITY BEE */}

      <ProductSection

        name="City Bee"

        slug="city-bee"

        description="
        Çok yakında.
        "

        image="/images/hero-cover.png"

        whatsappMessage="Merhaba, City Bee modeli hakkında bilgi almak istiyorum."

        specs={{

          motorPower:"ÇOK YAKINDA",
          battery:"ÇOK YAKINDA",
          overallDim:"ÇOK YAKINDA",
          tireSize:"ÇOK YAKINDA",
          maxLoad:"ÇOK YAKINDA",
          maxSpeed:"ÇOK YAKINDA",
          controller:"ÇOK YAKINDA",
          light:"ÇOK YAKINDA",
          frontFork:"ÇOK YAKINDA",
          chargingTime:"ÇOK YAKINDA",
          gradeAbility:"ÇOK YAKINDA",
          brake:"ÇOK YAKINDA",
          frontRearWheel:"ÇOK YAKINDA",
          maxRange:"ÇOK YAKINDA"

        }}

      />
{/* RUBY */}

<ProductSection

  name="Ruby"

  slug="ruby"

  description="
  Çok yakında.
  "

  image="/images/products/toro/rubyposter.png"

  reverse

  whatsappMessage="Merhaba, Ruby modeli hakkında bilgi almak istiyorum."

  specs={{

    motorPower:"ÇOK YAKINDA",
    battery:"ÇOK YAKINDA",
    overallDim:"ÇOK YAKINDA",
    tireSize:"ÇOK YAKINDA",
    maxLoad:"ÇOK YAKINDA",
    maxSpeed:"ÇOK YAKINDA",
    controller:"ÇOK YAKINDA",
    light:"ÇOK YAKINDA",
    frontFork:"ÇOK YAKINDA",
    chargingTime:"ÇOK YAKINDA",
    gradeAbility:"ÇOK YAKINDA",
    brake:"ÇOK YAKINDA",
    frontRearWheel:"ÇOK YAKINDA",
    maxRange:"ÇOK YAKINDA"

  }}

 />







      {/* TORO */}

      <ProductSection

        name="Toro"

        slug="toro"

        description="
        Güçlü yapısı, modern tasarımı ve yüksek performansıyla
        farklı kullanım ihtiyaçlarına yönelik yeni nesil elektrikli dört tekerlekli araç.
        "

        image="/images/products/toro/toroposter.png"

        reverse

        whatsappMessage="Merhaba, Toro modeli hakkında detaylı bilgi almak istiyorum."

        specs={{

          motorPower:"72V 3000W Elektrikli Motor",
          battery:"72V 105AH LFP Lityum Batarya",
          overallDim:"3150 × 1250 × 1400 mm",
          tireSize:"Ön 4.00-10 / Arka 4.00-12",
          maxLoad:"960 KG",
          maxSpeed:"55-60 KM/H",
          controller:"60 Tüp Kontrol Ünitesi",
          light:"LED Aydınlatma",
          frontFork:"Hidrolik Ön Sistem",
          chargingTime:"6-8 Saat",
          gradeAbility:"%12 Eğim",
          brake:"Ön Disk Fren / Arka Disk Fren",
          frontRearWheel:"Demir Jant",
          maxRange:"80-90 KM"

        }}

      />







      {/* RABA */}

      <ProductSection

        name="Raba"

        slug="raba"

        description="
        Şehir içi ve ticari kullanım için geliştirilen,
        güçlü ve ekonomik elektrikli taşıma çözümü.
        "

        image="/images/products/toro/rabaposter.png"

        whatsappMessage="Merhaba, Raba modeli hakkında detaylı bilgi almak istiyorum."

        specs={{

          motorPower:"72V 1500W Elektrikli Motor",
          battery:"72V 65AH Jel Batarya",
          overallDim:"3150 × 1200 × 1400 mm",
          tireSize:"Ön 3.75-12 / Arka 4.00-12",
          maxLoad:"700 KG",
          maxSpeed:"45 KM/H",
          controller:"24 Tüp Kontrol Ünitesi",
          light:"LED Aydınlatma",
          frontFork:"Hidrolik Ön Sistem",
          chargingTime:"8 Saat",
          gradeAbility:"%13 Eğim",
          brake:"Disk Fren",
          frontRearWheel:"Demir Jant",
          maxRange:"50-60 KM"

        }}

      />







      {/* L500 */}

      <ProductSection

        name="L500"

        slug="l500"

        description="
        Profesyonel kullanım için tasarlanan,
        yüksek taşıma kapasitesine sahip elektrikli ticari araç.
        "

        image="/images/products/toro/L500.png"

        reverse

        whatsappMessage="Merhaba, L500 modeli hakkında detaylı bilgi almak istiyorum."

        specs={{

          motorPower:"72V 1500W Elektrikli Motor",
          battery:"72V 65AH Jel Batarya",
          overallDim:"3150 × 1200 × 1400 mm",
          tireSize:"4.50-12",
          maxLoad:"700 KG",
          maxSpeed:"40 KM/H",
          controller:"24 Tüp Kontrol Ünitesi",
          light:"LED Aydınlatma",
          frontFork:"Hidrolik Ön Sistem",
          chargingTime:"8 Saat",
          gradeAbility:"%13 Eğim",
          brake:"Disk Fren",
          frontRearWheel:"Demir Jant",
          maxRange:"70 KM"

        }}

      />







      {/* YAGI PRO */}

      <ProductSection

        name="Yagi Pro"

        slug="yagi-pro"

        description="
        Profesyonel mobilite ihtiyaçları için geliştirilen,
        dayanıklı ve verimli elektrikli çözüm.
        "

        image="/images/products/toro/yagiproposter.png"

        whatsappMessage="Merhaba, Yagi Pro modeli hakkında detaylı bilgi almak istiyorum."

        specs={{

          motorPower:"72V 1300W Elektrikli Motor",
          battery:"72V 41AH Graphene Batarya",
          overallDim:"2750 × 900 × 1110 mm",
          tireSize:"3.00-12",
          maxLoad:"560 KG",
          maxSpeed:"40 KM/H",
          controller:"18 Tüp Kontrol Ünitesi",
          light:"LED Aydınlatma",
          frontFork:"Hidrolik Ön Sistem",
          chargingTime:"6-8 Saat",
          gradeAbility:"%13 Eğim",
          brake:"Disk Fren",
          frontRearWheel:"Alüminyum Jant",
          maxRange:"60-70 KM"

        }}

      />


    </main>

  );

}