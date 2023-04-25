import React from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function index() {
    return (
        <div>
            <Head>
                <title>Splendid About</title>
            </Head>
            <Header />

            <main className='w-screen h-fit font-montserrat'>
                <div className='mt-[5rem] px-4 md:mt-[6rem] py-8 lg:px-[7rem] flex flex-col lg:flex-row items-center lg:items-end gap-6'>
                    <h1 className='text-black w-fit text-[2.2rem] md:text-[3rem] font-semibold'>
                        Transform your living space <span className='text-transparent font-bold bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500'>with our exceptional cleaning services</span>
                    </h1>
                    <p className='w-fit'>
                        At Splendid, we are committed to providing our customers with the highest quality products and services.
                        Our mission is to be the premier supplier of cleaning and maintenance products in the region, delivering exceptional value and unmatched customer service.
                    </p>
                </div>
                <Image
                    src='/assects/cleaning.png'
                    width={1000}
                    height={1000}
                    alt='about'
                    className=' w-full lg:h-[35rem] object-cover'
                />

                <div className='flex justify-center'>
                    <span className='w-[85%] rounded-xl h-1 mt-16 bg-gray/50 block'></span>
                </div>

                <div className='px-4 lg:px-[7rem] flex flex-col lg:flex-row py-8'>
                    <h2 className='text-[3rem] font-bold'>
                        Together we are strong
                    </h2>
                    <div className=' lg:w-[70%] flex flex-col gap-6'>
                        <p className='text-black text-[1.1rem] font-semibold'>
                            Our team of experienced professionals has many years of experience in the industry,
                            and we are passionate about helping our customers achieve their goals. We believe that a clean and well-maintained environment is essential for success,
                            and we are dedicated to providing the products and services that help our customers achieve their goals.
                        </p>
                        <p>
                            Our Splendid is committed to becoming a leading entity in global trading, through eff ective business strategies and key alliances.
                            We prioritize customer-oriented and total quality management policies while embodying the values of trust, dedication, honesty, diligence, and dynamism.
                            We strive to make a positive impact on society through proactive participation in socio-economic activities and environmental-friendly practices. Join us on our journey towards excellence and discover the unparalleled benefi ts of partnering with us.
                        </p>
                    </div>
                </div>

                <div className='px-4 lg:px-[7rem] flex flex-col lg:flex-row justify-between py-10'>
                    <div className='lg:w-[80%] flex flex-col gap-6'>
                        <p className='text-black text-[2rem] font-semibold'>
                            Message from <b className='text-red-500'>IPC Sales Director</b>
                        </p>
                        <p>
                            “Cleaning plays a vital role in our daily lives. Our goal is to deliver clean,
                            safe and healthy living environments made easy for our customers. We are dedicated to achieving a high degree of customer satisfaction relating to both product performance and after sales care. Through gaining an understanding of our customer’s needs and delivering on our promise of only selling the right solutions,
                            IPC Group has developed long-lasting partnerships with businesses across the country. “
                        </p>
                        <b>
                            MR.ADRIANO MARIANO
                        </b>
                    </div>

                    <div className='flex justify-center pt-4 lg:pt-0'>
                        <Image
                            src="/assects/MR.png"
                            width={1000}
                            height={1000}
                            alt="about"
                            className="w-[15rem] h-[15rem] rounded-full object-cover"
                        />
                    </div>
                </div>
            </main>

            <Footer />
            <span className='w-full text-black/60 flex justify-end text-[.8rem] xl:pl-6 py-3 pr-8 xl:pr-10'>
                <b className='text-black hidden lg:visible'>English</b>
                <p>2023 ©️ All rights reserved</p>
            </span>
        </div>
    )
}
