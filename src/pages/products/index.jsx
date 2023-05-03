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

      <main>

        <div className="text-black w-full h-fit md:pt-[5rem] flex flex-col lg:flex-row">
          <div className="flex overflow-x-auto sticky top-[4.5rem] w-full h-[4rem] lg:flex-col min-w-[13rem] lg:w-[15rem] lg:justify-center lg:h-screen bg-white border-b lg:border-b-0 lg:border-r border-gray/50 text-black">
            {tabs.map((tab, i) => (
              <span
                key={i}
                className="flex items-center text-[.8rem] md:text-base px-4 py-3 z-[1] hover:bg-black/20 w-full transition-all border-r border-gray/50 lg:border-0 duration-500 ease-in-out"
                style={{ background: index === i ? "rgb(134 136 136 / 0.3)" : "none" }}
                onClick={() => setIndex(i)}>
                {tab.name}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-10 px-4 lg:px-[6rem] md:pt-6 py-16">
            {tabs[index].sections.map((section) => (
              <div key={section.id}>
                <h1 className=" font-clash uppercase font-semibold text-4xl py-4">
                  {section.title}
                </h1>
                <p className="">
                  {section.desc}
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-10 lg:gap-16 w-fit h-fit pt-6 rounded-sm">
                  {section.product.map((pdt) => (
                    <div
                      key={pdt.id}
                      className=" shadow-2xl hover:shadow-main_primary/75 transition-all duration-500 ease-in-out">
                      <div>
                        <Image
                          src={pdt.img}
                          alt={pdt.name}
                          width={300}
                          height={300}
                          className="object-contain w-[18rem] h-[18rem] bg-white"
                        />
                      </div>
                      <div className="flex flex-col p-2 bg-white/50 ">
                        <h1 className=" text-black font-chakra font-semibold text-[1.5rem] ">
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
