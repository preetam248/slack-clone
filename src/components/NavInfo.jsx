import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
function NavInfo() {
  return (
    <div className="bg-sky-700 text-white p-2 px-5 rounded-3xl font-light flex items-center justify-between">
      <p className="flex">
        <span className="font-normal">Stack is your digital HQ.</span> Meet the
        new features keeping terms connected in a work-form-anywhere world.
        <span className="font-normal underline flex items-center gap-1">
          Lets go
          <FaArrowRight />
        </span>
      </p>
      <div>
        <RxCross2 />
      </div>
    </div>
  );
}

export default NavInfo;
