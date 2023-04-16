import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Marquee from "react-fast-marquee";

function Marque() {
    return (
        <div className='bg-white w-[90%] z-[10] rounded-2xl shadow-lg shadow-main_primary/50 mb-8'>
            <Marquee pauseOnHover="true" gradient="" speed={60} className='bg-white w-[80%] rounded-2xl'>
                <Link href=""><Image src="/brands/1.png" alt="brand" width={500} height={500} className='h-[6rem] w-fit object-cover pl-8' /></Link>
                <Link href=""><Image src="/brands/2.png" alt="brand" width={500} height={500} className='h-[6rem] w-fit object-cover pl-8' /></Link>
                <Link href=""><Image src="/brands/3.png" alt="brand" width={500} height={500} className='h-[6rem] w-fit object-cover pl-8' /></Link>
                <Link href=""><Image src="/brands/4.png" alt="brand" width={500} height={500} className='h-[6rem] w-fit object-cover pl-8' /></Link>
                <Link href=""><Image src="/brands/5.png" alt="brand" width={500} height={500} className='h-[6rem] w-fit object-cover pl-8' /></Link>
            </Marquee>
        </div>
    )
}

export default Marque