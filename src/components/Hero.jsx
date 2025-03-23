import React from "react";

function Hero() {
  return (
    <div className=" flex justify-center items-center gap-5 p-5">
      <div className="w-[50%] flex flex-col gap-5 ">
        <h1 className=" text-5xl font-bold">Slack is where the future works</h1>
        <p>
          Transform the way you work with one place for everyone and everything
          you need to get stuff done.
        </p>
        <div className="flex gap-2">
          <div className="bg-[#4d154a] p-1 text-white  w-[150px] text-center rounded">
            TRY FOR FREE
          </div>
          <div className="bg-sky-500 w-fit flex p-0.5 px-2 gap-0.5 text-white rounded">
            <img
              src="https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg"
              alt="google logo"
              className="w-12"
            />
            <p>SIGN UP WITH GOOGLE</p>
          </div>
        </div>
      </div>

      <div className="w-[50%]">
        <img
          src="https://www.mocoapp.com/system/integration/image/9/slack-anleitung-moco.png"
                  alt="w-[100%]"
                  className="rounded-2xl"
        />
      </div>
    </div>
  );
}

export default Hero;
