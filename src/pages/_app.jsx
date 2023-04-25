import React from "react";
import Head from "next/head";
import { IBM_Plex_Mono } from "next/font/google";
import { Bebas_Neue } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import LocalFont from "next/font/local";
import "../styles/globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const font_montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400","500","600","700","800"],
  variable: "--font-montserrat",
});

const font_ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm",
});

const font_bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
});

const font_neue = LocalFont({
  src: "../fonts/NeueMontreal-Regular.otf",
  variable: "--font-neue",
});

const font_clash = LocalFont({
  src: "../fonts/ClashDisplay-Variable.ttf",
  variable: "--font-clash",
});

export default function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/png" />
      </Head>
      <main className={`${font_neue} ${font_ibm.variable} ${font_bebas.variable}  ${font_montserrat.variable}   ${font_clash.variable}
      `}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
