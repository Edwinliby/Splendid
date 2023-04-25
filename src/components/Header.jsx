import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sling as Hamburger } from "hamburger-react";

export default function Header() {

    const [navbar, setNavbar] = useState(false);

    return (
        <header className='fixed top-0 w-full z-50 tramsition-all duration-300 ease-in-out'>
            <nav className={`w-full bg-white/60 shadow backdrop-blur-md`}>
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center lg:flex lg:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 lg:block">
                            <Link href="/">
                                <Image src="/logo.png" alt="logo"
                                    width={100}
                                    height={100} />
                            </Link>
                            <div className="lg:hidden">
                                <Hamburger
                                    color="black"
                                    label="Show menu"
                                    direction="right"
                                    size={25}
                                    rounded={true}
                                    toggle={setNavbar}
                                    toggled={navbar}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={`flex-1 font-montserrat font-medium justify-self-center pb-3 mt-8 lg:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'}`}>
                            <ul className="items-center justify-center text-black md:flex md:space-x-6 md:space-y-0">
                                <li className="Hover:bg-gray/80 p-4">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="Hover:bg-gray/80 p-4">
                                    <Link href="/Industry">Industries Served</Link>
                                </li>
                                {/* <li className="Hover:bg-gray/80 p-4">
                                    <Link href="/">Brands</Link>
                                </li> */}
                                <li className="Hover:bg-gray/80 p-4">
                                    <Link href="/products">Product</Link>
                                </li>
                                <li className="Hover:bg-gray/80 p-4">
                                    <Link href="/about">About us</Link>
                                </li>
                                <li className={`Hover:bg-gray/80 p-4 ${navbar ? 'block' : 'hidden'}`}>
                                    <Link href="/">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link href="/" className="hidden lg:block font-montserrat font-medium rounded-full px-6 py-2 border-[2px]   border-black hover:bg-black/70 hover:text-white transition-all duration-300 ease-in-out">Contact</Link>
                </div>
            </nav>
        </header>
    );
}