import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Marquee from "react-fast-marquee";

function Marque() {
    return (
        <div className='bg-white w-[90%] z-[10] rounded-2xl shadow-lg shadow-main_primary/50 mb-8'>
            <Marquee pauseOnHover="true" gradient="" speed={60} className='bg-white w-[80%] rounded-xl lg:rounded-2xl'>
                <Link href="https://www.ipcworldwide.com/in/">
                    <Image src='/brands/11.png' width={500} height={500} className='h-[4rem]  w-fit object-cover pl-8' />
                </Link>
                <Link href="https://www.cavallo.it/">
                    <Image src='/brands/9.png' width={500} height={500} className='h-[4rem]  w-fit object-cover pl-8' />
                </Link>
                <Image src="/brands/2.png" alt="brand" width={500} height={500} className='h-[4rem] md:h-[6rem] w-fit object-cover pl-8' />
                <Image src="/brands/3.png" alt="brand" width={500} height={500} className='h-[4rem] md:h-[6rem] w-fit object-cover pl-8' />
                <Image src="/brands/4.png" alt="brand" width={500} height={500} className='h-[4rem] md:h-[6rem] w-fit object-cover pl-8' />
                <Image src="/brands/5.png" alt="brand" width={500} height={500} className='h-[4rem] md:h-[6rem] w-fit object-cover pl-8' />
                <Image src="/brands/6.jpg" alt="brand" width={500} height={500} className='h-[4rem] md:h-[6rem] w-fit object-cover pl-8' />
                <Image src="/brands/ksi.png" alt="brand" width={500} height={500} className='h-[4rem] md:h-[6rem] w-fit object-cover pl-8' />
                <Link href="https://www.ipcworldwide.com">
                    <Image src="/brands/ipcEuro.png" alt="brand" width={500} height={500} className='h-[2.5rem] md:h-[4rem] w-fit object-cover pl-8' />
                </Link>
            </Marquee>
        </div >
    )
}

export default Marque