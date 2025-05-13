import React from 'react';

const ExpandButton = ({ onClick }) => {
  return (
    <div className="flex justify-center mt-8">
      <button 
        onClick={onClick}
        className="bg-black text-white h-12 w-12 rounded-full flex items-center justify-center hover:bg-gray-800 transition duration-300 shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
};

export default ExpandButton;