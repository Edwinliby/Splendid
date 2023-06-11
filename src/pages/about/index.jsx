import React from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {
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
                        Transform your living space <span className='text-transparent font-bold bg-clip-text bg-gradient-to-r from-sky-500 to-royal_blue'>with our exceptional cleaning products</span>
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
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className='p-4 mt-6 lg:px-[7rem]'>

                    <Image
                        src="/assects/yo.png"
                        width={1000}
                        height={1000}
                        alt="MD"
                        className="w-[20rem] h-[18rem] rounded-md lg:float-left object-contain lg:pt-0"
                    />

                    <div className=' '>
                        <p className='text-black text-[2rem] font-semibold'>
                            Message from <b className='text-red-500'>Managing Director</b>
                        </p>
                        <p className='italic'>
                            <b>“</b> On behalf of the Board of Directors, I would like to thank our team for their incredible support and dedication.
                            We are humbled and grateful for everything you have done and the sacrifices you have made to fight for and preserve our company's business model and reputation.
                            We are fortunate to have experienced professionals in our team who are fully immersed in the market and stay up-to-date with the new launches.
                            It is only because of our combined efforts that we are one of the top companies dealing in Janitorial Supplies in the Asian and Middle East Region.

                            <br /><br />

                            Our hundreds of business associates around the globe have shown the region what we are all about,
                            you have our deepest gratitude, respect, and appreciation.
                            SPLENDID is in the people business first, and looks forward in serving various industries and its cleaning needs for many years to come.
                            We are manufactures, customers, associates, vendors and we are SPLENDID <b>”</b>
                        </p>
                        <br /> Yours sincerely, <br />
                        <b>K.A.VINOD KUMAR</b>
                    </div>
                </motion.div>

                <div className='px-4 lg:px-[7rem] flex flex-col lg:flex-row py-6'>
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        className='text-black text-[2.2rem] md:text-[3rem] uppercase text-center flex flex-col justify-center font-bold leading-[3.5rem] pb-5'>
                        Serving communities <div>since <b className='text-royal_blue'>1996</b></div>
                    </motion.h2>
                    <div className=' lg:w-[70%] flex flex-col gap-6'>
                        <motion.p
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            className='text-black text-[1.1rem] font-semibold'>
                            {/* Our team of experienced professionals has many years of experience in the industry,
                            and we are passionate about helping our customers achieve their goals. We believe that a clean and well-maintained environment is essential for success,
                            and we are dedicated to providing the products and services that help our customers achieve their goals. */}
                            Cleaning doesn’t have to be Tedious and boring if you have a right cleaning partner!!
                            By investing in proper tools and relying on professional cleaning materials, it can be exciting and fun.
                            SPLENDID has complete solution for a large variety of customers dulled by the humdrum of everyday cleaning.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.4 }}>
                            {/* At SPLENDID we are committed to becoming a leading entity in global trading, through eff ective business strategies and key alliances.
                            We prioritize customer-oriented and total quality management policies while embodying the values of trust, dedication, honesty, diligence, and dynamism.
                            We strive to make a positive impact on society through proactive participation in socio-economic activities and environmental-friendly practices. Join us on our journey towards excellence and discover the unparalleled benefi ts of partnering with us. */}
                            SPLENDID CLEANING MATERIAL TRADING LLC, is one of the most acclaimed Janitorial supplies Company headquartered in UAE supplying cleaning and hygiene products to a multitude of industries.
                            Since inception we have been involved in major projects in the region. Exclusive association with the world's best manufacturers from ITALY, U.K, MALAYSIA etc enable us to boast of comprehensive janitorial supply range.
                            It can be a daunting task to sort through the commercial and industrial cleaning equipment choices available today.
                            As the sole distributor of world class brand <a href="https://www.ipcworldwide.com/in/" target='_blank' className='font-semibold'>IPC EUROMOP</a> and master distributor of <a href="https://www.ipcworldwide.com/in/" target='_blank' className='font-semibold'>IPC PULEX</a>, SUPER CARE and various other famous brands, the field team helps customers pick the right solutions to suit the surface application.
                            <br /><br />
                            We are committed to deliver exceptional, personalized, and flexible service to our international and domestic customers. Our goal at SPLENDID is to deliver clean, safe and healthy living environments made
                            easy for our customers. The ever-flowing customer base includes some of the world's largest and most prestigious companies since it aims to form long-term working relationships with the customers.
                            Our customer base includes various Hotels, Hospitals, Schools, Trading Companies, Facility Management Companies, Housekeeping Companies, Retailers, Hypermarkets, Airports and Sea Ports etc.
                        </motion.p>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='px-4 lg:px-[7rem] flex flex-col justify-between'>
                    <b className='text-[1.5rem] md:text-[2.4rem] pb-4 '>Our Global Trade Partners</b>
                    <p>
                        <a href="https://www.ipcworldwide.com/in/" target='_blank' className='font-semibold'>IPC EUROMOP</a> (Italy), <a href="https://www.ipcworldwide.com/in/" target='_blank' className='font-semibold'>IPC PULEX</a> (Italy), <a href="https://www.cavallo.it/" target='_blank' className='font-semibold'>Cavallo</a> ( Italy ),ACS Industries inc (USA) Nazomi (Malaysia) , Scent Pur (Malaysia), Baiyun Cleaning (Far East), New Made Cleaning (Far East),KSI ( Taiwan ),AOLQ (Far East)
                        <br /><br />
                        We are your ”one-stop shop” for a vast range of cleaning chemicals, hygiene disposables, consumables and equipment from our extensive stock.
                        We believe in GO GREEN and our commitment to providing high performance products, coupled with quick turnaround and top-notch services at a challenging market price,
                        make the selection of SPLENDID the customer's Smart Choice to tackle tough cleaning problems!
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='px-4 lg:px-[7rem] flex flex-col lg:flex-row justify-between py-10'>
                    <div className='lg:w-[80%] flex flex-col gap-6'>
                        <p className='text-black text-[2rem] font-semibold'>
                            Message from <b className='text-red-500'>IPC Sales Director</b>
                        </p>
                        <p className='italic'>
                            <b>"</b> Cleaning plays a vital role in our daily lines. Our goal is to deliver clean, safe and healthy living environments made easy for our customers.
                            We are dedicated to achieving a high degree of customer satisfaction relating to both product performance and after sales care.
                            Our association with SPLENDID is dated back to several years. We always make sure that our distributor relationships aren’t just transactional.
                            Rather, see them as opportunities to grow industry credibility , help fellow businesses succeed, and expand our company’s reach <b>"</b>
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
            <span className="w-full bg-white text-black/60 flex justify-between text-[.8rem] xl:pl-6 py-3 pl-4 pr-8 xl:pr-10">
                <p>Developed by <a href="https://linktr.ee/Volshauz?ltsid=207b9289-a777-4717-8a69-f1ab494861f2" target="_blank"><b>Volshauz</b></a></p>
                <p>2023 ©️ All rights reserved</p>
            </span>
        </div>
    )
}
