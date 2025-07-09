'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import toast from 'react-hot-toast';

const BASE_URL = process.env.NEXT_PUBLIC_IMG_url;

const AnimatedSelect = ({ label, name, value, onChange, options, placeholder = 'Select...', required }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const closeDropdown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', closeDropdown);
    return () => document.removeEventListener('mousedown', closeDropdown);
  }, []);

  const handleSelectChange = (optionValue) => {
    onChange({ target: { name, value: optionValue } });
    setIsOpen(false);
  };

  const inputStyle = 'mt-1 block w-full px-3 py-3 bg-white border-gray-300 rounded-md text-base sm:text-md focus:outline-none focus:border-transparent focus:ring-0';

  return (
    <div className="relative" ref={ref}>
      <label htmlFor={name} className="block text-sm font-[500] text-white whitespace-normal break-words">
        {label}{required && <span className="text-red-500">*</span>}
      </label>
      <div className={`${inputStyle} cursor-pointer flex justify-between items-center`} onClick={() => setIsOpen(prev => !prev)}>
        <span className="truncate">{options.find(opt => opt.value === value)?.label || placeholder}</span>
        <svg className="h-5 w-5 text-gray-400 ml-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="absolute bg-white border border-gray-200 rounded-md p-2 mt-1 shadow-lg z-10 w-full max-h-60 overflow-y-auto"
          >
            {options.map((option) => (
              <div
                key={option.value}
                className="p-2 cursor-pointer rounded-md hover:bg-gray-100"
                onClick={() => handleSelectChange(option.value)}
              >
                {option.label}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function C3() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    designation: '',
    currentCtc: '',
    expectedCtc: '',
    totalExperience: '',
    relevantExperience: '',
    noticePeriod: '',
    relocate: 'Relocate To Ahmedabad',
    uploadCv: null,
    message: '',
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formPayload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        formPayload.append(key, value);
      }
    });

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/applicant/applicants`,
        formPayload,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      toast.success('Application submitted successfully!');
      console.log('Response:', res.data);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        designation: '',
        currentCtc: '',
        expectedCtc: '',
        totalExperience: '',
        relevantExperience: '',
        noticePeriod: '',
        relocate: 'Relocate To Ahmedabad',
        uploadCv: null,
        message: '',
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }

    } catch (err) {
      toast.error(err?.response?.data?.message || 'Submission failed!');
      console.error('Submission error:', err);
    }
  };

  const relocateOptions = [
    { value: 'Relocate To Ahmedabad', label: 'Relocate To Ahmedabad' },
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' },
  ];

  return (
    <div id="apply-form" className="relative flex items-center justify-center px-4 sm:px-8 md:px-[0%] py-8 sm:py-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <img src="/Local/gradient-liquid-abstract-background_23-2148911366.jpg" alt="" className="-scale-x-100 absolute object-cover w-full h-full opacity-100 -z-50" />
      <span className="absolute block bg-blue-950 w-full h-full opacity-90 -z-40"></span>

      <div className="p-4 sm:p-8 w-full flex flex-col lg:flex-row max-w-7xl">
        <div className="lg:w-1/2 hidden lg:flex items-center justify-center mt-8 md:mt-0 px-4 sm:px-0">
          <img
            src={`${BASE_URL}/Contact-us-rafiki.png`}
            alt="Hire Developers"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </div>

        <div className="lg:w-1/2 md:pr-8">
          <h2 className="text-[5vh] sm:text-[6vh] md:text-[6.5vh] font-[600] mb-6 sm:mb-8 text-white leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Let’s Get The Job
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <InputField id="name" value={formData.name} onChange={handleChange} label="Name" required />
              <InputField id="email" value={formData.email} onChange={handleChange} label="Email" type="email" required />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <InputField id="phone" value={formData.phone} onChange={handleChange} label="Phone" required />
              <InputField id="designation" value={formData.designation} onChange={handleChange} label="Designation" required />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
              <InputField id="currentCtc" value={formData.currentCtc} onChange={handleChange} label="Current CTC (In USD)" type="number" required />
              <InputField id="expectedCtc" value={formData.expectedCtc} onChange={handleChange} label="Expected CTC (In USD)" type="number" required />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <InputField id="totalExperience" value={formData.totalExperience} onChange={handleChange} label="Total Experience" required />
              <InputField id="relevantExperience" value={formData.relevantExperience} onChange={handleChange} label="Relevant Experience" required />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <InputField id="noticePeriod" value={formData.noticePeriod} onChange={handleChange} label="Notice Period" required />
              <AnimatedSelect
                label="Relocate To Ahmedabad"
                name="relocate"
                value={formData.relocate}
                onChange={handleChange}
                options={relocateOptions}
                placeholder="Choose an option"
                required
              />
            </div>

            <div>
              <label htmlFor="uploadCv" className="block text-sm font-[500] text-white mb-1">Upload CV<span className="text-red-500">*</span></label>
              <label htmlFor="uploadCv" className="mt-1 flex items-center justify-between px-4 py-2 border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-white">
                <span className="font-[500] text-[#1A96D5] hover:text-[#242D65]">Choose File</span>
                <input
                  id="uploadCv"
                  name="uploadCv"
                  type="file"
                  className="sr-only"
                  onChange={handleChange}
                  ref={fileInputRef}
                  required
                />
                <div className="ml-2 text-sm text-gray-500 truncate min-w-0">
                  {formData.uploadCv ? formData.uploadCv.name : 'No file chosen (Max 10MB)'}
                </div>
              </label>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-[500] text-white">Message</label>
              <textarea
                id="message"
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-3 bg-white border-gray-300 rounded-md text-base sm:text-md focus:outline-none focus:border-transparent focus:ring-0"
                placeholder="Message..."
              ></textarea>
            </div>

            <button
              style={{ fontFamily: 'Roboto, sans-serif' }}
              type="submit"
              className="relative font-[500] overflow-hidden text-white w-full sm:w-auto px-8 rounded-[2rem] group flex justify-center items-center bg-[#1A96D5] z-0 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-[#242D65] transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100 z-0" />
              <div className="flex items-center justify-center relative z-10 py-2">
                <span className="px-2">SUBMIT</span>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const InputField = ({ id, label, type = 'text', value, onChange, required = false }) => {
  const inputStyle = 'mt-1 block w-full px-3 py-3 bg-white border-gray-300 rounded-md text-base sm:text-md focus:outline-none focus:border-transparent focus:ring-0';
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-[500] text-white whitespace-normal break-words">
        {label}{required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className={inputStyle}
        placeholder={label}
        required={required}
      />
    </div>
  );
};
