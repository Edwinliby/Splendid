import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt } from 'react-icons/fa'
import { ImLocation2 } from 'react-icons/im'
import { IoMail } from 'react-icons/io5'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

export default function Footer() {
    return (
        <div className='font-montserrat border-t-[.8px] bg-white border-gray/50 p-4 md:p-8 flex flex-col lg:flex-row gap-10 justify-between xl:items-center'>
            <div className='flex flex-col gap-8'>
                <Image src="/logoGray.png"
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
                    <Link href="/" className='rounded-full border-[1.5px] border-main_primary p-2 text-main_primary'><FaFacebookF size={35} /></Link>
                    <Link href="/" className='rounded-full border-[1.5px] border-main_primary p-2 text-main_primary'><FaTwitter size={35} /></Link>
                    <Link href="/" className='rounded-full border-[1.5px] border-main_primary p-2 text-main_primary'><FaInstagram size={35} /></Link>
                    <Link href="/" className='rounded-full border-[1.5px] border-main_primary p-2 text-main_primary'><FaLinkedin size={35} /></Link>
                </div>
            </div>

            <div className='flex gap-8 flex-col md:flex-row md:items-center w-full md:justify-between'>
                <div className='text-black/50 flex flex-col gap-3 xl:pl-[10rem]'>
                    <b className='text-xl'>UAE</b>
                    <span className='flex gap- items-start'>
                        <ImLocation2 size={20} />
                        <p>SPC Free Zone <br /> Al Salama Area Sharjah <br /> 346347</p>
                    </span>
                    <span className='flex gap-2 items-center'>
                        <FaPhoneAlt size={20} />
                        <Link href="tel:+971 6 543 0000">+971 6 543 0000</Link>
                    </span>
                    <span className='flex gap-2 items-center'>
                        <IoMail size={20} />
                        <Link href="mailto:">mailhere.com</Link>
                    </span>
                </div>

                <div className='flex flex-col gap-4 px-4 justify-between'>
                    <div>
                        <div className='flex justify-end'>
                            <div className='flex w-[15rem] h-fit p-4 rounded-full bg-black/10 text-main_primary justify-between'>
                                <span className='flex gap-2 items-center'>
                                    <IoMail size={25} />
                                    <p className='text-black/60 text-[.8rem]'>Send enquiry</p>
                                </span>
                                <BsFillArrowRightCircleFill size={25} />
                            </div>
                        </div>

                        <div className='flex gap-[1.1rem] font-medium justify-center sm:justify-end pt-6'>
                            <Link href="/" className='text-main_primary font-semibold'>Home</Link>
                            <Link href="/products">Products</Link>
                            {/* <Link href="/">Brands</Link> */}
                            <Link href="/">About</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
