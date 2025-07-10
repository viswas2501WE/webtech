'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import toast from 'react-hot-toast';

const OP2 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const imgUrl = process.env.NEXT_PUBLIC_IMG_url;
  const imgUrl3 = process.env.NEXT_PUBLIC_IMG_url3;
  const company = process.env.NEXT_PUBLIC_COMPANY || 'Webtech';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const currentPageUrl = window.location.href;

    const dataToSend = {
      ...formData,
      pageUrl: currentPageUrl,
      company,
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact/contactus`,
        dataToSend,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status >= 200 && response.status < 300) {
        toast.success('Your message has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        const errorMessage = response.data?.message || 'Failed to send your message. Please try again.';
        setError(errorMessage);
        toast.error(errorMessage);
      }
    } catch (err) {
      console.error('Submission error:', err);
      if (err.response) {
        const errorMessage = err.response.data?.message || 'Server responded with an error.';
        setError(errorMessage);
        toast.error(errorMessage);
      } else if (err.request) {
        setError('No response from server.');
        toast.error('No response from server.');
      } else {
        setError('An unexpected error occurred.');
        toast.error('Unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeInScale {
          animation: fadeInScale 0.8s ease-out forwards;
        }
        input:focus, textarea:focus {
          outline: none;
        }
      `}</style>

      <div className="h-full flex items-center relative my-[5%] justify-center p-4 sm:p-6 lg:p-8 font-inter">
        <>
          <Image
            src={`${imgUrl3}/element_67.png`}
            alt="Decorative Element 67"
            className='absolute left-[8%] top-[90%]'
            width={100}
            height={100}
            priority
          />
          <Image
            src={`${imgUrl3}/element_66.png`}
            alt="Decorative Element 66"
            className='absolute right-[8%] -top-[5%] hidden md:flex'
            width={100}
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
              layout="fill"
              objectFit="cover"
              onError={(e) => {
                e.currentTarget.src = 'https://placehold.co/600x800/E0E7FF/3F51B5?text=Image+Error';
              }}
            />
          </div>

          <div className="md:w-3/5 w-full p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <h2 className="text-4xl font-[700] text-gray-900 mb-4 text-center md:text-left" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Let's Talk!
            </h2>
            <p className="text-gray-700 mb-8 text-center md:text-left leading-relaxed font-[400]" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Have questions or feedback? We're here to help. Reach out to us using the form below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && <p className="text-red-500 text-sm">{error}</p>}

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
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="relative font-[500] overflow-hidden text-white w-full sm:w-auto h-13.5 px-8 rounded-[2rem] group flex justify-center cursor-pointer items-center bg-[#1A96D5] z-0 transition-all duration-300"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  <div className="absolute inset-0 bg-[#242D65] transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100 z-0" />
                  <div className="flex items-center justify-center relative z-10 py-2">
                    {loading ? <span className="px-2">Sending...</span> : <span className="px-2">Send Message</span>}
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default OP2;
