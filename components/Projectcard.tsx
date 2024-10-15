import React from "react";
import { CodeBracketIcon , EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
// import { Link } from "lucide-react";
interface ProjectCardProps {
    imgUrl: string;
    title: string;
    description: string;
    tags: string[];
    gitUrl: string;
    previewUrl: string;
  }
  

const Projectcard: React.FC<ProjectCardProps> = ({ imgUrl, title, description, tags , gitUrl , previewUrl}) => {
  return (
    <div className="w-full max-w-sm rounded overflow-hidden shadow-lg bg-[#181818] text-white"data-aos="flip-right">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="overlay items-center justify-center absolute inset-0 bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            <Link 
            href={gitUrl} 
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
{/* eye icon */}
          <Link 
            href={previewUrl} 
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>

        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
        <div className="mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-7 mr-2">
              {tag}
            </span>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projectcard;
