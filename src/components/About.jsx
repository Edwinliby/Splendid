import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function About() {

  const content = [
    {
      "id": 1,
      "head": "Cleaning equipment and supplies",
      "para": "Splendid UAE, specializes in providing cleaning equipment and supplies for both commercial and residential use. Our wide range of products includes cleaning chemicals, janitorial equipment, and industrial cleaning machines.",
      "img": "/assects/ab-1.png"
    },
    {
      "id": 2,
      "head": "Customized solutions",
      "para": "We take pride in off ering customized cleaning solutions that are tailored to meet the unique needs of our clients. Our team works closely with our customers to understand their specifi c requirements and provide customized solutions that meet their needs.",
      "img": "/assects/ab-2.png"
    },
    {
      "id": 3,
      "head": "Technical expertise",
      "para": "Our team of highly skilled and experienced technicians is trained to provide technical support and maintenance for all our cleaning equipment. We off er installation, repair, and maintenance services to ensure that our equipment is always in top condition.",
      "img": "/assects/ab-3.png"
    },
    {
      "id": 4,
      "head": "Training and education",
      "para": "We understand the importance of proper training and education for our clients. Therefore, we off er training and education programs to ensure that our customers can use our cleaning equipment and supplies safely and eff ectively. Our training programs focus on the proper use and maintenance of our products to ensure that customers get the most out of their investments.",
      "img": "/assects/ab-4.png"
    }
  ]

  return (
    <div className="flex flex-col lg:flex-row relative font-clash">

      <div className="relative lg:sticky z-[2] bg-transparent top-0 left-0 flex flex-col lg:w-[70%] h-fit lg:h-[100vh] justify-center p-4  lg:pl-16 gap-4">
        <div className='blob1 hidden lg:block absolute top-16 left-12 w-[10rem] h-[10rem]'></div>
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="flex items-center font-medium text-[2.5rem] gap-3">
            What is{" "}
            <Image src="/BigLogo.png" alt="logo" width={1500} height={1500} className="w-auto h-[4.5rem]" />
          </h1>
          <Link href="/about"
            className="bg-[#FF9D42] hidden lg:block text-white w-fit z-[2] border-[2.5px] hover:border-gray/50 transition-all duration-300 ease-in-out font-medium font-montserrat text-[1rem] px-4 py-2 rounded-full">
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: .5 }}
              className="h-fit lg:h-[90vh] p-4 flex flex-col justify-center gap-4">
              <div className="flex items-center gap-6">
                <div className="flex relative">
                  <div className="w-9 h-8 bg-black rounded-full border-[2px] border-black/50"></div>
                  <div className="absolute left-4 w-9 h-8 rounded-full border-[2px] border-black/50"></div>
                </div>
                <h1 className="flex items-center text-main_primary font-medium text-[1.5rem] md:text-[2.3rem] gap-2">
                  {item.head}
                </h1>
              </div>
              <p className="text-black/80 text-[1.1rem]">
                {item.para}
              </p>
              <div className="overflow-hidden">
                <Image src={item.img} alt="logo" width={700} height={700} className="w-full h-full object-cover" />
              </div>
            </motion.div>
          ))
        }
      </div>

    </div>
  );
}
