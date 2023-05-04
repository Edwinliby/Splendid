import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function MainAbout() {
    return (
        <div className='px-4 lg:px-16 w-full h-fit pt-[4.5rem] font-montserrat'>
            <h4 className='flex items-center gap-2 text-[1.2rem] italic'><span className='block h-1 w-10 bg-black'></span> About Us</h4>
            <div className='flex flex-col lg:flex-row justify-center'>
                <div className='lg:border-b-[2px] lg:border-r-[2px] lg:w-[50%] lg:p-6 flex flex-col justify-center'>
                    <h1 className='font-extrabold text-[2.5rem] lg:text-[3rem] leading-[3.5rem]'> <b className='text-[3.7rem]'>O</b>ur mission is to provide better equipments to the industry</h1>

                    <p
                        className="text-black/80 text-[1.1rem] pt-8">
                        SPLENDID CLEANING MATERIAL TRADING LLC is one of the most acclaimed
                        Janitorial supplies Company headquartered in UAE supplying cleaning
                        and hygiene products to a multitude of industries. Since inception
                        we have been involved in major projects in the region.
                    </p>
                </div>

                <div className='lg:border-y-[2px] lg:border-r-[2px] h-fit p-4'>
                    <Image
                        src="/city.jpg"
                        alt="Picture of the city"
                        width={500}
                        height={500}
                        className='object-cover w-full h-[25rem]'
                    />
                    <h2 className='flex items-center gap-2 p-2 font-semibold'>Find out more about our brand<Link href="/about" className='text-[2rem] hover:translate-x-4  transition-all duration-300 ease-in-out'>⟶</Link></h2>
                </div>
            </div>
        </div>
    )
}
