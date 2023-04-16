import Image from 'next/image'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

export default function Hero() {

  const first = useRef(null);
  const second = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      first.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, delay: 1.5 }
    );
    gsap.fromTo(
      second.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, delay: 2 }
    );
  }, []);

  return (
    <div className='relative pt-20 md:pt-0 w-screen h-[80vh] md:h-screen flex flex-col items-center justify-center'>
      <div className='font-clash text-center relative top-[-1rem]'>
        <h1 ref={first} className='text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-light opacity-0'>Janitorial Paradise</h1>
        <h2 ref={second} className='text-[2rem] md:text-[4rem] lg:text-[5rem] font-medium relative top-[-.5rem] md:top-[-2rem] opacity-0'>Cleaning made <b className='italic text-main_primary'>Simple !</b></h2>
      </div>

      <div className='text-center flex flex-col items-center gap-1.5 font-medium font-montserrat text-[1rem] md:text-[1.5rem] relative top-[-.5rem] md:top-[-1.5rem]'>
        <p className='flex items-center'>Sole distributor of &nbsp;
          <Image
            src="/brands/ipcLogo.png"
            alt="ipc-logo"
            width={300}
            height={300}
            className=' h-[2.5rem] w-auto'
          />
        </p>
        <p>products in the <b>MIDDLE EAST REGION</b> </p>
      </div>

      <div className='flex flex-col items-center'>
        {/* <button className='bg-[#FF9D42] z-[2] border-[2.5px] hover:border-gray/60 transition-all duration-300 ease-in-out text-white font-medium font-montserrat text-[1.1rem] md:text-[1.5rem] px-4 py-2.5 rounded-full'>See Details</button> */}
        <iframe src="https://embed.lottiefiles.com/animation/9261" className='h-[4rem] md:h-[6rem] opacity-40 select-none relative xl:top-[-1rem]'></iframe>
      </div>

      <Image
        src="/hero.png"
        alt="hero-img"
        width={1100}
        height={1100}
        className='absolute bottom-5 md:bottom-[0rem] w-[20rem] sm:w-[22rem] md:w-[35rem] xl:w-[60rem] z-[1]'
      />

      <div className=''>
        <Image
          src="/triangle.png"
          alt="shape-1"
          width={700}
          height={700}
          className='absolute bottom-[-2.5rem] left-0 w-[13rem] sm:w-[18rem] lg:w-[24rem] xl:w-[40rem]'
        />
        <Image
          src="/triangle2.png"
          alt="shape-2"
          width={700}
          height={700}
          className='absolute bottom-[-2.5rem] right-0 w-[13rem] sm:w-[18rem] lg:w-[24rem] xl:w-[40rem]'
        />
      </div>
    </div>
  )
}
