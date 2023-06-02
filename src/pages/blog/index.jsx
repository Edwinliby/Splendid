import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const boxContent = [
    {
        title: 'Hospitality',
        desc: 'The cleaning and janitorial services form a major part of the housekeeping.',
        id: "#Hospitality"
    },
    {
        title: 'Education',
        desc: 'The cleaning and janitorial services form a major part of the housekeeping.',
        id: "#Education"
    },
    {
        title: 'Health Care',
        desc: 'The cleaning and janitorial services form a major part of the housekeeping.',
        id: "#HealthCare"
    },
    {
        title: 'Facility Management',
        desc: 'The cleaning and janitorial services form a major part of the housekeeping.',
        id: "#FacilityManagement"
    },
    {
        title: 'Commercial',
        desc: 'The cleaning and janitorial services form a major part of the housekeeping.',
        id: "#Commercial"
    },
]

export default function index() {
    return (
        <div>
            <Head>
                <title>Splendid-Blog</title>
            </Head>

            <Header />
            <main className='w-full h-screen pt-[4.5rem]'>
                <div className='relative h-fit'>
                    
                </div>

                <Footer />
                <span className="w-full bg-white text-black/60 flex justify-between text-[.8rem] xl:pl-6 py-3 pl-4 pr-8 xl:pr-10">
                    <p>Developed by <a href="https://linktr.ee/Volshauz?ltsid=207b9289-a777-4717-8a69-f1ab494861f2" target="_blank"><b>Volshauz</b></a></p>
                    <p>2023 ©️ All rights reserved</p>
                </span>
            </main>

        </div>
    )
}
