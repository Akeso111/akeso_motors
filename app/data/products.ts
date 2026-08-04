export type Product = {

  name: string;

  slug: string;

  image: string;

  gallery?: string[];

  subtitle: string;
  
  description?: string;

  status: "ready" | "coming";

  badge?: string;

  whatsappMessage?: string;


  specs?: {

    motorPower?: string;

    battery?: string;

    overallDim?: string;

    tireSize?: string;

    maxLoad?: string;

    maxSpeed?: string;

    controller?: string;

    light?: string;

    frontFork?: string;

    chargingTime?: string;

    gradeAbility?: string;

    brake?: string;

    frontRearWheel?: string;

    maxRange?: string;

  };


  colors?: string[];

};






export const products: Product[] = [




{
  name:"CITY BEE",

  slug:"city-bee",

  image:"/images/hero-cover.png",

  gallery:[
    "/images/hero-cover.png"
  ],

  subtitle:"Elektrikli şehir mobilitesi",

  status:"coming",

  badge:"Yakında",

  whatsappMessage:
  "Merhaba, City Bee modeli hakkında bilgi almak istiyorum.",


  specs:{

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

  },

  colors:[]

},
{
  name: "RUBY",

  slug: "ruby",

  image: "/images/products/toro/rubyposter.png",

  gallery: [
    "/images/products/toro/rubyposter.png"
  ],

  subtitle: "Yeni nesil elektrikli şehir mobilitesi",

  status: "coming",

  badge: "Yakında",

  whatsappMessage:
    "Merhaba, Ruby modeli hakkında bilgi almak istiyorum.",

  specs: {

    motorPower: "ÇOK YAKINDA",

    battery: "ÇOK YAKINDA",

    overallDim: "ÇOK YAKINDA",

    tireSize: "ÇOK YAKINDA",

    maxLoad: "ÇOK YAKINDA",

    maxSpeed: "ÇOK YAKINDA",

    controller: "ÇOK YAKINDA",

    light: "ÇOK YAKINDA",

    frontFork: "ÇOK YAKINDA",

    chargingTime: "ÇOK YAKINDA",

    gradeAbility: "ÇOK YAKINDA",

    brake: "ÇOK YAKINDA",

    frontRearWheel: "ÇOK YAKINDA",

    maxRange: "ÇOK YAKINDA"

  },

  colors: []

},

{
  name:"TORO",

  slug:"toro",

  image:"/images/products/toro/toro.png",

  gallery:[
    "/images/products/toro/toroön.png",
    "/images/products/toro/toroyan.png",
    "/images/products/toro/Toroo.png"
  ],

  subtitle:"Elektrikli yük taşımacılığı",

  status:"ready",

  badge:"Profesyonel Seri",

  whatsappMessage:
  "Merhaba, Toro modeli hakkında detaylı bilgi almak istiyorum.",


  specs:{

    motorPower:"72V 3000W A/C MOTOR",

    battery:"72V 105AH LFP Lityum Batarya",

    overallDim:"3150 × 1250 × 1400 mm",

    tireSize:"Ön 4.00-10 / Arka 4.00-12",

    maxLoad:"960 KG",

    maxSpeed:"55-60 KM/H",

    controller:"60 Tüp",

    light:"LED",

    frontFork:"Hidrolik",

    chargingTime:"6-8 Saat",

    gradeAbility:"%12 Eğim",

    brake:"Ön Disk Fren / Arka Disk Fren",

    frontRearWheel:"Demir Jant",

    maxRange:"80-90 KM"

  },

  colors:[]

},

{
  name:"RABA",

  slug:"raba",

  image:"/images/products/toro/raba.png",

  gallery:[
    "/images/products/toro/raba.png",
    "/images/products/toro/rabakapali.png",

  ],

  subtitle:"Elektrikli yük taşıma aracı",

  status:"ready",

  badge:"Yeni",

  whatsappMessage:
  "Merhaba, Raba modeli hakkında detaylı bilgi almak istiyorum.",


  specs:{

    motorPower:"72V 1500W Elektrikli Motor",

    battery:"72V 65AH Jel Batarya",

    overallDim:"3150 × 1200 × 1400 mm",

    tireSize:"Ön 3.75-12 / Arka 4.00-12",

    maxLoad:"700 KG",

    maxSpeed:"45 KM/H",

    controller:"24 Tüp",

    light:"LED",

    frontFork:"Hidrolik",

    chargingTime:"8 Saat",

    gradeAbility:"%13 Eğim",

    brake:"Disk Fren",

    frontRearWheel:"Demir Jant",

    maxRange:"50-60 KM"

  },

  colors:[]

},







{
  name:"L500",

  slug:"l500",

  image:"/images/products/toro/L500.png",

  gallery:[
    "/images/products/toro/L500.png"
  ],

  subtitle:"Elektrikli ticari taşıma aracı",

  status:"ready",

  badge:"Ticari Seri",

  whatsappMessage:
  "Merhaba, L500 modeli hakkında detaylı bilgi almak istiyorum.",


  specs:{

    motorPower:"72V 1500W Elektrikli Motor",

    battery:"72V 65AH Jel Batarya",

    overallDim:"3150 × 1200 × 1400 mm",

    tireSize:"4.50-12",

    maxLoad:"700 KG",

    maxSpeed:"40 KM/H",

    controller:"24 Tüp",

    light:"LED",

    frontFork:"Hidrolik",

    chargingTime:"8 Saat",

    gradeAbility:"%13 Eğim",

    brake:"Disk Fren",

    frontRearWheel:"Demir Jant",

    maxRange:"70 KM"

  },

  colors:[]

},







{
  name:"YAGI PRO",

  slug:"yagi-pro",

  image:"/images/products/toro/yagipro.png",

  gallery:[
    "/images/products/toro/yagipro.png"
  ],

  subtitle:"Elektrikli profesyonel mobilite",

  status:"ready",

  badge:"Profesyonel",

  whatsappMessage:
  "Merhaba, Yagi Pro modeli hakkında detaylı bilgi almak istiyorum.",


  specs:{

    motorPower:"72V 1300W Elektrikli Motor",

    battery:"72V 41AH Graphene Batarya",

    overallDim:"2750 × 900 × 1110 mm",

    tireSize:"3.00-12",

    maxLoad:"560 KG",

    maxSpeed:"40 KM/H",

    controller:"18 Tüp",

    light:"LED",

    frontFork:"Hidrolik",

    chargingTime:"6-8 Saat",

    gradeAbility:"%13 Eğim",

    brake:"Disk Fren",

    frontRearWheel:"Alüminyum Jant",

    maxRange:"60-70 KM"

  },

  colors:[]

}



];