import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Hero() {

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    responsive: [{
      breakpoint: 712,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 3500,
        autoplaySpeed: 3500,
      }
    }],
    responsive: [{
      breakpoint: 512,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 3500,
        autoplaySpeed: 3500,
      }
    }]
  };

  const bgsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="h-screen w-full relative">

      <div className="h-[90vh] w-full absolute top-[4.5rem] ">
        <Slider {...bgsettings} className="m-4 ">
          <div className="relative">
            <Image
              src="/HeroImg.png"
              alt="Picture of the author"
              width={1000}
              height={1000}
              className="object-cover h-[85vh] sm:h-[88vh] md:h-[85vh] w-full -z-10 rounded-lg border-4 border-white/50"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="text-black/75 pt-[5rem] z-10 text-[2.5rem] md:text-[3.5rem] font-clash font-semibold lg:w-[50%] leading-tight absolute top-[-3rem] left-5">
              Cleaning solutions that speak <b className="text-green-400 italic">Green</b>
            </motion.div>
          </div>

          <div className="relative">
            <Image
              src="/heroimg2.png"
              alt="Picture of the author"
              width={1000}
              height={1000}
              className="object-cover h-[85vh] sm:h-[88vh] md:h-[85vh] w-full opacity-75 rounded-lg border-4 border-white/50"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="text-black/75 pt-[5rem] z-10 text-[2.5rem] md:text-[3rem] xl:text-[3.5rem] 2xl:text-[4rem] font-clash font-semibold lg:w-[65%] leading-none absolute top-[-4rem] left-5">
              The secret to a cleaner environment starts with <b className="italic text-blue-500">our tools.</b>
            </motion.div>
          </div>
        </Slider>
      </div>

      <div className="flex flex-col justify-end h-screen p-7 sm:py-12 lg:p-10 relative">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="z-10 flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <span className="font-clash text-[1.5rem] md:text-[2rem] pl-1 font-medium">
              Explore our products
            </span>
            <BsArrowRight size={35} className=" hover:translate-x-5 transition-all duration-500 ease-in-out" />
          </div>
          <Slider {...settings} className="lg:w-[50%]">
            <div className="">
              <Link href="/products"><Image src="/product/sm11.png" alt="shape-1" width={500} height={500} className="px-2" /></Link>
            </div>
            <div className="">
              <Link href="/products"><Image src="/product/sm22.png" alt="shape-1" width={500} height={500} className="px-2" /></Link>
            </div>
            <div className="">
              <Link href="/products"><Image src="/product/sm33.png" alt="shape-1" width={500} height={500} className="px-2" /></Link>
            </div>
            <div className="">
              <Link href="/products"><Image src="/product/sm444.png" alt="shape-1" width={500} height={500} className="px-2" /></Link>
            </div>
            <div className="">
              <Link href="/products"><Image src="/product/sm44.png" alt="shape-1" width={500} height={500} className="px-2" /></Link>
            </div>
            <div className="">
              <Link href="/products"><Image src="/product/sm5.png" alt="shape-1" width={500} height={500} className="px-2" /></Link>
            </div>
            <div className="">
              <Link href="/products"><Image src="/product/sm66.png" alt="shape-1" width={500} height={500} className="px-2" /></Link>
            </div>
            <div className="">
              <Link href="/products"><Image src="/product/sm7.png" alt="shape-1" width={500} height={500} className="px-2" /></Link>
            </div>
            <div className="">
              <Link href="/products"><Image src="/product/sm8.png" alt="shape-1" width={500} height={500} className="px-2" /></Link>
            </div>
          </Slider>
        </motion.div>
      </div>
    </div>
  );
}
