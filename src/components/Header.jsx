import React from "react";
import { links } from "../constant";
import Hero from "./Hero";

const Header = () => {
  return (
    <header className="h-screen bg-gradient-to-r from-blue-950/80 to-purple-700/80 text-white">
      <nav className="flex h-[90px] flex items-center justify-between mx-4 md:mx-0 md:justify-around sticky top-0 ">
        <div className=" font-semibold text-2xl">Fitness Pro</div>
        <div className="hidden md:flex capitalize">
          {links.map((value) => (
            <p className="px-2 capitalize text-purple-300">{value.name}</p>
          ))}
        </div>
        <div className=" px-6 py-3 rounded-sm bg-gradient-to-t from-purple-200/30 to-blue-800/30 cursor-pointer">
          <button className=" bg-transparent capitalize font-semibold">
            get started
          </button>
        </div>
      </nav>
      <Hero />
    </header>
  );
};

export default Header;
