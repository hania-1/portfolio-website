"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export const Hero_section = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m {/* Use &apos; for the apostrophe */}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Hania!",
                1000,
                "Web Developer",
                1000,
                "Frontend Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl ">
            Hi, my name is Hania, and I&apos;m a passionate Frontend Developer with
            a keen interest in creating modern and user-friendly web
            experiences. Currently, Im focused on enhancing my skills in web
            development while learning new technologies in IT. I enjoy building
            creative projects and finding solutions to everyday problems through
            code.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-300 text-white">
              Hire Me
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero.png"
              alt="hero"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero_section;

