import React from 'react'
import { RxCross2 } from "react-icons/rx";
function PopUp() {
  return (
    <div className="bg-white w-[150px] text-xs shadow-2xl p-2 flex flex-col fixed bottom-0 right-0 ">
      <div className="self-end">
        <RxCross2 />
      </div>
      <div className="flex flex-col gap-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquid
          veniam maxime rem quisquam perspiciatis iusto. Corrupti dignissimos
          o
        </p>
        <div className="bg-[#4d154a] p-1 text-white text-center rounded">
          ACCEPT ALL COOKIES
        </div>
      </div>
    </div>
  );
}

export default PopUp