'use client'; // Required in Next.js App Router if using useState or any interactivity

import { useState } from "react";

const Faq = ({ data = [] }) => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mb-[5vh] overflow-hidden">
      {data.map((item, index) => (
        <div key={index} className="mb-[3vh] overflow-hidden bg-[#f8f8f8]">
          <button
            className="flex justify-between items-center w-full py-4 px-6 text-left focus:outline-none transition-colors duration-200 ease-in-out"
            onClick={() => toggleAccordion(index)}
            aria-expanded={openIndex === index}
          >
            <span
              className={`text-lg font-[600] ${openIndex === index ? "text-red-500" : "text-gray-700"}`}
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {item.q}
            </span>
            <svg
              className={`w-6 h-6 text-red-500 transition-transform duration-300 ease-in-out ${
                openIndex === index ? "rotate-45" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              ></path>
            </svg>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index
                ? "max-h-screen opacity-100 py-4 px-6"
                : "max-h-0 opacity-0 py-0 px-6"
            }`}
          >
            <div
              className="leading-relaxed text-gray-600 font-[500]"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              {typeof item.content === 'function' ? item.content() : item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
