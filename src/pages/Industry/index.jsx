import React from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function index() {
    return (
        <div>
            <Head>
                <title>Splendid-Industry Served</title>
            </Head>
            <Header />

            <main className='w-full h-screen font-montserrat'>
             
            </main>

            <Footer />
            <span className='w-full text-black/60 flex justify-end text-[.8rem] xl:pl-6 py-3 pr-8 xl:pr-10'>
                <b className='text-black hidden lg:visible'>English</b>
                <p>2023 ©️ All rights reserved</p>
            </span>
        </div>
    )
}
