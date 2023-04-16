import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function About() {

  const leftDivRef = useRef(null);
  const image1 = useRef(null);
  const image2 = useRef(null);
  const image3 = useRef(null);
  const image4 = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      image1.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        delay: 1.5,
        scrollTrigger: {
          trigger: image1.current,
          start: "top 80%",
          end: "bottom 80%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      image2.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        delay: 2,
        scrollTrigger: {
          trigger: image2.current,
          start: "top 80%",
          end: "bottom 80%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      image3.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        delay: 2.5,
        scrollTrigger: {
          trigger: image3.current,
          start: "top 80%",
          end: "bottom 80%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      image4.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        delay: 3,
        scrollTrigger: {
          trigger: image4.current,
          start: "top 80%",
          end: "bottom 80%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);


  const handleScroll = (e) => {
    const leftDiv = leftDivRef.current;
  };

  return (
    <div className="flex flex-col lg:flex-row relative font-clash">

      <div className=" lg:sticky bg-transparent top-0 left-0 flex flex-col grow-[1] lg:max-w-[45%] h-fit lg:h-[100vh] justify-center p-4 lg:p-10 lg:pl-16 gap-4">
        <h1 className="flex items-center font-medium text-[2.5rem] gap-4">
          What is{" "}
          <img src="/logo.png" alt="logo" width={500} height={500} className="w-auto h-[5rem]" />
        </h1>
        <p className="text-black/80 text-[1.1rem]">
          SPLENDID CLEANING MATERIAL TRADING LLC is one of the most acclaimed
          Janitorial supplies Company headquartered in UAE supplying cleaning
          and hygiene products to a multitude of industries. Since inception
          we have been involved in major projects in the region.
        </p>
        <button className="bg-[#FF9D42] w-fit z-[2] border-[2.5px] hover:border-gray/50 transition-all duration-300 ease-in-out text-white font-medium font-montserrat text-[1rem]  px-4 py-2 rounded-full">
          More Details
        </button>
      </div>

      <div className="z-[3]  flex flex-col group-[2] lg:p-10 lg:pr-12 w-full" ref={leftDivRef}>

        <div ref={image1} className="h-fit lg:h-[100vh] p-4 flex flex-col justify-center gap-4 lg:mt-14">
          <div className="flex items-center gap-6">
            <div className="flex relative">
              <div className="w-9 h-8 bg-black rounded-full border-[2px] border-black/50"></div>
              <div className="absolute left-4 w-9 h-8 rounded-full border-[2px] border-black/50"></div>
            </div>
            <h1 className="flex items-center text-main_primary font-medium text-[1.5rem] md:text-[2.3rem] gap-2">
              Cleaning equipment and supplies
            </h1>
          </div>
          <p className="text-black/80 text-[1.1rem]">
            Splendid UAE, specializes in providing cleaning equipment and supplies for both commercial and residential use.
            Our wide range of products includes cleaning chemicals, janitorial equipment, and industrial cleaning machines.
          </p>
          <div ref={image1} className="overflow-hidden pt-8">
            <Image src="/assects/ab-1.png" alt="Cleaning equipment and supplies" width={700} height={700} className="w-auto h-auto" />
          </div>
        </div>

        <div ref={image2} className="h-fit lg:h-[100vh] p-4 flex flex-col justify-center gap-4 lg:mt-14">
          <div className="flex items-center gap-6">
            <div className="flex relative">
              <div className="w-9 h-8 bg-black rounded-full border-[2px] border-black/50"></div>
              <div className="absolute left-4 w-9 h-8 rounded-full border-[2px] border-black/50"></div>
            </div>
            <h1 className="flex items-center text-main_primary font-medium text-[1.5rem] md:text-[2.3rem] gap-2">
              Customized solutions
            </h1>
          </div>
          <p className="text-black/80 text-[1.1rem]">
            We take pride in off ering customized cleaning solutions that are tailored to meet the unique needs of our clients.
            Our team works closely with our customers to understand their specifi c requirements and provide customized solutions that meet their needs.
          </p>
          <div ref={image2} className="overflow-hidden">
            <Image src="/assects/ab-2.png" alt="Cleaning equipment and supplies" width={800} height={800} className="w-auto h-auto" />
          </div>
        </div>

        <div ref={image3} className="h-fit lg:h-[100vh] p-4 flex flex-col justify-center gap-4 lg:mt-14">
          <div className="flex items-center gap-6">
            <div className="flex relative">
              <div className="w-9 h-8 bg-black rounded-full border-[2px] border-black/50"></div>
              <div className="absolute left-4 w-9 h-8 rounded-full border-[2px] border-black/50"></div>
            </div>
            <h1 className="flex items-center text-main_primary font-medium text-[1.5rem] md:text-[2.3rem] gap-2">
              Technical expertise
            </h1>
          </div>
          <p className="text-black/80 text-[1.1rem]">
            Our team of highly skilled and experienced technicians is trained to provide technical support and maintenance for all our cleaning equipment.
            We off er installation, repair, and maintenance services to ensure that our equipment is always in top condition.
          </p>
          <div ref={image3} className="overflow-hidden">
            <Image src="/assects/ab-3.png" alt="Cleaning equipment and supplies" width={800} height={800} className="w-auto h-auto" />
          </div>
        </div>

        <div ref={image4} className="h-fit lg:h-[100vh] p-4 flex flex-col justify-center gap-4 lg:mt-14">
          <div className="flex items-center gap-6">
            <div className="flex relative">
              <div className="w-9 h-8 bg-black rounded-full border-[2px] border-black/50"></div>
              <div className="absolute left-4 w-9 h-8 rounded-full border-[2px] border-black/50"></div>
            </div>
            <h1 className="flex items-center text-main_primary font-medium text-[1.5rem] md:text-[2.3rem] gap-2">
              Training and education
            </h1>
          </div>
          <p className="text-black/80 text-[1.1rem]">
            We understand the importance of proper training and education for our clients.
            Therefore, we off er training and education programs to ensure that our customers can use our cleaning equipment and supplies safely and eff ectively.
            Our training programs focus on the proper use and maintenance of our products to ensure that customers get the most out of their investments.
          </p>
          <div ref={image4} className="overflow-hidden">
            <Image src="/assects/ab-4.png" alt="Cleaning equipment and supplies" width={800} height={800} className="w-auto h-auto" />
          </div>
        </div>

      </div>

    </div>
  );
}
