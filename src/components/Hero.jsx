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
    speed: 1500,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const images = [
    {
      url: "/product/sm11.png",
      key: 1
    },
    {
      url: "/product/sm22.png",
      key: 2
    },
    {
      url: "/product/sm33.png",
      key: 3
    },
    {
      url: "/product/sm444.png",
      key: 4
    },
    {
      url: "/product/sm44.png",
      key: 5
    },
    {
      url: "/product/sm5.png",
      key: 6
    },
    {
      url: "/product/sm66.png",
      key: 7
    },
    {
      url: "/product/sm7.png",
      key: 8
    },
    {
      url: "/product/sm8.png",
      key: 9
    },
  ];

  return (
    // <div className="h-screen w-full relative">

      <div className=" w-full relative top-[4rem]">
        <Slider {...bgsettings} className="mx-4 py-4 -z-10">
          <div className="relative">
            <Image
              src="/HeroImg.png"
              alt="Picture of the author"
              width={1000}
              height={1000}
              className="object-cover h-[95vh] w-full rounded-lg border-4 border-white/50"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="text-black/75 pt-[5rem] z-10 text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-montserrat font-bold lg:w-[50%] leading-tight absolute top-[-3rem] left-5">
              Cleaning solutions that speak <b className="text-green-400 italic uppercase">Green</b>
            </motion.div>
          </div>

          <div className="relative">
            <Image
              src="/heroimg2.png"
              alt="Picture of the author"
              width={1000}
              height={1000}
              className="object-cover h-[95vh] w-full opacity-75 rounded-lg border-4 border-white/50"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="text-black/75 pt-[5rem] z-10 text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-montserrat font-bold lg:w-[65%] leading-none absolute top-[-4rem] left-5">
              The secret to a cleaner environment starts with <b className="italic text-blue-500 uppercase">our tools.</b>
            </motion.div>
          </div>
        </Slider>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className=" flex flex-col justify-end absolute p-8 mb-10 w-full bottom-0">
          <div className="flex items-center gap-3">
            <span className="font-montserrat text-[1.5rem] md:text-[1.8rem] pl-1 font-medium">
              Explore our products
            </span>
            <BsArrowRight size={35} className=" hover:translate-x-5 transition-all duration-500 ease-in-out" />
          </div>
          <Slider {...settings} className="w-full md:w-[50%]">
            {images.map((image, index) => (
              <div key={index} className="flex justify-center items-center">
                <Link href="/products"><Image src={image.url} alt="shape-1" width={500} height={500} className="px-2" /></Link>
              </div>
            ))}
          </Slider>
        </motion.div>
        </div>
    // </div>
  );
}
