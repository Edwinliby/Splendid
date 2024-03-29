import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import fsPromises from "fs/promises";
import path from "path";

function Products(props) {

  const [index, setIndex] = useState(0);
  const tabs = props.tabs;

  return (
    <div className="h-fit w-full">
      <Head>
        <title>Splendid-Products</title>
      </Head>
      <Header />

      <main className="flex lg:justify-center items-center">

        <div className="text-black w-full h-fit md:pt-[4.5rem] flex flex-col lg:flex-row">
          <div className="flex overflow-x-scroll scroll-m-0 bg-white  sticky top-[4.8rem] lg:top-[4.5rem] w-full h-[4rem] lg:flex-col min-w-[13rem] lg:w-[15rem] lg:justify-center lg:h-screen border-b lg:border-b-0 lg:border-r border-gray/50 text-black">
            {tabs.map((tab, i) => (
              <span
                key={i}
                className="flex items-center text-[.8rem] md:text-base px-4 py-3 z-[1] hover:bg-black/20 w-full transition-all border-r border-gray/50 lg:border-0 duration-500 ease-in-out"
                style={{ background: index === i ? "rgb(134 136 136 / 0.3)" : "none" }}
                onClick={() => {
                  setIndex(i);
                  window.scrollTo(0, 0);
                }}>
                {tab.name}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-10 px-4 pt-24 lg:pt-0 lg:px-[2rem] md:pt-6 py-16">
            {tabs[index].sections.map((section) => (
              <div key={section.title}>
                <h1 className=" font-clash uppercase font-semibold text-4xl py-4 tracking-wider">
                  {section.title}
                </h1>
                <p className="md:text-[1.1rem]">
                  {section.desc}
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-10 lg:gap-16 w-fit h-fit pt-6 rounded-sm">
                  {section.product.map((pdt) => (
                    <div
                      key={pdt.name}
                      className=" shadow-2xl hover:shadow-main_primary/75 transition-all duration-500 ease-in-out">
                      <div>
                        <a href={pdt.link} target="_blank">
                          <Image
                            src={pdt.img}
                            alt={pdt.name}
                            width={300}
                            height={300}
                            className="object-contain w-[18rem] h-[18rem] lg:w-[12rem] lg:h-[12rem] bg-white"
                          />
                        </a>
                      </div>
                      <div className="flex flex-col p-2 bg-white/50 ">
                        <h1 className=" text-black font-chakra font-semibold text-[1.2rem] uppercase">
                          {pdt.name}
                        </h1>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <span className="w-full bg-white text-black/60 flex justify-between text-[.6rem] sm:text-[.8rem] xl:pl-6 py-3 px-2 sm:pl-4 sm:pr-8 xl:pr-10">
        <p>Developed by <a href="https://www.volshauz.com/" target="_blank"><b>Volshauz</b></a></p>
        <p>2024 ©️ All rights reserved</p>
      </span>
    </div>
  );
}

export default Products;

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "/products.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData,
  };
}
