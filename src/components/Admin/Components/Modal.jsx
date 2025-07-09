// components/Admin/Components/Modal.jsx
'use client'
import React, { useEffect, useRef } from 'react';

const Modal = ({ children, onClose }) => {
  const modalRef = useRef(null);
    useEffect(() => {

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);
  return (
    // Increased z-index to 9999 to ensure it's above everything, including headers.
    // Adjusted max-h to be a bit lower for a shorter window.
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 scroll-m-0 bg-black/20 bg-opacity-50 backdrop-blur-sm" >
      <button
          onClick={onClose}
          className="fixed top-[15%] flex justify-center items-center right-[11%] lg:right-[9%] text-white hover:text-[#f85C70] text-3xl w-[9.5%] lg:w-[2.5%]  h-10 font-bold p-2 rounded-full bg-[#F85C70] hover:bg-black/10 hover:backdrop-blur-lg transition-colors duration-200 z-10"
          aria-label="Close modal"
        >
          &times;
        </button>
      <div
      ref={modalRef}
        className="relative bg-white rounded-2xl shadow-3xl max-w-[85vw] w-full max-h-[75vh] overflow-y-auto transform transition-all duration-300 scale-100 opacity-100" // max-h changed from 80vh to 75vh
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
      >
        
        <div className="p-6 sm:p-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
