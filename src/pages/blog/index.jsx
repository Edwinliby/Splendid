import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BsArrowUpRightSquare } from 'react-icons/bs'
import { FiArrowDownRight } from 'react-icons/fi'

const boxContent = [
    {
        title: 'Ultimate Guide to Window Cleaning Equipment: Tools and Techniques',
        img: '/assects/blog/b1.png',
        desc: 'When it comes to achieving sparkling, streak-free windows, having the right window cleaning equipment is crucial.',
        id: "blog_1"
    },
    {
        title: 'Essential Cleaning Equipment for a Spotless Environment',
        img: '/assects/blog/b2.png',
        desc: 'Maintaining cleanliness and hygiene in residential and commercial spaces is essential for creating a healthy and inviting environment.',
        id: "blog_2"
    },
    {
        title: 'Must-Have Cleaning Equipment: Building Your Cleaning Arsenal',
        img: '/assects/blog/b3.png',
        desc: 'Having the right cleaning equipment is essential for maintaining cleanliness and hygiene in any space.',
        id: "3"
    },
    {
        title: 'Cleaning Industry in the UAE: Trends and Insights',
        img: '/assects/blog/b4.png',
        desc: 'The cleaning industry in the UAE has witnessed signifi cant growth and transformation in recent years.',
        id: "4"
    },
    {
        title: 'Simplify Mopping with a Bucket and Mop Wringer Combo: Benefits and Tips',
        img: '/assects/blog/b5.png',
        desc: 'Mopping is an essential part of maintaining cleanliness in residential and commercial spaces.',
        id: "5"
    },
]

export default function index() {

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <div>
            <Head>
                <title>Splendid-Blog</title>
            </Head>

            <Header />
            <main className='w-full h-screen pt-[4.5rem]'>
                <div className='relative h-fit flex flex-wrap justify-center gap-4 my-8 font-montserrat'>
                    {
                        boxContent.map((item) => (
                            <Link href={`/blog/${item.id}`} key={item.id}>
                                <div className='flex mt-3 h-[20rem]' key={item.id}>
                                    <Image src={item.img}
                                        alt='blog-1'
                                        width={500}
                                        height={500}
                                        className='w-[25rem] object-cover rounded-s-lg'
                                    />
                                    <div className='flex justify-between flex-col p-4 w-[20rem] rounded-e-lg border border-gray border-l-0'>
                                        <span>
                                            <h1 className='text-xl md:text-2xl'>{item.title}</h1>
                                            <br />
                                            <p>{item.desc}</p>
                                        </span>
                                        <div className='flex justify-between '>
                                            <span>Know more</span>
                                            <BsArrowUpRightSquare className='text-2xl text-gray/90 hover:text-black rotate-90 hover:scale-125 transition-all duration-300 ease-in-out' />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }

                    <div className='relative h-fit flex flex-col mx-[4rem] justify-center gap-4 my-8 font-montserrat'>
                        <div className='flex justify-between'>
                            <p className='text-xl lg:text-3xl'>Essential Cleaning Equipment for a Spotless Environment</p>
                            <FiArrowDownRight onClick={scrollToTop} size="2.5rem" className='-rotate-[135deg]' />
                        </div>
                        <p>Maintaining cleanliness and hygiene in residential and commercial spaces is essential for creating a healthy and inviting environment.
                            To achieve optimal results, investing in high-quality cleaning equipment is crucial. In this blog, we will provide a comprehensive list of essential cleaning equipment, highlighting their specific uses and benefits.
                            Discover how Splendid Cleaning Equipment can help you achieve a spotless environment.
                        </p>
                        <ul>
                            <li>
                                <b>1. Vacuum Cleaners:</b>
                                <p>
                                    Vacuum cleaners are versatile and efficient tools for removing dust, dirt, and debris from floors, carpets, and upholstery.
                                    Opt for models with strong suction power and features like HEPA filters for effective allergen control. <br />
                                    <b>Benefits:</b> Vacuum cleaners save time and effort, improve indoor air quality, and provide deep cleaning for carpets and rugs.
                                </p>
                            </li>
                            <br />
                            <li>
                                <b>2. Floor Scrubbers:</b>
                                <p>
                                    Floor scrubbers are ideal for deep cleaning and maintaining hard floor surfaces.
                                    These machines combine sweeping, scrubbing, and drying functions, making them highly efficient for large areas. <br />
                                    <b>Benefits:</b> Floor scrubbers offer superior cleaning performance, reduce water and chemical consumption, and ensure a consistent and streak-free floor finish.
                                </p>
                            </li>
                            <br />
                            <li>
                                <b>3. Steam Cleaners:</b>
                                <p>
                                    Steam cleaners utilize the power of steam to sanitize and clean various surfaces
                                    , including floors, tiles, upholstery, and kitchens. Look for models with adjustable steam settings and versatile attachments. <br />
                                    <b>Benefits:</b> Steam cleaners effectively eliminate germs, bacteria, and allergens without the need for harsh chemicals. They are also eco-friendly and provide deep cleaning and sanitization.
                                </p>
                            </li>
                            <br />
                            <li>
                                <b>4. High-Pressure Washers:</b>
                                <p>
                                    High-pressure washers are excellent for outdoor cleaning tasks, such as removing dirt, grime, and mould from surfaces like driveways, decks, and building exteriors.
                                    Consider models with adjustable pressure settings to suit different surfaces. <br />
                                    <b>Benefits:</b> High-pressure washers offer efficient and thorough cleaning, saving time and effort. They also help in maintaining the appearance and longevity of outdoor surfaces.
                                </p>
                            </li>
                            <br />
                            <li>
                                <b>5. Window Cleaning Tools:</b>
                                <p>
                                    Window cleaning tools, including squeegees, extension poles, and scrapers, are essential for achieving streak-free, crystal-clear windows.
                                    Invest in high-quality tools for effective and efficient window cleaning. <br />
                                    <b>Benefits:</b> Proper window cleaning tools ensure sparkling, streak-free windows, enhancing the overall aesthetic of any space.
                                </p>
                            </li>
                            <br />
                            <li>
                                <b>Conclusion:</b>
                                <p>
                                    Investing in high-quality cleaning equipment is vital for maintaining cleanliness and hygiene in residential and commercial spaces.
                                    Splendid Cleaning Equipment offers a wide range of top-notch cleaning tools and machines designed to deliver exceptional performance and results.
                                    From vacuum cleaners and floor scrubbers to steam cleaners and window cleaning tools, our products are designed to meet your specific cleaning needs.
                                </p>
                            </li>
                        </ul>
                    </div>

                </div>

                <Footer />
                <span className="w-full bg-white text-black/60 flex justify-between text-[.8rem] xl:pl-6 py-3 pl-4 pr-8 xl:pr-10">
                    <p>Developed by <a href="https://linktr.ee/Volshauz?ltsid=207b9289-a777-4717-8a69-f1ab494861f2" target="_blank"><b>Volshauz</b></a></p>
                    <p>2023 ©️ All rights reserved</p>
                </span>
            </main>

        </div>
    )
}
