import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'
import { IoMail } from 'react-icons/io5'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { FiArrowDownRight } from 'react-icons/fi'
import { GiRotaryPhone } from 'react-icons/gi'

export default function Footer() {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <div className='relative font-montserrat border-t-[.8px] bg-white border-gray/50 p-4 md:p-8 flex flex-col lg:flex-row gap-10 justify-between xl:items-center'>

            <div className="text-royal_blue absolute top-[-1.25rem] right-4 lg:right-10 hover:scale-125 bg-white border rounded-2xl -rotate-[135deg] transform transition-all duration-500 ease-in-out">
                <FiArrowDownRight onClick={scrollToTop} size="2.5rem" />
            </div>

            <div className='flex flex-col gap-8'>
                <Image src="/logo.png"
                    alt="gray-logo"
                    width={500}
                    height={500}
                    className="w-[8rem] h-[4rem]"
                />
                <p className='text-black/50 font-medium text-[.9rem]'>
                    Cleaning doesn’t have to be tedious <br />
                    and boring if you have a right cleaning partner!
                </p>
                <div className='flex w-full gap-7 items-center justify-start'>
                    <Link href="https://www.facebook.com/profile.php?id=100090676724827" className='rounded-full border-[1.5px] border-main_primary hover:scale-110 transition-all duration-300 ease-in-out p-2 text-royal_blue'><FaFacebookF size={35} /></Link>
                    <Link href="https://twitter.com/UaeSplendid" className='rounded-full border-[1.5px] border-main_primary hover:scale-110 transition-all duration-300 ease-in-out p-2 text-royal_blue'><FaTwitter size={35} /></Link>
                    <Link href="https://instagram.com/splendid_uae?igshid=YmMyMTA2M2Y" className='rounded-full border-[1.5px] border-main_primary hover:scale-110 transition-all duration-300 ease-in-out p-2 text-royal_blue'><FaInstagram size={35} /></Link>
                    <Link href="https://www.linkedin.com/company/splendiduae/" className='rounded-full border-[1.5px] border-main_primary hover:scale-110 transition-all duration-300 ease-in-out p-2 text-royal_blue'><FaLinkedin size={35} /></Link>
                </div>
            </div>

            <div className='flex gap-8 flex-col md:flex-row md:items-center w-full md:justify-between'>
                <div className='text-black/50 flex flex-col gap-4 xl:pl-[10rem]'>
                    <b className='text-xl'>UAE</b>
                    <span className='flex gap-2 items-start'>
                        <ImLocation2 size={20} />
                        <p>Splendid Cleaning Material Trading LLC <br /> Industrial area #4, P.O.Box : 67619 <br /> Sharjah, UAE</p>
                    </span>
                    <span className='flex gap-2 items-center mt-[.5rem] hover:text-main_primary transition-all duration-300 ease-in-out'>
                        <FaPhoneAlt size={20} />
                        <Link href="tel:+971 6 543 0000">+971 56 310 1817</Link>
                    </span>
                    <span className='flex gap-2 items-center mt-[.5rem] hover:text-main_primary transition-all duration-300 ease-in-out'>
                        <GiRotaryPhone size={20} />
                        <Link href="tel:+971 6 543 0000">06-5398390</Link>
                    </span>
                    <span className='flex gap-2 items-center mt-[.5rem] hover:text-main_primary transition-all duration-300 ease-in-out'>
                        <IoMail size={20} />
                        <Link href="mailto:">info@splendiduae.com</Link>
                    </span>
                </div>
            </div>

            <div className='flex flex-col gap-4 px-4 justify-between'>
                <div className='flex justify-end'>
                    <Link href="/contact">
                        <div className='flex w-[15rem] h-fit p-4 rounded-full bg-black/10 text-royal_blue justify-between'>
                            <span className='flex gap-2 items-center'>
                                <IoMail size={25} />
                                <p className='text-black/60 text-[.8rem]'>Send enquiry</p>
                            </span>
                            <BsFillArrowRightCircleFill size={25} />
                        </div>
                    </Link>
                </div>

                <div className='flex gap-[1.1rem] font-medium justify-center sm:justify-end pt-6'>
                    <Link href="/" className='text-royal_blue font-semibold'>Home</Link>
                    <Link href="/products">Products</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/about">About</Link>
                </div>
            </div>
        </div>
    )
}
