'use client';

import React from 'react';

interface ProjecttagProps {
  name: string;
  onClick: (name: string) => void;  // Updated type to accept a string argument
  isSelected: boolean;
}

const Projecttag: React.FC<ProjecttagProps> = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-purple-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white border-500";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 py-2 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-2 mr-1 text-xl cursor-pointer`}
      onClick={() => onClick(name)}  // Pass the 'name' argument to the onClick handler
    >
      {name}
    </button>
  );
};

export default Projecttag;
