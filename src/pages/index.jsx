import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Marque from '@/components/Marque'
import Head from 'next/head'
import React from 'react'
import About from '@/components/About'
import Product from '@/components/Product'
import Footer from '@/components/Footer'

function Home() {
  return (
    <div className='h-screen w-screen'>
      <Head>
        <title>Splendid</title>
      </Head>
      <Header />

      <section>
        <Hero />
      </section>

      <section className='overflow-hidden flex justify-center'>
        <Marque />
      </section>

      <section id="About">
        <About />
      </section>

      <section>
        <Product className='z-[1]' />
      </section>

      <Footer />
      <span className='w-full text-black/60 flex justify-end text-[.8rem] xl:pl-6 py-3 pr-8 xl:pr-10'>
        <b className='text-black hidden lg:visible'>English</b>
        <p>2023 ©️ All rights reserved</p>
      </span>
    </div>
  )
}

export default Home