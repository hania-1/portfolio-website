'use client';

import Hero_section from "@/components/Hero_section";
import Navbar from "@/components/Navbar";
import Aboutsection from "@/components/Aboutsection";
import Projectsection from "@/components/Projectsection";
// import Projectcard from "@/components/Projectcard";
import Contact from "@/components/Contact";
import AchievementsSection from "@/components/Achievementssction";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"; // Remove 'use'

// import Projecttag from "@/components/Projecttag";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-back',
      duration: 1200,
      delay:100,
      mirror: true,
      anchorPlacement: 'bottom-bottom',
      offset: 160,
    });
    AOS.refresh();
  },[

  ]);


  // const handleTagChange = (name: string) => {
  //   console.log("Selected tag:", name);
  //   // Add your tag handling logic here
  // };

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Hero_section />
        <AchievementsSection />
        <Aboutsection />
        <Projectsection />
        
        {/* Example usage of Projectcard with props */}
        {/* <Projectcard
          imgUrl="/projects/example.png"
          title="Example Project"
          description="This is an example project."
          tags={["Example", "Web"]}
          gitUrl="/projects/example"
          previewUrl="/projects/example"
        /> */}

        {/* Add the missing props to Projecttag */}
        {/* <Projecttag
  name="React"
  onClick={(name) => console.log(name)}
  isSelected={true}
/> */}


        <Contact />
      </div>
    </main>
  );
}
