import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Contact() {
    return (
        <div>
            <Head>
                <title>Mail Submitted</title>
            </Head>
            <Header />

            <main className='pt-[5rem] h-screen mb-8 w-full font-montserrat flex flex-col justify-center'>
                <Image
                    src="/mailSend.gif"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className="mx-auto"
                />
                <p className='flex flex-col gap-2 items-center w-full'>
                    <h1 className="text-3xl font-bold text-main_primary">Thank you for contacting us!</h1>
                    <h2 className="text-xl font-semibold">We will get back to you soon.</h2>
                    {/* <Link href="/" className="text-xl font-bold p-2 mt-3 rounded-2xl bg-main_primary text-white">Go back to home page</Link> */}
                </p>
            </main>

            <Footer />
            <span className="w-full bg-white text-black/60 flex justify-between text-[.8rem] xl:pl-6 py-3 pl-4 pr-8 xl:pr-10">
                <p>Developed by <a href="https://linktr.ee/Volshauz?ltsid=207b9289-a777-4717-8a69-f1ab494861f2" target="_blank"><b>Volshauz</b></a></p>
                <p>2023 ©️ All rights reserved</p>
            </span>
        </div>
    )
}
