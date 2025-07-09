'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const BASE = process.env.NEXT_PUBLIC_IMG_url;

function CU1() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <>
      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeInScale {
          animation: fadeInScale 0.8s ease-out forwards;
        }
        input:focus,
        textarea:focus {
          outline: none;
        }
      `}</style>

      <div className="h-full flex flex-col lg:flex-row items-center justify-between p-4 sm:p-6 mx-auto max-w-7xl lg:p-8 font-inter">
        {/* Image Section */}
        <div className="w-full lg:w-[50%] mb-8 lg:mb-0 hidden md:block">
          <Image
            src={`${BASE}/espire-vox-contact-us-1536x1385.png`}
            alt="Contact Us"
            width={800}
            height={700}
            className="w-full h-auto"
            unoptimized
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-[45%] max-w-full md:max-w-xl lg:max-w-full flex flex-col transform animate-fadeInScale">
          <div className="w-full p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-[600] text-[#F85C70] mb-4 text-center md:text-left"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              GET IN TOUCH
            </h2>
            <p
              className="text-sm sm:text-base text-gray-500 mb-8 text-center md:text-left leading-relaxed font-[600]"
              style={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Our devoted specialists are focused on giving first rate help at whatever you need. Whether you have inquiries, need help, or seek guidance, our group ensures quick and dependable assistance 24/7.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border bg-gray-50 border-gray-300 rounded-lg placeholder-gray-400"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border bg-gray-50 border-gray-300 rounded-lg placeholder-gray-400"
                  placeholder="john.doe@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-800 mb-2">
                  Your Subject<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border bg-gray-50 border-gray-300 rounded-lg placeholder-gray-400"
                  placeholder="Inquiry about..."
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                  Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border bg-gray-50 border-gray-300 rounded-lg resize-y placeholder-gray-400"
                  placeholder="Tell us more about your inquiry..."
                  required
                ></textarea>
              </div>

              <div>
                <button
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                  type="submit"
                  className="relative font-[500] overflow-hidden text-white w-full sm:w-auto h-13.5 px-8 rounded-[2rem] group flex justify-center cursor-pointer items-center bg-[#F85C70] z-0 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-[#FF3147] transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100 z-0" />
                  <div className="flex items-center justify-center relative z-10 py-2">
                    <span className="px-2">Send Message</span>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CU1;
