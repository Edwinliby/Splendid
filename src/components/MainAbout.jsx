import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function MainAbout() {
    return (
        <div className='px-4 lg:px-16 w-full h-fit pt-4 md:pt-8 font-montserrat mb-4 md:mb-8'>
            <h4 className='flex items-center gap-2 text-[1.2rem] italic'><span className='block h-1 w-10 bg-black'></span> About Us</h4>
            <div className='flex flex-col lg:flex-row justify-center'>
                <div className='lg:border-b-[2px] lg:p-6 flex flex-col justify-center'>
                    <h1 className='font-extrabold text-[2.5rem] lg:text-[3rem] leading-[3.5rem]'> <b className='text-[3.7rem]'>O</b>ur mission is to provide better equipments to the industry</h1>
                    <p
                        className="text-black/80 text-[1.1rem] pt-8">
                        <b>SPLENDID CLEANING MATERIAL TRADING LLC</b> is one of the most acclaimed Janitorial supplies
                        Companies headquartered in UAE supplying cleaning and hygiene products to a multitude of industries.
                        Since inception, we have been involved in major projects in the region.
                    </p>
                </div>

                <div className='relative border-[2px] rounded-2xl lg:rounded-es-none h-[30rem] md:min-w-[23rem] p-4 mt-4 lg:mt-0'>
                    <Link href="https://www.ipcworldwide.com/in/">
                        <Image src='/brands/1.png' width={500} height={500} className='updown w-fit min-h-[4rem] max-h-[6rem] object-contain absolute top-4 ' />
                    </Link>
                    <Image src='/brands/2.png' width={500} height={500} className='updown w-fit min-h-[4rem] max-h-[6rem] object-contain absolute top-20 right-0' />
                    <Image src='/brands/3.png' width={500} height={500} className='updown w-fit min-h-[4rem] max-h-[6rem] object-contain absolute top-48 right-5' />
                    <Image src='/brands/ipcEuro.png' width={500} height={500} className='updown w-fit min-h-[2.5rem] max-h-[5rem] object-contain absolute top-36 ' />
                    <Image src='/brands/4.png' width={500} height={500} className='updown w-fit min-h-[4rem] max-h-[6rem] object-contain absolute bottom-32 left-0' />
                    <Image src='/brands/5.png' width={500} height={500} className='updown w-fit min-h-[4rem] max-h-[6rem] object-contain absolute bottom-14' />
                    <Image src='/brands/6.jpg' width={500} height={500} className='updown w-fit min-h-[4rem] max-h-[6rem] object-contain absolute bottom-16 right-8' />
                    <h2 className='flex items-center gap-2 p-2 font-semibold absolute bottom-0'>Find out more about our brand<Link href="/about" className='text-[2rem] hover:translate-x-4  transition-all duration-300 ease-in-out'>⟶</Link></h2>
                </div>
            </div>
        </div>
    )
}
