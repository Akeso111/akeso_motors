"use client";

import { useState } from "react";

const bayiler = [
  {
    sehir: "Sinanpaşa / Afyonkarahisar",
    isim: "MEHMET MÜJDE GRUP",
    telefon: "+90 532 613 53 60",
    adres:
      "BAHÇELİEVLER MAH. KUMALAR CAD. NO:6 İÇ KAPI NO:1 TAŞOLUK BELDESİ",
  },
  {
    sehir: "Sinanpaşa / Afyonkarahisar",
    isim: "SAĞ MOTORS",
    telefon: "+90 532 613 53 60",
    adres:
      "Cumhuriyet Mah. Cumhuriyet Cad. No: 9/A Sinanpaşa / Afyonkarahisar",
  },
  {
    sehir: "Çobanlar / Afyonkarahisar",
    isim: "ÖZER MOBİLYA MOTOR",
    telefon: "+90 542 485 31 37",
    adres: "IŞIK M ÖZE İD. İŞ MERKEZİ NO:1",
  },
  {
    sehir: "Aksu / Antalya",
    isim: "AYTAR MOTOR",
    telefon: "+90 534 828 10 40",
    adres: "FATİH MAH. ISPARTDA CAD. NO:103",
  },
  {
    sehir: "Serik / Antalya",
    isim: "KINDIROĞLU MOTOR",
    telefon: "+90 545 483 60 02",
    adres: "MERKEZ MAH. 2100 SK. NO: 11",
  },
  {
    sehir: "Elmalı / Antalya",
    isim: "SALİH AYDIN MOTOR",
    telefon: "+90 552 476 07 07",
    adres:
      "YENİ MAH. ELMALILI MUHAMMED HAMDİ YAZIR BLV. NO:118/1",
  },
  {
    sehir: "Merkez / Burdur",
    isim: "EKOL MOTOR",
    telefon: "+90 545 141 00 15",
    adres:
      "BAĞLAR MAH. İBRAHİM ZEKİ BURDURLU CAD. PALMİYE SİTESİ A BLOK 28/29",
  },
  {
    sehir: "Çavdır / Burdur",
    isim: "UĞUR MOBİLYA",
    telefon: "+90 542 652 40 91",
    adres: "ÇINAR MAH.FATİH CD. NO:39",
  },
  {
    sehir: "Yeşilova / Burdur",
    isim: "KAPAN MOTOR",
    telefon: "+90 541 382 60 21",
    adres: "MERKEZ MAH. BURDUR C.16 İÇ KAPI NO:0",
  },
  {
    sehir: "Yıldırım / Bursa",
    isim: "ÇAĞDAŞ ARSLAN MOTOR A.Ş.",
    telefon: "+90 532 383 38 60",
    adres: "BAHAR MAH. ULUBATLI HASAN BLV. 57/1",
  },
  {
    sehir: "Kale / Denizli",
    isim: "ERDEM MOTOR",
    telefon: "+90 538 497 52 54",
    adres: "CUMHURİYET MAH. İSTİKLAL BULV. NO:36/1",
  },
  {
    sehir: "Acıpayam / Denizli",
    isim: "ALM MOTOR",
    telefon: "+90 533 581 75 30",
    adres: "YENİ MAH. SANAYİ BLV. NO: 59 C",
  },
  {
    sehir: "ÇARDAK / Denizli",
    isim: "VELİ EROL",
    telefon: "+90 530 460 95 62",
    adres:
      "1- MERKEZEFENDİ MAH. 403. SOKAK NO: 3/A // 2- CUMHURİYET MAH. ADNAN MENDERES BULV. NO:154 ",
  },
  {
    sehir: "Çifteler / Eskişehir",
    isim: "ETHEMOĞLU",
    telefon: "",
    adres: "",
  },
  {
    sehir: "Gelendost / Isparta",
    isim: "GENÇLİK MOTOR İSA SARI",
    telefon: "+90 506 389 72 67",
    adres: "MUHARREM MAH. CAMİ CAD. NO: 6 A",
  },
  {
    sehir: "Karatay / Konya",
    isim:
      "GENÇ ELİBOL MOTORLU TAŞITLAR TARIM MAKİNALARI SAN. ",
    telefon: "+90 532 428 39 39",
    adres:
      "FEVZİÇAKMAK MAHALLESİ AY YILDIZ CADDESİ A-BLOK A-BLOK NO:42 AA",
  },
  {
    sehir: "Merkez / Kütahya",
    isim: "SARAÇOĞLU DTM. LTD. ŞTİ.",
    telefon: "+90 532 244 72 30",
    adres: "BALIKLI MAH. CUMHURİYET CAD. 58 B",
  },
  {
    sehir: "Yatağan / Muğla",
    isim: "ÇÖLLÜ MOTOR",
    telefon: "+90 507 410 55 12",
    adres:
      "YENİ MAH. 186 SK. M. ALP BİNASI YASAM EVLER 68 A",
  },
  {
    sehir: "Gölköy / Ordu",
    isim: "MAYSA TURIZM",
    telefon: "",
    adres: "",
  },
  {
    sehir: "Adapazarı / Sakarya",
    isim: "BIÇAKÇI MOTOR",
    telefon: "+90 531 334 08 39",
    adres: "Karaosman Mah Karaağaç Bul. No:80",
  },
    {
    sehir: "Çorlu / Tekirdağ",
    isim: "TRAKYA VOLT MOTOR",
    telefon: "+90 541 972 74 61",
    adres: "KAZIMİYE MAH. SÜRMELİ SK. NO:4",
  },
  {
    sehir: "Banaz / Uşak",
    isim: "EREN TİCARET",
    telefon: "+90 506 331 55 58",
    adres:
      "CUMHURİYET MAH. MİLLİ EGEMENLİK CAD. NO:42",
  },
];

/* TÜRKİYE 81 İL */

const iller = [
  "Adana",
  "Adıyaman",
  "Afyonkarahisar",
  "Ağrı",
  "Aksaray",
  "Amasya",
  "Ankara",
  "Antalya",
  "Ardahan",
  "Artvin",
  "Aydın",
  "Balıkesir",
  "Bartın",
  "Batman",
  "Bayburt",
  "Bilecik",
  "Bingöl",
  "Bitlis",
  "Bolu",
  "Burdur",
  "Bursa",
  "Çanakkale",
  "Çankırı",
  "Çorum",
  "Denizli",
  "Diyarbakır",
  "Düzce",
  "Edirne",
  "Elazığ",
  "Erzincan",
  "Erzurum",
  "Eskişehir",
  "Gaziantep",
  "Giresun",
  "Gümüşhane",
  "Hakkari",
  "Hatay",
  "Iğdır",
  "Isparta",
  "İstanbul",
  "İzmir",
  "Kahramanmaraş",
  "Karabük",
  "Karaman",
  "Kars",
  "Kastamonu",
  "Kayseri",
  "Kilis",
  "Kırıkkale",
  "Kırklareli",
  "Kırşehir",
  "Kocaeli",
  "Konya",
  "Kütahya",
  "Malatya",
  "Manisa",
  "Mardin",
  "Mersin",
  "Muğla",
  "Muş",
  "Nevşehir",
  "Niğde",
  "Ordu",
  "Osmaniye",
  "Rize",
  "Sakarya",
  "Samsun",
  "Siirt",
  "Sinop",
  "Sivas",
  "Şanlıurfa",
  "Şırnak",
  "Tekirdağ",
  "Tokat",
  "Trabzon",
  "Tunceli",
  "Uşak",
  "Van",
  "Yalova",
  "Yozgat",
  "Zonguldak",
];

/* İL KOORDİNATLARI */

const ilKoordinatlari: Record<string, [number, number]> = {
  Adana: [37.0, 35.3213],
  Adıyaman: [37.7648, 38.2786],
  Afyonkarahisar: [38.7507, 30.5567],
  Ağrı: [39.7191, 43.0503],
  Aksaray: [38.3687, 34.037],
  Amasya: [40.6499, 35.8353],
  Ankara: [39.9334, 32.8597],
  Antalya: [36.8969, 30.7133],
  Ardahan: [41.1105, 42.7022],
  Artvin: [41.1828, 41.8183],
  Aydın: [37.856, 27.8416],
  Balıkesir: [39.6484, 27.8826],
  Bartın: [41.6344, 32.3375],
  Batman: [37.8812, 41.1351],
  Bayburt: [40.2552, 40.2249],
  Bilecik: [40.0567, 30.0665],
  Bingöl: [38.8854, 40.498],
  Bitlis: [38.4006, 42.1095],
  Bolu: [40.735, 31.6061],
  Burdur: [37.7203, 30.29],
  Bursa: [40.195, 29.06],
  Çanakkale: [40.1553, 26.4142],
  Çankırı: [40.6013, 33.6134],
  Çorum: [40.5506, 34.9556],
  Denizli: [37.7765, 29.0864],
  Diyarbakır: [37.9144, 40.2306],
  Düzce: [40.8438, 31.1565],
  Edirne: [41.6818, 26.5623],
  Elazığ: [38.681, 39.2264],
  Erzincan: [39.75, 39.5],
  Erzurum: [39.9055, 41.2658],
  Eskişehir: [39.7767, 30.5206],
  Gaziantep: [37.0662, 37.3833],
  Giresun: [40.9128, 38.3895],
  Gümüşhane: [40.4386, 39.5086],
  Hakkari: [37.5833, 43.7333],
  Hatay: [36.2025, 36.1606],
  Iğdır: [39.9237, 44.045],
  Isparta: [37.7648, 30.5566],
  İstanbul: [41.0082, 28.9784],
  İzmir: [38.4192, 27.1287],
  Kahramanmaraş: [37.5753, 36.9228],
  Karabük: [41.2061, 32.6204],
  Karaman: [37.1811, 33.2223],
  Kars: [40.6013, 43.0975],
  Kastamonu: [41.3887, 33.7827],
  Kayseri: [38.7225, 35.4875],
  Kilis: [36.7184, 37.1212],
  Kırıkkale: [39.8468, 33.5153],
  Kırklareli: [41.7333, 27.2167],
  Kırşehir: [39.1425, 34.1709],
  Kocaeli: [40.7654, 29.9408],
  Konya: [37.8746, 32.4932],
  Kütahya: [39.4167, 29.9833],
  Malatya: [38.3552, 38.3095],
  Manisa: [38.6191, 27.4289],
  Mardin: [37.3212, 40.7245],
  Mersin: [36.8121, 34.6415],
  Muğla: [37.2153, 28.3636],
  Muş: [38.9462, 41.7539],
  Nevşehir: [38.6244, 34.7239],
  Niğde: [37.9667, 34.6833],
  Ordu: [40.9839, 37.8764],
  Osmaniye: [37.0746, 36.2478],
  Rize: [41.0201, 40.5234],
  Sakarya: [40.7731, 30.3948],
  Samsun: [41.2867, 36.33],
  Siirt: [37.9333, 41.95],
  Sinop: [42.0231, 35.1531],
  Sivas: [39.7477, 37.0179],
  Şanlıurfa: [37.1674, 38.7955],
  Şırnak: [37.4187, 42.4918],
  Tekirdağ: [40.9781, 27.511],
  Tokat: [40.3167, 36.55],
  Trabzon: [41.0015, 39.7178],
  Tunceli: [39.1079, 39.5401],
  Uşak: [38.6823, 29.4082],
  Van: [38.5012, 43.373],
  Yalova: [40.65, 29.2667],
  Yozgat: [39.8181, 34.8147],
  Zonguldak: [41.4564, 31.7987],
};

/* MESAFE HESABI */

function mesafeHesapla(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  const R = 6371;

  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;

  const c =
    2 *
    Math.atan2(
      Math.sqrt(a),
      Math.sqrt(1 - a)
    );

  return R * c;
}

/* BAYİ ŞEHRİNİ BUL */

function bayiSehir(bayi: { sehir: string }) {
  const bulunanIl = iller.find((il) =>
    bayi.sehir
      .toLocaleLowerCase("tr-TR")
      .includes(il.toLocaleLowerCase("tr-TR"))
  );

  return bulunanIl || "";
}

export default function BayilerPage() {
  const [formOpen, setFormOpen] = useState(false);

  const [form, setForm] = useState({
    isim: "",
    firma: "",
    ilIlce: "",
    markalar: "",
    teknikServis: "",
    nereden: "",
  });

  const [secilenSehir, setSecilenSehir] = useState("");

  const [aramaYapildi, setAramaYapildi] =
    useState(false);

  const [konumSonucu, setKonumSonucu] =
    useState("");

  const [yakindakiBayiler, setYakindakiBayiler] =
    useState<
      {
        bayi: (typeof bayiler)[number];
        mesafe: number;
      }[]
    >([]);

  const aktifBayiler = bayiler.filter(
    (bayi) => bayi.sehir !== ""
  );

  /* ŞEHİR SEÇ */

  const sehirSec = (sehir: string) => {
    setSecilenSehir(sehir);
    setAramaYapildi(false);
    setKonumSonucu("");
    setYakindakiBayiler([]);
  };

  /* SEÇİLEN ŞEHRE EN YAKIN BAYİLER */

  const enYakinBayileriBul = () => {
    if (!secilenSehir) return;

    const koordinat =
      ilKoordinatlari[secilenSehir];

    if (!koordinat) return;

    const [lat, lon] = koordinat;

    const sonuclar = aktifBayiler
      .map((bayi) => {
        const sehir = bayiSehir(bayi);

        const bayiKoordinat =
          ilKoordinatlari[sehir];

        if (!bayiKoordinat) {
          return null;
        }

        const mesafe = mesafeHesapla(
          lat,
          lon,
          bayiKoordinat[0],
          bayiKoordinat[1]
        );

        return {
          bayi,
          mesafe,
        };
      })
      .filter(
        (
          sonuc
        ): sonuc is {
          bayi: (typeof bayiler)[number];
          mesafe: number;
        } => sonuc !== null
      )
      .sort(
        (a, b) => a.mesafe - b.mesafe
      )
      .slice(0, 3);

    setYakindakiBayiler(sonuclar);
    setAramaYapildi(true);
  };

  /* KONUMU KULLAN */

  const konumumuBul = () => {
    if (!navigator.geolocation) {
      setKonumSonucu(
        "Tarayıcınız konum özelliğini desteklemiyor."
      );
      return;
    }

    setKonumSonucu(
      "Konumunuz bulunuyor..."
    );

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat =
          position.coords.latitude;

        const lon =
          position.coords.longitude;

        const sonuclar = aktifBayiler
          .map((bayi) => {
            const sehir = bayiSehir(bayi);

            const koordinat =
              ilKoordinatlari[sehir];

            if (!koordinat) {
              return null;
            }

            const mesafe =
              mesafeHesapla(
                lat,
                lon,
                koordinat[0],
                koordinat[1]
              );

            return {
              bayi,
              mesafe,
            };
          })
          .filter(
            (
              sonuc
            ): sonuc is {
              bayi: (typeof bayiler)[number];
              mesafe: number;
            } => sonuc !== null
          )
          .sort(
            (a, b) =>
              a.mesafe - b.mesafe
          )
          .slice(0, 3);

        setYakindakiBayiler(sonuclar);
        setAramaYapildi(true);

        setKonumSonucu(
          "Konumunuza en yakın bayiler:"
        );
      },
      () => {
        setKonumSonucu(
          "Konum izni alınamadı. Lütfen şehrinizi seçin."
        );
      }
    );
  };

  /* FORM */

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const mesaj = `
AKESO BAYİLİK BAŞVURUSU

1) İsim Soyisim:
${form.isim}

2) Firma İsmi:
${form.firma}

3) İl / İlçe:
${form.ilIlce}

4) Hangi markalarla kaç yıldır çalışıyorsunuz?
${form.markalar}

5) Teknik servisiniz var mı?
${form.teknikServis}

6) Bizi nereden gördünüz?
${form.nereden}
`;

    const whatsappNumarasi =
      "905465157015";

    const whatsappUrl =
      `https://wa.me/${whatsappNumarasi}?text=` +
      encodeURIComponent(mesaj);

    window.open(
      whatsappUrl,
      "_blank"
    );
  };

  return (
    <main
      className="
        min-h-screen
        bg-black
        text-white
        px-6
        py-32
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
        "
      >

        {/* BAŞLIK */}

        <div
          className="
            text-center
            mb-16
          "
        >
          <p
            className="
              text-white/40
              tracking-[0.5em]
              text-sm
              uppercase
            "
          >
            AKESO MOTORS
          </p>

          <h1
            className="
              text-5xl
              md:text-7xl
              font-semibold
              mt-6
              tracking-tight
            "
          >
            Yetkili Bayiler
          </h1>

          <p
            className="
              text-white/50
              max-w-xl
              mx-auto
              mt-7
              leading-7
            "
          >
            Size en yakın AKESO yetkili
            bayisini kolayca bulun.
          </p>
        </div>


        {/* BAYİ BULMA */}

        <section
          className="
            max-w-4xl
            mx-auto
            mb-24
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-7
            md:p-10
          "
        >
          <div
            className="
              text-center
              mb-10
            "
          >
            <p
              className="
                text-white/40
                text-xs
                tracking-[0.35em]
                uppercase
              "
            >
              BAYİ BUL
            </p>

            <h2
              className="
                text-2xl
                md:text-3xl
                font-semibold
                mt-4
              "
            >
              Size en yakın bayiyi bulun
            </h2>

            <p
              className="
                text-white/40
                text-sm
                mt-4
                leading-6
              "
            >
              Şehrinizi seçin veya konumunuzu
              kullanarak en yakın bayileri görün.
            </p>
          </div>


          <div
            className="
              flex
              flex-col
              md:flex-row
              gap-5
            "
          >
            <select
              value={secilenSehir}
              onChange={(e) =>
                sehirSec(e.target.value)
              }
              className="
                flex-1
                min-h-[58px]
                bg-black
                border
                border-white/10
                rounded-2xl
                px-6
                py-4
                text-white
                text-base
                outline-none
                focus:border-white/40
              "
            >
              <option value="">
                Şehrinizi seçiniz
              </option>

              {iller.map((il) => (
                <option
                  key={il}
                  value={il}
                >
                  {il}
                </option>
              ))}
            </select>


            <button
              type="button"
              onClick={
                enYakinBayileriBul
              }
              disabled={!secilenSehir}
              className="
                px-8
                min-h-[58px]
                rounded-2xl
                bg-white
                text-black
                font-medium
                whitespace-nowrap
                disabled:opacity-30
                disabled:cursor-not-allowed
                hover:bg-white/80
                transition
              "
            >
              En Yakın Bayileri Bul
            </button>
          </div>


          <button
            type="button"
            onClick={konumumuBul}
            className="
              w-full
              mt-5
              py-4
              rounded-2xl
              border
              border-white/15
              text-white/80
              hover:bg-white/10
              hover:text-white
              transition
            "
          >
            📍 Konumumu Kullan
          </button>


          {konumSonucu && (
            <p
              className="
                text-center
                text-white/50
                text-sm
                mt-6
              "
            >
              {konumSonucu}
            </p>
          )}
        </section>


        {/* YAKIN BAYİLER */}

        {aramaYapildi &&
          yakindakiBayiler.length > 0 && (
            <section
              className="
                max-w-6xl
                mx-auto
                mb-28
              "
            >
              <div
                className="
                  text-center
                  mb-12
                "
              >
                <p
                  className="
                    text-white/40
                    text-xs
                    tracking-[0.35em]
                    uppercase
                  "
                >
                  SONUÇLAR
                </p>

                <h2
                  className="
                    text-3xl
                    md:text-4xl
                    font-semibold
                    mt-4
                  "
                >
                  En Yakın Bayiler
                </h2>
              </div>


              <div
                className="
                  grid
                  md:grid-cols-3
                  gap-8
                "
              >
                {yakindakiBayiler.map(
                  ({ bayi, mesafe }, index) => (
                    <div
                      key={`${bayi.isim}-${index}`}
                      className="
                        rounded-3xl
                        border
                        border-white/10
                        p-9
                        bg-white/[0.03]
                        hover:border-white/30
                        transition
                      "
                    >

                      <div
                        className="
                          flex
                          items-center
                          justify-between
                          mb-8
                        "
                      >
                        <span
                          className="
                            text-xs
                            tracking-[0.3em]
                            uppercase
                            text-white/40
                          "
                        >
                          {index === 0
                            ? "EN YAKIN"
                            : `#${index + 1}`}
                        </span>

                        <span
                          className="
                            text-sm
                            text-white/50
                          "
                        >
                          ~{Math.round(mesafe)} km
                        </span>
                      </div>


                      <p
                        className="
                          text-xs
                          tracking-[0.3em]
                          uppercase
                          text-white/40
                          mb-4
                        "
                      >
                        {bayi.sehir}
                      </p>


                      <h3
                        className="
                          text-2xl
                          font-semibold
                          leading-snug
                          mb-7
                        "
                      >
                        {bayi.isim}
                      </h3>


                      <div
                        className="
                          space-y-5
                          text-white/60
                          leading-7
                        "
                      >
                        {bayi.telefon && (
                          <p>
                            📞 {bayi.telefon}
                          </p>
                        )}

                        <p>
                          📍{" "}
                          {bayi.adres ||
                            "Adres bilgisi yakında eklenecektir."}
                        </p>
                      </div>


                      <div
                        className="
                          flex
                          gap-3
                          mt-8
                        "
                      >
                        {bayi.telefon && (
                          <a
                            href={`tel:${bayi.telefon}`}
                            className="
                              flex-1
                              text-center
                              py-3.5
                              rounded-full
                              border
                              border-white/20
                              hover:bg-white
                              hover:text-black
                              transition
                            "
                          >
                            Ara
                          </a>
                        )}

                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            bayi.adres ||
                              bayi.sehir
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            flex-1
                            text-center
                            py-3.5
                            rounded-full
                            border
                            border-white/20
                            hover:bg-white
                            hover:text-black
                            transition
                          "
                        >
                          Yol Tarifi
                        </a>
                      </div>
                    </div>
                  )
                )}
              </div>
            </section>
          )}


        {/* BAYİMİZ OL */}

        <div
          className="
            flex
            justify-center
            mb-24
          "
        >
          <button
            type="button"
            onClick={() =>
              setFormOpen(!formOpen)
            }
            className="
              px-10
              py-4
              rounded-full
              bg-white
              text-black
              font-medium
              hover:bg-white/80
              transition
            "
          >
            {formOpen
              ? "Formu Kapat"
              : "Bayimiz Ol"}
          </button>
        </div>


        {/* BAYİLİK FORMU */}

        {formOpen && (
          <div
            className="
              max-w-3xl
              mx-auto
              mb-28
            "
          >
            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
                p-8
                md:p-12
              "
            >
              <p
                className="
                  text-white/40
                  text-sm
                  tracking-[0.3em]
                  uppercase
                "
              >
                AKESO MOTORS
              </p>

              <h2
                className="
                  text-3xl
                  md:text-4xl
                  font-semibold
                  mt-5
                "
              >
                Bayimiz Olun
              </h2>

              <p
                className="
                  text-white/50
                  mt-5
                  mb-10
                  leading-7
                "
              >
                Bayilik başvurusu için aşağıdaki
                bilgileri eksiksiz doldurunuz.
              </p>


              <form
                onSubmit={handleSubmit}
                className="space-y-8"
              >

                {/* İSİM */}

                <div>
                  <label
                    className="
                      block
                      text-sm
                      text-white/60
                      mb-3
                    "
                  >
                    1) İsim Soyisim
                  </label>

                  <input
                    required
                    name="isim"
                    value={form.isim}
                    onChange={handleChange}
                    placeholder="İsim Soyisim"
                    className="
                      w-full
                      bg-black/40
                      border
                      border-white/10
                      rounded-2xl
                      px-5
                      py-4
                      outline-none
                      focus:border-white/40
                    "
                  />
                </div>


                {/* FİRMA */}

                <div>
                  <label
                    className="
                      block
                      text-sm
                      text-white/60
                      mb-3
                    "
                  >
                    2) Firma İsmi
                  </label>

                  <input
                    required
                    name="firma"
                    value={form.firma}
                    onChange={handleChange}
                    placeholder="Firma İsmi"
                    className="
                      w-full
                      bg-black/40
                      border
                      border-white/10
                      rounded-2xl
                      px-5
                      py-4
                      outline-none
                      focus:border-white/40
                    "
                  />
                </div>


                {/* İL İLÇE */}

                <div>
                  <label
                    className="
                      block
                      text-sm
                      text-white/60
                      mb-3
                    "
                  >
                    3) İl / İlçe nedir?
                  </label>

                  <input
                    required
                    name="ilIlce"
                    value={form.ilIlce}
                    onChange={handleChange}
                    placeholder="Örn: Antalya / Muratpaşa"
                    className="
                      w-full
                      bg-black/40
                      border
                      border-white/10
                      rounded-2xl
                      px-5
                      py-4
                      outline-none
                      focus:border-white/40
                    "
                  />
                </div>


                {/* MARKALAR */}

                <div>
                  <label
                    className="
                      block
                      text-sm
                      text-white/60
                      mb-3
                      leading-6
                    "
                  >
                    4) Hangi markalarla kaç yıldır çalışıyorsunuz?
                  </label>

                  <textarea
                    required
                    name="markalar"
                    value={form.markalar}
                    onChange={handleChange}
                    placeholder="Markaları ve kaç yıldır çalıştığınızı yazınız."
                    rows={5}
                    className="
                      w-full
                      bg-black/40
                      border
                      border-white/10
                      rounded-2xl
                      px-5
                      py-4
                      outline-none
                      focus:border-white/40
                      resize-none
                      leading-7
                    "
                  />
                </div>


                {/* TEKNİK SERVİS */}

                <div>
                  <label
                    className="
                      block
                      text-sm
                      text-white/60
                      mb-4
                    "
                  >
                    5) Teknik servisiniz var mı?
                  </label>

                  <div
                    className="
                      grid
                      grid-cols-2
                      gap-4
                    "
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setForm({
                          ...form,
                          teknikServis: "Evet",
                        })
                      }
                      className={`
                        py-4
                        rounded-2xl
                        border
                        transition
                        ${
                          form.teknikServis ===
                          "Evet"
                            ? "bg-white text-black border-white"
                            : "bg-black/40 border-white/10 hover:border-white/30"
                        }
                      `}
                    >
                      Evet
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setForm({
                          ...form,
                          teknikServis: "Hayır",
                        })
                      }
                      className={`
                        py-4
                        rounded-2xl
                        border
                        transition
                        ${
                          form.teknikServis ===
                          "Hayır"
                            ? "bg-white text-black border-white"
                            : "bg-black/40 border-white/10 hover:border-white/30"
                        }
                      `}
                    >
                      Hayır
                    </button>
                  </div>
                </div>


                {/* NEREDEN */}

                <div>
                  <label
                    className="
                      block
                      text-sm
                      text-white/60
                      mb-3
                    "
                  >
                    6) Bizi nereden gördünüz?
                  </label>

                  <input
                    required
                    name="nereden"
                    value={form.nereden}
                    onChange={handleChange}
                    placeholder="Instagram, Google, Tavsiye vb."
                    className="
                      w-full
                      bg-black/40
                      border
                      border-white/10
                      rounded-2xl
                      px-5
                      py-4
                      outline-none
                      focus:border-white/40
                    "
                  />
                </div>


                <button
                  type="submit"
                  disabled={!form.teknikServis}
                  className="
                    w-full
                    py-4
                    rounded-full
                    bg-white
                    text-black
                    font-medium
                    hover:bg-white/80
                    disabled:opacity-30
                    disabled:cursor-not-allowed
                    transition
                  "
                >
                  WhatsApp'tan Gönder
                </button>

              </form>
            </div>
          </div>
        )}


        {/* TÜM BAYİLER */}

        <div
          className="
            text-center
            mb-12
          "
        >
          <p
            className="
              text-white/40
              text-xs
              tracking-[0.35em]
              uppercase
            "
          >
            AKESO AĞI
          </p>

          <h2
            className="
              text-3xl
              md:text-4xl
              font-semibold
              mt-4
            "
          >
            Tüm Yetkili Bayiler
          </h2>

          <p
            className="
              text-white/40
              text-sm
              mt-4
            "
          >
            Türkiye genelindeki yetkili
            AKESO bayilerimiz.
          </p>
        </div>


        <div
          className="
            grid
            md:grid-cols-3
            gap-8
          "
        >
          {aktifBayiler.map(
            (bayi, index) => (
              <div
                key={index}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  p-9
                  bg-white/[0.03]
                  hover:border-white/30
                  transition
                  duration-500
                "
              >

                <p
                  className="
                    text-xs
                    tracking-[0.4em]
                    uppercase
                    text-white/40
                    mb-5
                  "
                >
                  {bayi.sehir}
                </p>


                <h2
                  className="
                    text-2xl
                    font-semibold
                    leading-snug
                    mb-7
                  "
                >
                  {bayi.isim}
                </h2>


                <div
                  className="
                    space-y-5
                    text-white/60
                    leading-7
                  "
                >
                  <p>
                    📞{" "}
                    {bayi.telefon ||
                      "Telefon bilgisi yakında eklenecektir."}
                  </p>

                  <p>
                    📍{" "}
                    {bayi.adres ||
                      "Adres bilgisi yakında eklenecektir."}
                  </p>
                </div>


                <div
                  className="
                    flex
                    gap-3
                    mt-8
                  "
                >
                  {bayi.telefon && (
                    <a
                      href={`tel:${bayi.telefon}`}
                      className="
                        flex-1
                        text-center
                        py-3.5
                        rounded-full
                        border
                        border-white/20
                        hover:bg-white
                        hover:text-black
                        transition
                      "
                    >
                      Ara
                    </a>
                  )}

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      bayi.adres ||
                        bayi.sehir
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1
                      text-center
                      py-3.5
                      rounded-full
                      border
                      border-white/20
                      hover:bg-white
                      hover:text-black
                      transition
                    "
                  >
                    Yol Tarifi
                  </a>
                </div>

              </div>
            )
          )}
        </div>

      </div>
    </main>
  );
}