import React from "react";
import Link from "next/link";
import PdtSlider from "@/components/PdtSlider";

export default function Product() {
    return (
        <div className='relative w-full bg-[#5855E8] font-montserrat flex flex-col justify-center gap-14 py-8'>

            <div className='ab top-[0rem] md:top-[-4rem] h-fit text-white z-[2] px-[1rem] lg:px-[4rem] flex justify-between items-center w-full'>
                <h1 className='font-semibold text-[1.5rem] lg:text-5xl'>Our Products <br />& Equipment's</h1>
                <div className='flex items-center gap-4'>
                    <p className='hidden xl:visible'>click to see all the products </p>
                    <Link href="/products"
                        className="bg-[#FF9D42] w-fit z-[2] border-[2.5px] border-[#FF9D42] hover:border-white transition-all duration-300 ease-in-out text-white font-medium font-montserrat text-[1rem] px-4 py-2 rounded-full">
                        See All
                    </Link>
                </div>
            </div>

      <div className="w-full flex justify-center ab top-[-2.5rem]">
        <PdtSlider />
      </div>
    </div>
  );
}
