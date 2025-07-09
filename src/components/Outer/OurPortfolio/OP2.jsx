"use client"; // This is crucial for client-side components in App Router

import React, { useState } from 'react';
import Image from 'next/image'; // Import the Next.js Image component

function OP2() {
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

  // Access environment variables
  const imgUrl = process.env.NEXT_PUBLIC_IMG_url;
  const imgUrl3 = process.env.NEXT_PUBLIC_IMG_url3;

  return (
    <>
      <style>
        {`
        /* Animation for the main contact card to fade in with a slight scale */
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
        `}
      </style>

      <div className="h-full flex items-center relative my-[5%] justify-center p-4 sm:p-6 lg:p-8 font-inter">
        {/* Using Next.js Image component for optimal performance */}
       
          <>
            <Image
              src={`${imgUrl3}/element_67.png`}
              alt="Decorative Element 67"
              className='absolute left-[8%] top-[90%]'
              width={100} // Provide appropriate width and height for Image component
              height={100} // These are placeholders, adjust based on actual image dimensions or desired size
              priority // Use priority if the image is above the fold
            />
            <Image
              src={`${imgUrl3}/element_66.png`}
              alt="Decorative Element 66"
              className='absolute right-[8%] -top-[5%] hidden md:flex'
              width={100} // Provide appropriate width and height
              height={100}
              priority
            />
          </>
        

        <div className="bg-white shadow-2xl overflow-hidden shadow-pink-200 max-w-6xl w-full flex flex-col md:flex-row transform animate-fadeInScale">

          <div className="md:w-2/5 w-full hidden md:flex relative h-64 md:h-auto items-center justify-center md:flex-shrink-0">
              <Image
                src={`${imgUrl}/contact-img_1.jpg`}
                alt="Connect With Us"
                className="w-full h-full object-cover shadow-md"
                layout="fill" // Use 'fill' for responsive images within a parent with defined dimensions
                objectFit="cover"
                onError={(e) => { e.currentTarget.src = "https://placehold.co/600x800/E0E7FF/3F51B5?text=Image+Error"; }}
              />
          </div>

          <div className="md:w-3/5 w-full p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <h2 className="text-4xl font-[700] text-gray-900 mb-4 text-center md:text-left" style={{fontFamily:"Poppins, sans-serif"}}>Let's Talk!</h2>
            <p className="text-gray-700 mb-8 text-center md:text-left leading-relaxed font-[400]" style={{fontFamily:"Roboto, sans-serif"}}>
              Have questions or feedback? We're here to help. Reach out to us using the form below.
            </p>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg placeholder-gray-400"
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email Field */}
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg placeholder-gray-400"
                  placeholder="john.doe@example.com"
                  required
                />
              </div>

              {/* Subject Field */}
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg placeholder-gray-400"
                  placeholder="Inquiry about..."
                  required
                />
              </div>

              {/* Message Field */}
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-y placeholder-gray-400"
                  placeholder="Tell us more about your inquiry..."
                  required
                ></textarea>
              </div>

              {/* Send Message Button */}
              <div>
                <button
                  style={{ fontFamily: "Roboto, sans-serif" }}
                  type='submit'
                  className={`relative font-[500] overflow-hidden text-white w-full sm:w-auto h-13.5 px-8 rounded-[2rem] group flex justify-center cursor-pointer items-center bg-[#F85C70] z-0 transition-all duration-300`}
                >
                  {/* Water fill animation layer */}
                  <div className="absolute inset-0 bg-[#FF3147] transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100 z-0" />

                  {/* Content with image + label */}
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

export default OP2;