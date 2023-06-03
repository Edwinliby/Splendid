import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FaHospitalUser, FaCity } from 'react-icons/fa'
import { MdHealthAndSafety } from 'react-icons/md'
import { BsFillBuildingsFill } from 'react-icons/bs'

const boxContent = [
    {
        icon: <FaHospitalUser size={50} className='text-main_primary' />,
        title: 'Hospitality',
        desc: 'Immaculate spaces, exceptional experiences: Cleaning excellence in the Hospitality industry.',
        id: "#Hospitality"
    },
    {
        icon: <FaHospitalUser size={50} className='text-main_primary' />,
        title: 'Education',
        desc: 'Education shines brighter with a clean and welcoming environment.',
        id: "#Education"
    },
    {
        icon: <MdHealthAndSafety size={50} className='text-main_primary' />,
        title: 'Health Care',
        desc: 'Pristine cleanliness for a healthier care environment, enhancing well-being.',
        id: "#HealthCare"
    },
    {
        icon: <FaCity size={50} className='text-main_primary' />,
        title: 'Facility Management',
        desc: 'Simplify Facility Management: Streamline Operations with Efficient and Effective Cleaning Solutions.',
        id: "#FacilityManagement"
    },
    {
        icon: <BsFillBuildingsFill size={50} className='text-main_primary' />,
        title: 'Commercial',
        desc: 'Unleash the Cleaning Power for a Pristine Commercial Space, Every Single Time!',
        id: "#Commercial"
    },
]


export default function Industry() {
    return (
        <div>
            <Head>
                <title>Splendid-Industry Served</title>
            </Head>

            <Header />
            <main className='w-full h-screen pt-[4.5rem]'>
                <div className='relative h-fit'>
                    <Image
                        src="/clean.jpg"
                        alt="Picture of the author"
                        width={1920}
                        height={1080}
                        className='object-cover h-[15rem] lg:h-[23rem]'
                    />
                    <div className='absolute flex flex-wrap xl:w-[50%] top-8 left-4 right-4 lg:top-[6rem] lg:left-[6rem] font-clash'>
                        <h1 className='text-[2rem] lg:text-[4rem] text-white uppercase font-semibold'>Industry Served</h1>
                        <p className='text-white  text-[.8rem] lg:text-[1.1rem] tracking-wide lg:w-[85%] glass p-4 rounded-xl'>
                            At SPLENDID, we understand that high-quality commercial cleaning needs just the right systems and supplies.
                            If you want to find a supplier able to take on your facility’s specific cleaning challenges, you need one with industry-specific expertise.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col xl:flex-row gap-2 p-4 lg:mx-[4rem] lg:px-[3rem]'>
                    {
                        boxContent.map((item, index) => (
                            <a href={item.id} key={index}>
                                <div className='flex flex-col justify-center p-4 h-[15rem] border border-gray/50 rounded-md hover:bg-gray/10'>
                                    {item.icon}
                                    <h2 className='font-semibold text-[1.5rem]'>{item.title}</h2>
                                    <p className='pt-2'>{item.desc}</p>
                                </div>
                            </a>
                        ))
                    }
                </div>

                <div className='flex flex-col font-montserrat gap-6 justify-center p-4 lg:mx-[4rem] lg:px-[3rem] mb-8'>

                    <p className='text-[1.1rem] py-4'><b>SPLENDID</b> is a leading provider of high-quality commercial cleaning solutions, with industry-specific expertise and a 'value-added' approach.
                        We work with a diverse range of industries and segments, offering tailored cleaning solutions to meet unique requirements. Our core markets include Hospitality,
                        Education, Health care, Facility Management, and Commercial sectors. Contact us today to experience the SPLENDID difference.
                    </p>

                    <div id='Hospitality'>
                        <h2 className='font-bold text-[2.2rem]'>Hospitality</h2>
                        <p className='pt-2'>
                            SPLENDID recognizes that maintaining a clean and hygienic hotel environment is a daunting task, especially with diverse guest preferences.
                            We offer comprehensive hotel housekeeping cleaning products and disinfectant solutions, coupled with unparalleled service and expert training,
                            to provide the best public space and hotel cleaning experience.

                            <img src="https://info.ehl.edu/hubfs/Blog-EHL-Insights/Blog-Header-EHL-Insights/cleaning%20protocol.jpeg"
                                alt="Picture of the author"
                                width={500}
                                height={500}
                                className='object-cover h-[12rem] mt-4 mr-4 rounded-md w-[23rem] md:float-left'
                            />
                            Our wide range of housekeeping and janitorial supplies is specially designed to help you achieve the best results.
                            <br /> <br />
                            Our laundry, ware washing, floor care, and ready-to-use products, along with reliable representatives, ensure mechanical operations run smoothly and can accommodate all hospitality needs.
                            We understand the importance of consistent, reliable service, and offer scheduled service visits to ensure we meet your business needs.
                            Our customers, including international hotel chains, high-end restaurants, and catering establishments,
                            have provided us with a long list of worldwide references. Trust SPLENDID to be your go-to resource for all your hotel cleaning needs.
                        </p>
                    </div>

                    <div id='Education'>
                        <h2 className='font-bold text-[2.2rem]'>Education</h2>
                        <p className='pt-2'>
                            SPLENDID recognizes the importance of using environmentally friendly cleaning products in the educational sector.
                            <img src="https://www.csginc.com/wp-content/uploads/2022/05/school-img.jpg"
                                alt="Picture of the author"
                                width={500}
                                height={500}
                                className='object-cover h-[12rem] mt-4 mr-4 rounded-md w-[23rem] md:float-right'
                            />
                            Our range of eco-friendly cleaning solutions and microfiber cleaning tools produce better outcomes than traditional products while improving indoor air quality,
                            resulting in a reduction in absenteeism caused by asthma and allergies. <br /> <br />
                            Our microfiber cloths and mops have revolutionized the cleaning industry, providing superior cleaning results while saving money and promoting a healthier environment.
                            With only small amounts of non-toxic chemicals and water needed for tougher areas,
                            our cleaning staff can efficiently clean without the need for heavy buckets.
                            At SPLENDID, we supply top-quality microfiber cloths, microfiber mops, cleaning trolleys, and paper products from Italy that are specially designed for the educational sector.
                            Our products are tailored to reduce the spread of germs and viruses,
                            making them ideal for use in both government and private educational institutions in the UAE.
                        </p>
                    </div>

                    <div id='HealthCare'>
                        <h2 className='font-bold text-[2.2rem]'>Health care</h2>
                        <p className='pt-2'>
                            At SPLENDID, we recognize that maintaining a clean and safe environment is crucial for healthcare facilities.
                            Our goal is to provide top-quality cleaning products and services that are tailored to the unique needs of each facility.
                            <img src="https://jncsinc.com/wp-content/uploads/2020/08/Medical-and-Healthcare-Cleaning.jpg"
                                alt="Picture of the Health care cleaning"
                                width={500}
                                height={500}
                                className='object-cover h-[12rem] mt-4 mr-4 rounded-md w-[23rem] md:float-left'
                            />
                            We understand that hospitals have strict requirements for cleanliness and infection prevention and control.
                            Therefore, we offer a range of products that are specially formulated for hospitals, including Brix trolleys,
                            janitorial and custodial supplies, sanitisers, disinfectants, and medical exam gloves. <br /> <br />
                            Our experienced team works closely with hospital groups to ensure that our products and services meet their high standards.
                            We understand that healthcare facilities require intensive and frequent cleaning to maintain a low pathogenic burden and provide a healthy and safe environment for patients,
                            families, and staff. Our solutions are designed to save time and money while providing the best possible results.
                            At SPLENDID, we are committed to helping healthcare facilities achieve their cleaning goals while ensuring the safety and well-being of their patients and staff.
                            Contact us today to learn more about our healthcare cleaning solutions.
                        </p>
                    </div>

                    <div id='Commercial'>
                        <h2 className='font-bold text-[2.2rem]'>Commercial</h2>
                        <p className='pt-2'>
                            Commercial cleaning is a complex process that involves various cleaning methods, chemicals, and equipment to achieve excellent results.
                            <img src="https://www.cleanlink.com/resources/editorial/2017/janitor-highrise-21145.jpg"
                                alt="Picture of commercial cleaning"
                                width={500}
                                height={500}
                                className='object-cover h-[12rem] mt-4 mr-4 rounded-md w-[23rem] md:float-right'
                            />
                            It covers a wide range of tasks, including general cleaning, floor cleaning, window cleaning,
                            deep cleaning of sanitary facilities and kitchens, litter picking, and graffiti removal.<br /> <br />
                            At SPLENDID, we understand the needs of commercial cleaning companies and provide a comprehensive range of janitorial supplies to meet their requirements.
                            Our high-performance products are carefully selected from around the world and combined with excellent services at competitive prices to ensure customer satisfaction.
                            We are committed to delivering the best solutions for tough cleaning challenges and are the Smart Choice for any commercial cleaning needs.
                        </p>
                    </div>

                    <div id="FacilityManagement">
                        <h2 className='font-bold text-[2.2rem]'>Facility Management</h2>
                        <p className='pt-2'>
                            Maintaining a clean and safe commercial building is crucial for the health and well-being of employees and visitors.
                            At SPLENDID, we understand the importance of using the right cleaning chemicals, products and equipment to achieve this goal. <br /> <br />
                            <img src="https://www.ipserv.co.uk/wp-content/uploads/2021/06/07-C-Office-Cleaning-800x450-1.jpg"
                                alt="Picture of the Facility Management cleaning"
                                width={500}
                                height={500}
                                className='object-cover h-[12rem] mt-4 mr-4 rounded-md w-[23rem] md:float-left'
                            />
                            We offer a wide range of facility maintenance supplies that include cleaning and disinfecting products for common areas and high-touch surfaces,
                            as well as premium chemicals, tools and equipment for floor care programs. With our extensive experience in meeting the facility service needs of various industries such as retail spaces,
                            industrial plants and office buildings, we are well-equipped to help you keep your premises sparkling clean and safe.
                            Whether you need mops, brooms, cleaning chemicals, personal protective equipment, or other facility maintenance management supplies,
                            SPLENDID is your one-stop shop for janitorial and maintenance supplies. Our commitment to providing high-quality products and excellent customer service,
                            combined with our competitive pricing, makes us the ideal distributor for all your facility service needs.
                        </p>
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
