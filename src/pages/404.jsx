import React from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Notfound() {
    return (
        <div>
            <Head>
                <title>Page not found</title>
            </Head>

            <Header />

            <main className='w-full relative font-montserrat h-screen pt-[4.5rem] text-center flex justify-center items-center'>
                <Image
                    src='/notfound.png'
                    width={1000}
                    height={1000}
                    alt='404'
                    className='absolute top-[50%] left-[50%] z-[-1]  translate-x-[-50%] translate-y-[-50%]'
                />
                <div className='flex flex-col items-center'>
                    <h2 className='text-[2rem] lg:text-[4rem] uppercase font-bold'>Page Not Found</h2>
                    <p className='text-[.9rem] lg:text-[1.2rem] lg:w-[50%] px-4'>Unfortunately, we can't bring you what you were looking for this time.
                        Perhaps you'd like to see some of our latest product instead?</p>
                    <div className='flex gap-4 justify-center'>
                        <a href="/" className='bg-gray hover:bg-main_primary transition-all duration-300 ease-in-out text-white px-4 py-2 rounded-md mt-4'>Go to Home</a>
                        <a href="/products" className='bg-gray hover:bg-main_primary transition-all duration-300 ease-in-out text-white px-4 py-2 rounded-md mt-4'>View products</a>
                    </div>
                </div>
            </main>

            <Footer />
            <span className="w-full bg-white text-black/60 flex justify-between text-[.6rem] sm:text-[.8rem] xl:pl-6 py-3 px-2 sm:pl-4 sm:pr-8 xl:pr-10">
                <p>Developed by <a href="https://www.volshauz.com/" target="_blank"><b>Volshauz</b></a></p>
                <p>2024 ©️ All rights reserved</p>
            </span>
        </div>
    )
}
