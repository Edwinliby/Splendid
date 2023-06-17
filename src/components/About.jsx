import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

export default function About() {

  const content = [
    {
      "id": 1,
      "head": "Cleaning Equipment and Supplies",
      "para": "Splendid UAE specializes in providing cleaning equipment and supplies for both commercial and residential use. Our wide range of products includes cleaning chemicals, janitorial equipment, and industrial cleaning machines.",
      "img": "/assects/ab-1.png"
    },
    {
      "id": 3,
      "head": "Technical Expertise",
      "para": "Our team of highly skilled and experienced technicians is trained to provide technical support and maintenance for all our cleaning equipment. We offer installation, repair, and maintenance services to ensure that our equipment is always in top condition.",
      "img": "/assects/ab-33.png"
    },
    {
      "id": 2,
      "head": "Customized Solutions",
      "para": "We take pride in offering customized cleaning solutions that are tailored to meet the unique needs of our clients. Our team works closely with our customers to understand their specific requirements and provide customized solutions that meet their needs.",
      "img": "/assects/ab-2.png"
    },
    {
      "id": 4,
      "head": "Training and Education",
      "para": "We understand the importance of proper training and education for our clients. Therefore, we offer training and education programs to ensure that our customers can use our cleaning equipment and supplies safely and effectively. Our training programs focus on the proper use and maintenance of our products to ensure that customers get the most out of their investments.",
      "img": "/assects/ab-44.png"
    }
  ]

  return (
    <div className="flex flex-col lg:flex-row relative font-montserrat">

      <div className="relative lg:sticky z-[2] bg-transparent top-0 left-0 flex flex-col lg:w-[70%] h-fit lg:h-[100vh] justify-center p-4 lg:pl-16 gap-4">
        <div className='blob1 hidden lg:block absolute top-16 left-12 w-[10rem] h-[10rem]'></div>
        <div className="flex lg:flex-col  justify-center items-center gap-4">
          <h1 className="flex font-clash items-center font-medium text-[1.8rem] md:text-[2.5rem] gap-3 uppercase">
            Who are we{" "}
            {/* <Image src="/BigLogo.png" alt="logo" width={1500} height={1500} className="w-auto h-[4.5rem]" /> */}
          </h1>
          <Link href="/about"
            className="bg-[#FF9D42] text-center text-white w-fit z-[2] border-[2.5px] hover:border-gray/50 transition-all duration-300 ease-in-out font-medium font-montserrat text-[.7rem] md:text-[1rem] px-4 py-2 rounded-full">
            More Details
          </Link>
        </div>
        <div className='blob1 hidden lg:block absolute right-12 bottom-1 w-[14rem] h-[15rem]'></div>
      </div>

      <div className="z-[3] flex flex-col lg:pr-12 w-full">
        {
          content.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: .5 }}
              className="h-fit lg:h-[100vh] p-4 flex flex-col justify-evenly">
              <div className="flex items-center gap-6">
                <div className="flex relative">
                  <div className="w-9 h-8 bg-black rounded-full border-[2px] border-black/50"></div>
                  <div className="absolute left-4 w-9 h-8 rounded-full border-[2px] border-black/50"></div>
                </div>
                <h1 className="flex font-clash items-center text-royal_blue font-medium text-[1.5rem] md:text-[2.3rem] gap-2">
                  {item.head}
                </h1>
              </div>
              <p className="text-black/80 sm:text-[1.1rem]">
                {item.para}
              </p>
              <Link href="/products" className="flex gap-3 items-center hover:text-royal_blue transition-all duration-500 ease-in-out">Know more 
              <BsArrowRight size={25} className=" hover:translate-x-5 transition-all duration-500 ease-in-out" />
              </Link>
              <Image src={item.img} alt="logo" width={700} height={700} className="w-full h-[15rem] mt-4 lg:h-fit object-contain" />
            </motion.div>
          ))
        }
      </div>

    </div>
  );
}
