import React from "react";
import Head from "next/head";
import { IBM_Plex_Mono } from "next/font/google";
import { Bebas_Neue } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import LocalFont from "next/font/local";
import "../styles/globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion, AnimatePresence } from 'framer-motion'
import Loader from "@/components/Loader";
import WhatsappBtn from "@/components/WhatsappBtn";

const font_montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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

export default function MyApp({ Component, pageProps, router }) {

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    // loading ? <Loader /> :
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/png" />

        <script strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MWM2MXT');`}}>
        </script>
      </Head>

      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MWM2MXT"
        height="0" width="0"></iframe>
      </noscript>

      <AnimatePresence>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
              transition: {
                duration: 1,
              },
            },
          }}
        >
          <main className={`${font_neue} ${font_ibm.variable} ${font_bebas.variable}  ${font_montserrat.variable}   ${font_clash.variable}`}>
            <Component {...pageProps} />
          </main>
        </motion.div>
      </AnimatePresence>

      <WhatsappBtn />
    </>
  );
}
