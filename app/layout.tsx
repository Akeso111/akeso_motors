import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import "./globals.css";


export const metadata: Metadata = {

  metadataBase: new URL(
    "https://www.akesomotors.com"
  ),


  title: {
    default:
      "Akeso Motors | ",

    template:
      "%s | AKESO MOTORS",
  },


  description:
    "AKESO Motors, elektrikli şehir araçları ve profesyonel elektrikli mobilite çözümleri ile geleceğin ulaşım teknolojilerini geliştirir.",



  keywords: [

    "AKESO Motors",

    "elektrikli araç",

    "elektrikli üç tekerlekli araç",

    "elektrikli yük aracı",

    "elektrikli şehir aracı",

    "TORO",

    "RABA",

    "CITY BEE",

    "Burdur elektrikli araç",

    "Türkiye elektrikli araç",

  ],



  authors: [

    {
      name:
      "AKESO MEDİKAL TEKNOLOJİ SAN. TİC. LTD. ŞTİ.",
    },

  ],



  creator:
    "AKESO MOTORS",



  publisher:
    "AKESO MOTORS",



  robots: {

    index: true,

    follow: true,

  },



  openGraph: {

    title:
      "AKESO MOTORS | Elektrikli Mobilite Çözümleri",

    description:
      "Elektrikli şehir araçları ve ticari mobilite çözümleri.",

    url:
      "https://www.akesomotors.com",

    siteName:
      "AKESO MOTORS",

    locale:
      "tr_TR",

    type:
      "website",

  },



  twitter: {

    card:
      "summary_large_image",

    title:
      "AKESO MOTORS | Elektrikli Mobilite Çözümleri",

    description:
      "Geleceğin elektrikli mobilite teknolojileri.",

  },

};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (

    <html lang="tr">

      <body>


        <Navbar />


        {children}


        <WhatsAppButton />


        <Footer />


      </body>

    </html>

  );

}