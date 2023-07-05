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

                <div className='flex justify-center'>
                    <span className='w-[85%] rounded-xl h-1 mt-16 bg-gray/50 block'></span>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className='p-4 mt-6 lg:px-[7rem] flex flex-col lg:flex-row gap-6 items-center'>

                    <Image
                        src="/assects/yo.png"
                        width={1000}
                        height={1000}
                        alt="MD"
                        className="w-[20rem] h-[18rem] rounded-md object-contain lg:pt-0"
                    />

                    <div className=' '>
                        <p className='text-black text-[2rem] font-semibold'>
                            A word from our <b className='text-red-500'>Managing Director</b>
                        </p>
                        <p className='italic text-justify'>
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
                        <p className='py-2'>Yours sincerely,</p>
                        <b>K.A.VINOD KUMAR</b>
                    </div>
                </motion.div>

                <div className='px-4 lg:px-[7rem] flex flex-col py-6'>
                    <h2 className='text-[1.5rem] md:text-[2.4rem] pb-4 font-bold '>Company Profile</h2>
                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        className='text-black text-[1.1rem] font-semibold text-justify'>
                        Cleaning doesn’t have to be Tedious and boring if you have a right cleaning partner!!
                        By investing in proper tools and relying on professional cleaning materials, it can be exciting and fun.
                        SPLENDID has complete solution for a large variety of customers dulled by the humdrum of everyday cleaning.
                    </motion.p>
                    <br />
                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        className='text-justify' >
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

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='px-4 lg:px-[7rem] pb-8 flex flex-col justify-between'>
                    <b className='text-[1.5rem] md:text-[2.4rem] pb-4 '>Our Global Trade Partners</b>
                    <p className='text-justify'>
                        <a href="https://www.ipcworldwide.com/in/" target='_blank' className='font-semibold'>IPC EUROMOP</a> (Italy), <a href="https://www.ipcworldwide.com/in/" target='_blank' className='font-semibold'>IPC PULEX</a> (Italy), <a href="https://www.cavallo.it/" target='_blank' className='font-semibold'>Cavallo</a> ( Italy ),ACS Industries inc (USA) Nazomi (Malaysia) , Scent Pur (Malaysia), Baiyun Cleaning (Far East), New Made Cleaning (Far East),KSI ( Taiwan ),AOLQ (Far East)
                        <br /><br />
                        We are your ”one-stop shop” for a vast range of cleaning chemicals, hygiene disposables, consumables and equipment from our extensive stock.
                        We believe in GO GREEN and our commitment to providing high performance products, coupled with quick turnaround and top-notch services at a challenging market price,
                        make the selection of SPLENDID the customer's Smart Choice to tackle tough cleaning problems!
                    </p>
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
