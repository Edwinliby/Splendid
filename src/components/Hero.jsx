import Image from "next/image";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const tri1 = useRef(null);
  const tri2 = useRef(null);
  const heroImage = useRef(null);

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
    gsap.fromTo(
      third.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, delay: 2.5 }
    );
    gsap.fromTo(
      heroImage.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, delay: 2.5 }
    );
    gsap.fromTo(
      tri1.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1.5, delay: 1 }
    );
    gsap.fromTo(
      tri2.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1.5, delay: 1 }
    );
  }, []);

  return (
    <div className='relative pt-20 md:pt-0 h-[90vh] md:h-screen w-full flex flex-col items-center justify-center bg-[url("/gradient.png")]'>
      <div className='font-clash text-center relative top-[-1rem]'>
        <h1 ref={first} className='text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-light opacity-0'>Janitorial Paradise</h1>
        <h2 ref={second} className='text-[2rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5.5rem] font-medium relative top-[-.5rem] md:top-[-2rem] opacity-0'>Cleaning made <b className='italic text-main_primary'>Simple !</b></h2>
      </div>

      <div
        ref={third}
        className="text-center z-[1] flex flex-col items-center gap-1.5 font-medium font-montserrat text-[1rem] md:text-[1.5rem] relative top-[-.5rem] md:top-[-1.5rem]"
      >
        <p className="flex items-center">
          Sole distributor of &nbsp;
          <Link href="https://www.ipcworldwide.com/in/">
            <Image
              src="/brands/ipcLogo.png"
              alt="ipc-logo"
              width={300}
              height={300}
              className=" h-[2.5rem] w-auto"
            />
          </Link>
        </p>
        <p>
          products in the <b className="">MIDDLE EAST REGION</b>{" "}
        </p>
      </div>

      <Link href="#About">
        <Image
          src="/down.gif"
          width={300}
          height={300}
          className="w-auto h-[5rem] opacity-30 z-[10] bg-transparent transition-all duration-700 ease-in cursor-pointer relative top-[-.5rem] md:top-[-1.5rem]"
        />
      </Link>

      <Image
        ref={heroImage}
        src="/hero.png"
        alt="hero-img"
        width={1100}
        height={1100}
        className="absolute bottom-5 md:bottom-[0rem] w-[20rem] sm:w-[22rem] md:w-[35rem] xl:w-[60rem] z-[1]"
      />

      <div className="">
        <Image
          ref={tri1}
          src="/triangle.png"
          alt="shape-1"
          width={700}
          height={700}
          className="absolute bottom-[-2.5rem] left-0 w-[13rem] sm:w-[18rem] lg:w-[24rem] xl:w-[40rem]"
        />
        <Image
          ref={tri2}
          src="/triangle2.png"
          alt="shape-2"
          width={700}
          height={700}
          className="absolute bottom-[-2.5rem] right-0 w-[13rem] sm:w-[18rem] lg:w-[24rem] xl:w-[40rem]"
        />
      </div>
    </div>
  );
}
