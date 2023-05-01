import React from "react";

export default function Loader() {

  return (
    <div className="loader w-screen h-screen bg-white z-[28]  flex items-center justify-center">
      <img src="/loader.gif" alt="loader" className="object-contain w-[35rem] h-[35rem]"/>
    </div>
  )
}
