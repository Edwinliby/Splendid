import Image from 'next/image'
import React from 'react'
import PdtSlider from '@/components/PdtSlider'

export default function Product() {
    return (
        <div className=' w-screen lg:h-[120vh] bg-[#5855E8] font-montserrat'>
            <Image src="/big.png"
                alt="shape-1"
                width={2000}
                height={2000}
                className='w-full h-fit relative lg:top-[-10rem] z-[1] object-cover'
            />

            <div className='relative h-fit lg:top-[-15rem] text-white z-[2] px-[1rem] lg:px-[4rem] flex justify-between items-center w-full'>
                <h1 className='font-semibold text-[1.5rem] lg:text-5xl'>Our Products <br />& Equipment's</h1>
                <div className='flex items-center gap-4'>
                    <p className='hidden xl:visible'>click to see all the products </p>
                    <button className="bg-[#FF9D42] w-fit z-[2] border-[2.5px] border-[#FF9D42] hover:border-white transition-all duration-300 ease-in-out text-white font-medium font-montserrat text-[1rem] px-4 py-2 rounded-full">See All</button>
                </div>
            </div>

            <div className='relative h-fit lg:top-[-12rem] z-[10] py-8 md:pt-0 lg:px-10 lg:pr-12'>
                <PdtSlider />
            </div>
        </div>
    )
}
