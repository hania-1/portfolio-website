"use client";

import React, { useState } from "react";
import Projectcard from "./Projectcard";
import Projecttag from "./Projecttag";

const projectsData = [
    {
        id: 1,
        title: "Recipe Maker Application",
        description: "A recipe maker which is done by using just Typescript & npm",
        image: "/recipe.png", // Correct path
        tags: ["All", "Web"],
        gitUrl: "https://github.com/hania-1/recipe-maker",
        previewUrl:
          "https://www.linkedin.com/posts/hania-rizwan-a575072b6_innovationnation-globalimpact-futureforward-activity-7194956664607821824-PD_O/?utm_source=share&utm_medium=member_desktop",
      },
  {
    id: 2,
    title: "BMI Calculator",
    description: "This project is done by using Next.js , Tailwindcss & JS",
    image: "/bmi.png", // Correct path
    tags: ["All", "Web"],
    gitUrl: "https://github.com/hania-1/BMI-calculator",
    previewUrl:
      "https://www.linkedin.com/posts/hania-rizwan-a575072b6_30daysof30projects-activity-7239995592930717696-eU37/?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 3,
    title: "Todo List Application",
    description: "A fun project which is done by using Next.js , Tailwindcss , JS & Shadcn Ui",
    image: "/todo.png", // Correct path
    tags: ["All", "Web"],
    gitUrl: "https://github.com/hania-1/todo-app",
    previewUrl:
      "https://www.linkedin.com/posts/hania-rizwan-a575072b6_nextjs-react-tailwindcss-activity-7245431969340084226-4inv/?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 4,
    title: "Snake Game Application",
    description: "This game use Next.js , Tailwindcss , React , Shadcn Ui & Vercel",
    image: "/snake.png", // Correct path
    tags: ["All", "Mobile"],
    gitUrl: "https://github.com/hania-1/snake-game",
    previewUrl:
      "https://www.linkedin.com/posts/hania-rizwan-a575072b6_snakegame-nextjs-react-activity-7247609691642449920-SPYM/?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 5,
    title: "Pomodoro Timer App",
    description: "Its a Next.js Pomodoro Timer App with Shadcn Ui vercel & Tailwindcss",
    image: "/pomodoro.png", // Correct path
    tags: ["All", "Web"],
    gitUrl: "https://github.com/hania-1/Pomodoro-Timer-App",
    previewUrl:
      "https://www.linkedin.com/posts/hania-rizwan-a575072b6_30daysof30projects-nextjs-react-activity-7241083370804326400-uEXl/?utm_source=share&utm_medium=member_desktop",
  },
];

const Projectsection = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tags.includes(tag)
  );

  return (
    <>
      <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
      <Projecttag
        name="All" // Added 'name' prop
        onClick={handleTagChange} // No need to modify this, handleTagChange will receive the 'name' as argument
        isSelected={tag === "All"}
      />

      <Projecttag
        name="Web" // Added 'name' prop
        onClick={handleTagChange}
        isSelected={tag === "Web"}
      />

      <Projecttag
        name="Mobile" // Added 'name' prop
        onClick={handleTagChange}
        isSelected={tag === "Mobile"}
      />

      {/* Make the layout horizontal using flex or grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-2">
        {filteredProjects.map((project) => (
          <Projectcard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project.tags}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            
          />
        ))}
      </div>
    </>
  );
};

export default Projectsection;
