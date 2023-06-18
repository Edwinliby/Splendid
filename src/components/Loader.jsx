import React from "react";

export default function Loader() {

  return (
    <div className="loader w-screen h-screen bg-white z-[28]  flex items-center justify-center">
      <video src="/ll.mp4" autoPlay loop muted className="object-contain w-[23rem] h-[23rem]"></video>
    </div>
  )
}
