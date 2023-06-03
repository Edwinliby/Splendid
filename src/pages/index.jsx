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

      <section className="overflow-hidden flex justify-center ">
        <Marque />
      </section>

      <MainAbout />

      <section id="About" >
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

      <Issa />

      <Footer />
      <span className="w-full bg-white text-black/60 flex justify-between text-[.8rem] xl:pl-6 py-3 pr-8 pl-4 xl:pr-10">
        <p>Developed by <a href="https://linktr.ee/Volshauz?ltsid=207b9289-a777-4717-8a69-f1ab494861f2" target="_blank"><b>Volshauz</b></a></p>
        <p>2023 ©️ All rights reserved</p>
      </span>
    </div>
  );
}

export default Home;
