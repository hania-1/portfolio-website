import React from 'react';

// Define an interface for the props
interface TabButtonProps {
  active: boolean;            // Type for active
  selectTab: () => void;      // Type for selectTab function
  children: React.ReactNode;  // Type for children
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active ? 'text-white border-b border-purple-500' : 'text-[#ADB7BE]';
  
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
