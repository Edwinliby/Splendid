import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marque from "@/components/Marque";
import Head from "next/head";
import React from "react";
import About from "@/components/About";
import Product from "@/components/Product";
import Footer from "@/components/Footer";
import MainAbout from "@/components/MainAbout";
import Image from "next/image";
import Issa from "@/components/Issa";

function Home() {
  return (
    <div className='h-screen w-full scroll-smooth'>
      <Head>
        <title>Splendid</title>
      </Head>

      <Header />

      <section>
        <Hero />
      </section>

      <section id="About" className="overflow-hidden flex justify-center">
        <Marque />
      </section>

      <MainAbout/>

      <section >
        <About />
      </section>

      <section>
        <Image
          src="/big.png"
          alt="logo"
          width={2500}
          height={2500}
          className="w-full relative top-[.5rem] z-[1]"
        />
        <Product />
      </section>

      <Issa/>

      <Footer />
      <span className="w-full bg-white text-black/60 flex justify-end text-[.8rem] xl:pl-6 py-3 pr-8 xl:pr-10">
        <b className="text-black hidden lg:visible">English</b>
        <p>2023 ©️ All rights reserved</p>
      </span>
    </div>
  );
}

export default Home;
