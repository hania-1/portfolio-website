import React from 'react';
import Navlink from './Navlink';

// Define the type for the links
interface Link {
  path: string;
  title: string;
}

interface Props {
  links: Link[];
}

const Menuoverlay: React.FC<Props> = ({ links }) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
      {links.map((link: Link, index: number) => (
        <li key={index}>
          <Navlink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default Menuoverlay;
