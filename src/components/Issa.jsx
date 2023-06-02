import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Issa() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: .5 }}
            className='px-4 font-clash lg:px-[7rem] flex flex-col justify-between lg:mt-[-7rem] py-10'>
            <div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-4'>
                <a href="https://www.issa.com/" target='_blank'>
                    <Image
                        src="/issa.png"
                        width={1000}
                        height={1000}
                        alt="about"
                        className="w-[15rem] h-[15rem] object-contain"
                    />
                </a>
                <p className='lg:w-[70%]'>
                    ISSA is the worldwide cleaning industry association, serving as a platform for companies and professionals to connect, learn, and grow. With more than 10,500 members across the globe, ISSA is committed to promoting professionalism,
                    providing educational opportunities, and advocating for the value of clean and healthy environments.
                </p>
            </div>

            <p>
                At Splendid, we recognize the importance of partnering with a reputable and infl uential organization like ISSA. By joining forces, we are able to leverage the resources,
                knowledge, and expertise of ISSA to provide our customers with cutting-edge solutions and best practices in the industry.
            </p>
        </motion.div>
    )
}
