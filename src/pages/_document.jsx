import React from "react";
import Script from "next/script";
import { Html, Head, Main, NextScript } from "next/document"
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <Script strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MWM2MXT');`}}>
        </Script>

      </Head>
      <body className="bg-white">
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MWM2MXT"
          height="0" width="0"></iframe>
        </noscript>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
}
