import React from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function index() {
    return (
        <div>
            <Head>
                <title>Splendid-About</title>
            </Head>
            <Header />

            <main className='w-full h-fit font-montserrat'>
                <div className='mt-[5rem] px-4 md:mt-[6rem] py-8 lg:px-[7rem] flex flex-col lg:flex-row items-center lg:items-end gap-6'>
                    <motion.h1
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ delay: .5 }}
                        className='text-black w-fit text-[2.2rem] md:text-[3rem] font-semibold leading-[4rem]'>
                        Transform your living space <span className='text-transparent font-bold bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500'>with our exceptional cleaning services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 30 }}
                        transition={{ delay: .5 }}
                        className='w-fit'>
                        At Splendid, we are committed to providing our customers with the highest quality products and services.
                        Our mission is to be the premier supplier of cleaning and maintenance products in the region, delivering exceptional value and unmatched customer service.
                    </motion.p>
                </div>
                <motion.img
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: .5 }}
                    src='/assects/cleaning.png'
                    width={1000}
                    height={1000}
                    alt='about'
                    className=' w-full lg:h-[35rem] object-cover'
                />

                <div className='flex justify-center'>
                    <span className='w-[85%] rounded-xl h-1 mt-16 bg-gray/50 block'></span>
                </div>

                <motion.div
                    // initial={{ opacity: 0, y: 35 }}
                    // whileInView={{ opacity: 1, y: 0 }}
                    // viewport={{ once: true, amount: 0.8 }}
                    className='p-4 lg:px-[7rem]'>

                    <Image
                        src="/assects/Vinod.png"
                        width={1000}
                        height={1000}
                        alt="about"
                        className="w-[20rem] h-[26rem] rounded-md lg:float-left object-cover mr-4  lg:pt-0"
                    />

                    <div className=' '>
                        <p className='text-black text-[2rem] font-semibold'>
                            Message from <b className='text-red-500'>Managing Director</b>
                        </p>
                        <p>
                            “On behalf of the Board of Directors, I would like to thank our team for their incredible support and dedication.
                            We are humbled and grateful for everything you have done and the sacrifices you have made to fight for and preserve our company's business model and reputation.
                            We are fortunate to have experienced professionals in our team who are fully immersed in the market and stay up-to-date with the new launches.
                            It is only because of our combined efforts that we are one of the top companies dealing in Janitorial Supplies in the Asian and Middle East Region.

                            <br /><br />

                            Cleaning practices are front and center for about 85% of the population.
                            In the post-pandemic world, all are craving a human touch in their interactions with brands and <b>SPLENDID</b> always keeps its fingers on the pulse of the customers.
                            Giving great customer service consistently is never easy and we always make sure to make it happen.
                            We are even more dedicated and committed to provide customers where value, service, and quality go hand-in-hand.
                            On behalf of all of us at <b>SPLENDID</b> we want to sincerely thank our customers for everything they do in support of <b>SPLENDID</b>.

                            <br /><br />

                            Our hundreds of business associates around the globe have shown the region what we are all about,
                            you have our deepest gratitude, respect, and appreciation. Special mention goes to <a href="https://www.ipcworldwide.com/in/"><b className='underline'>IPC EUROMOP</b></a>, for being our most trusted supplier.
                            Together, we will move forward to strengthen our reputation of being a truly <b>JANITORIAL PARADISE</b>.

                            <br /><br />

                            <b>SPLENDID</b> is in the people business first, and looks forward in serving various industries and its cleaning needs for many years to come.
                            We are customers. We are associates. We are vendors and we are <b>SPLENDID</b>”
                        </p>
                        <b>
                            K.A.VINOD KUMAR
                        </b>
                    </div>
                </motion.div>

                <div className='px-4 lg:px-[7rem] flex flex-col lg:flex-row py-8'>
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.8 }}
                        className='text-black text-[2.2rem] md:text-[3rem] font-semibold leading-[4rem]'>
                        Together we are strong
                    </motion.h2>
                    <div className=' lg:w-[70%] flex flex-col gap-6'>
                        <motion.p
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.8 }}
                            className='text-black text-[1.1rem] font-semibold'>
                            Our team of experienced professionals has many years of experience in the industry,
                            and we are passionate about helping our customers achieve their goals. We believe that a clean and well-maintained environment is essential for success,
                            and we are dedicated to providing the products and services that help our customers achieve their goals.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            Our Splendid is committed to becoming a leading entity in global trading, through eff ective business strategies and key alliances.
                            We prioritize customer-oriented and total quality management policies while embodying the values of trust, dedication, honesty, diligence, and dynamism.
                            We strive to make a positive impact on society through proactive participation in socio-economic activities and environmental-friendly practices. Join us on our journey towards excellence and discover the unparalleled benefi ts of partnering with us.
                        </motion.p>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    className='px-4 lg:px-[7rem] flex flex-col lg:flex-row justify-between py-10'>
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
                </motion.div>

            </main>

            <Footer />
            <span className='w-full text-black/60 flex justify-end text-[.8rem] xl:pl-6 py-3 pr-8 xl:pr-10'>
                <b className='text-black hidden lg:visible'>English</b>
                <p>2023 ©️ All rights reserved</p>
            </span>
        </div>
    )
}
