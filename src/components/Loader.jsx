import React from "react";
import Image from "next/image";

export default function Loader() {

  return (
    <div className="loader w-screen h-screen bg-white z-[28]  flex items-center justify-center">
      <Image
        src="/loader.gif"
        alt="loader"
        width={1200}
        height={1200}
        className="object-contain w-[35rem] h-[35rem]" />
    </div>
  )
}
