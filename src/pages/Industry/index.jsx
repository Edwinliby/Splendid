import React from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { FaHospitalUser, FaCity } from 'react-icons/fa'
import { MdHealthAndSafety } from 'react-icons/md'
import { BsFillBuildingsFill } from 'react-icons/bs'

export default function index() {
    return (
        <div>
            <Head>
                <title>Splendid-Industry Served</title>
            </Head>
            <Header />

            <main className='w-full h-fit pt-[4.5rem]'>
                <div className='relative'>
                    <Image
                        src="/clean.jpg"
                        alt="Picture of the author"
                        width={1920}
                        height={1080}
                        className='object-cover blur-[1.5px]'
                    />
                    <div className='absolute top-8 left-4 lg:top-[7rem] lg:left-[6rem] font-clash h-fit'>
                        <h1 className='text-[2rem] lg:text-[4rem] text-white uppercase font-semibold'>Industry Served</h1>
                        <p className='text-white hidden lg:block text-[.8rem] lg:text-[1.1rem] tracking-wide lg:w-[45%] glass p-4 rounded-xl'>
                            At SPLENDID, we understand that high-quality commercial cleaning needs just the right systems and supplies.
                            If you want to find a supplier able to take on your facility’s specific cleaning challenges, you need one with industry-specific expertise.
                        </p>
                    </div>

                    <div className='flex flex-wrap gap-4 justify-center py-4'>
                        <div className='flex flex-col p-4 w-[19rem] border border-gray/50 rounded-md hover:bg-gray/10'>
                            <FaHospitalUser size={50} className='text-main_primary' />
                            <h2 className='font-semibold text-[1.5rem]'>Hospitality</h2>
                            <p className='pt-2'>The cleaning and janitorial services form a major part of the housekeeping.</p>
                        </div>
                        <div className='flex flex-col p-4 w-[19rem] border border-gray/50 rounded-md hover:bg-gray/10'>
                            <MdHealthAndSafety size={50} className='text-main_primary' />
                            <h2 className='font-semibold text-[1.5rem]'>Health Care</h2>
                            <p className='pt-2'>The cleaning and janitorial services form a major part of the housekeeping.</p>
                        </div>
                        <div className='flex flex-col p-4 w-[19rem] border border-gray/50 rounded-md hover:bg-gray/10'>
                            <FaCity size={50} className='text-main_primary' />
                            <h2 className='font-semibold text-[1.5rem]'>Facility Management</h2>
                            <p className='pt-2'>The cleaning and janitorial services form a major part of the housekeeping.</p>
                        </div>
                        <div className='flex flex-col p-4 w-[19rem] border border-gray/50 rounded-md hover:bg-gray/10'>
                            <BsFillBuildingsFill size={50} className='text-main_primary' />
                            <h2 className='font-semibold text-[1.5rem]'>Commercial</h2>
                            <p className='pt-2'>The cleaning and janitorial services form a major part of the housekeeping.</p>
                        </div>
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
