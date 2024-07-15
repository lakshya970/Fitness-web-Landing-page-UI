import React from "react";
import body from "../assets/body.png";
import { ratings } from "../constant";

const Hero = () => {
  return (
    <main className="mt-10 md:mx-[100px] ">
      <div className="md:flex md:justify-center gap-6  mt-10 md:flex-none  ">
        <div className=" text-center md:text-start  md:w-[600px] ">
          <div className=" absolute h-[400px] w-[400px]  rounded-full top-10 hidden md:block md:right-[160px] bg-black/30 isolate"></div>
          <div
            className=" absolute h-[250px] w-[250px]  rounded-full top-20 
           md:right-[230px] bg-purple-300/50"
          ></div>

          <div className="moves absolute h-[400px] w-[400px]  rounded-full top-[200px] right-[360px] bg-gradient-to-r from-blue-950/50 to-purple-700/50 "></div>
          <span className=" uppercase isolate font-medium text-sm text-purple-300/50">
            train smarter, get stronger
          </span>
          <h1 className=" text-5xl text-wrap font-bold mt-3 isolate capitalize ">
            simple fitness experience for everyone.
          </h1>
          <p className="mt-10 isolate text-sm text-white/50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tenetur
            nobis?
          </p>

          <form className="bg-white/40 mt-8 flex  rounded-sm isolate shadow- mx-6 md:mx-0 ">
            <input
              type="text"
              className=" bg-transparent focus:outline-none w-full text-white placeholder:text-white px-3"
              placeholder="Enter your name"
            />
            <button className=" font-medium bg-gradient-to-r from-purple-600/50 to-blue-600 h-[60px] w-[150px] rounded-r-sm ">
              join now
            </button>
          </form>
          <div className="flex justify-center md:justify-start  items-center gap-12 isolate mt-7">
            {ratings.map(({ rate, name }) => (
              <div className="">
                <h1 className="text-3xl ">
                  {rate}
                  <span className="font-bold">K</span>
                </h1>
                <p className=" capitalize mt-4 text-sm text-white/40">{name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:block isolate">
          <img
            src={body}
            alt=""
            className="w-[400px]
          truncate isolate "
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
