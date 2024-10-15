"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import Tabbutton from "./Tabbutton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul
        className="list-disc pl-2"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <li>Node.js</li>
        <li>React</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>Next.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul
        className="list-disc pl-2"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <li>Educators</li>
        <li>Sir Syed Govt Girls College</li>
        <li>Pursuing IT, Metaverse 3.0, Web 3.0</li>
      </ul>
    ),
  },
  {
    title: "Certificates",
    id: "certificates",
    content: (
      <ul
        className="list-disc pl-2"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <li>Certificate of IT, Metaverse, Web 3.0</li>
      </ul>
    ),
  },
];

const Aboutsection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [, startTransition] = useTransition();
  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about.png" alt="about" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full"></div>
        <div>
          <h2 className="text-4xl font-bold text-white mb-4"data-aos="flip-right">About ME</h2>
          <p className="text-base lg:text-lg"data-aos="flip-right">
            As a dedicated Frontend Developer with a strong interest in creating
            seamless user experiences, I enjoy blending creativity with
            technology,an aspiring Frontend Developer with a strong foundation
            in web technologies like HTML, CSS, and JavaScript. Alongside my
            education in IT, I’ve been working on personal projects to sharpen
            my skills in frameworks like React and Next.js. My passion lies in
            designing intuitive interfaces and writing clean, efficient code.
            When I’m not coding, I love exploring new tech trends, collaborating
            on exciting projects, and continuously pushing the boundaries of my
            skills.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <Tabbutton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </Tabbutton>

            <Tabbutton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </Tabbutton>

            {/* <Tabbutton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </Tabbutton> */}

            <Tabbutton
              selectTab={() => handleTabChange("certificates")}
              active={tab === "certificates"}
            >
              Certificates
            </Tabbutton>
          </div>

          {/* Safely check for tab content */}
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content || (
              <p>No content available.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutsection;
