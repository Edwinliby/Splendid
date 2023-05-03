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

                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ delay: .5 }}
                    className='px-4 lg:px-[7rem] flex flex-col justify-between pb-10'>
                    <div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-4'>
                        <div>
                            <Image
                                src="/issa.png"
                                width={1000}
                                height={1000}
                                alt="about"
                                className="w-[15rem] h-[15rem]  object-contain"
                            />
                        </div>
                        <p className='lg:w-[70%]'>
                            ISSA is the worldwide cleaning industry association, serving as a platform for companies and professionals to connect, learn, and grow. With more than 10,500 members across the globe, ISSA is committed to promoting professionalism,
                            providing educational opportunities, and advocating for the value of clean and healthy environments.
                        </p>
                    </div>

                    <p>
                        At Splendid, we recognize the importance of partnering with a reputable and infl uential organization like ISSA. By joining forces, we are able to leverage the resources,
                        knowledge, and expertise of ISSA to provide our customers with cutting-edge solutions and best practices in the industry.
                    </p>
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
