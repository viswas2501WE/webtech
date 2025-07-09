// src/components/AccordionItem.jsx
'use client'; // Optional but safe if you want to be explicit

import React from 'react';

const AccordionItem = ({ title, content, isOpen, toggleAccordion }) => {
  return (
    <div className="mb-[4vh] overflow-hidden bg-[#f8f8f8]"> 
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-left focus:outline-none transition-colors duration-200 ease-in-out"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-[600] text-gray-600">{title}</span>
        <svg
          className={`w-6 h-6 text-red-500 transition-transform duration-300 ease-in-out ${
            isOpen ? 'rotate-45' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 py-4 px-6' : 'max-h-0 opacity-0 py-0 px-6'
        }`}
      >
        <span className="text-gray-600 leading-relaxed">{content}</span>
      </div>
    </div>
  );
};

export default AccordionItem;
