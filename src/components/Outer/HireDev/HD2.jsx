'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import axios from 'axios';
import toast from 'react-hot-toast';
import { usePathname } from 'next/navigation';

// --- AnimatedSelect Sub-component ---
const AnimatedSelect = ({ label, name, value, onChange, options, placeholder, required }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const closeDropdown = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", closeDropdown);
        return () => document.removeEventListener("mousedown", closeDropdown);
    }, []);

    const handleSelectChange = (optionValue) => {
        onChange({ target: { name, value: optionValue } });
        setIsOpen(false);
    };

    const inputStyle = "mt-1 block w-full px-3 py-3 bg-white border-gray-300 rounded-md text-base sm:text-md focus:outline-none focus:border-transparent focus:ring-0";

    return (
        <div className="relative" ref={ref}>
            <label htmlFor={name} className="block text-sm font-[500] text-white">
                {label}{required && <span className="text-red-500">*</span>}
            </label>
            <div
                className={`${inputStyle} cursor-pointer flex justify-between items-center`}
                onClick={() => setIsOpen(prev => !prev)}
            >
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

// --- HD2 Main Component ---
const HD2 = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        hireType: '',
        technologies: 'WordPress',
        mentionBudget: '',
        positions: 'Sr.level (4+years Experience)',
        projectDocument: null,
        projectRequirements: '',
    });

    const pathname = usePathname();

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (value) data.append(key, value);
        });
        data.append("pageUrl", window.location.origin + pathname);

        try {
            toast.loading("Submitting...", { id: 'submit' });
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/developer/hire`, data);
            toast.success("Submitted successfully!", { id: 'submit' });

            setFormData({
                name: '',
                email: '',
                phone: '',
                hireType: '',
                technologies: 'WordPress',
                mentionBudget: '',
                positions: 'Sr.level (4+years Experience)',
                projectDocument: null,
                projectRequirements: '',
            });
        } catch (error) {
            console.error(error);
            toast.error("Submission failed!", { id: 'submit' });
        }
    };

    const inputStyle = "mt-1 block w-full px-3 py-3 bg-white border-gray-300 rounded-md text-base sm:text-md focus:outline-none focus:border-transparent focus:ring-0";

    const hireTypeOptions = [
        { value: "Monthly", label: "Monthly" },
        { value: "Hourly", label: "Hourly" },
    ];

    const technologiesOptions = [
        { value: "WordPress", label: "WordPress" },
        { value: "Shopify", label: "Shopify" },
        { value: "Laravel", label: "Laravel" },
        { value: "E-Commerce", label: "E-Commerce" },
        { value: "Digital Marketing", label: "Digital Marketing" },
        { value: "Angular JS", label: "Angular JS" },
        { value: "React JS", label: "React JS" },
        { value: "Node JS", label: "Node JS" },
        { value: "Vue JS", label: "Vue JS" },
        { value: "Any Other", label: "Any Other" },
    ];

    const positionsOptions = [
        { value: "Sr.level (4+years Experience)", label: "Sr.level (4+years Experience)" },
        { value: "Mid-level (2-4 years Experience)", label: "Mid-level (2-4 years Experience)" },
        { value: "Junior (0-2 years Experience)", label: "Junior (0-2 years Experience)" },
    ];

    const imageBase = process.env.NEXT_PUBLIC_IMG_url;

    return (
        <div className="relative flex items-center justify-center px-4 sm:px-8 md:px-[10%] py-8 sm:py-4 text-black" style={{ fontFamily: "Roboto, sans-serif" }}>
            <img src="/Local/gradient-liquid-abstract-background_23-2148911366.jpg" alt="" className="-scale-x-100 absolute object-cover w-full h-full opacity-100 -z-50" />
            <span className="absolute block bg-blue-950 w-full h-full opacity-90 -z-40 "></span>
            <div className="p-4 sm:p-8 w-full flex flex-col lg:flex-row max-w-6xl">
                <div className="lg:w-1/2 md:pr-8">
                    <h2 className="text-[5vh] sm:text-[6vh] md:text-[6.5vh] font-[600] mb-6 sm:mb-8 text-white leading-tight" style={{ fontFamily: "Poppins, sans-serif" }}>LET&apos;S HIRE DEVELOPERS</h2>

                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                            <div>
                                <label htmlFor="name" className="text-sm font-[500] text-white">Name<span className="text-red-500">*</span></label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} className={inputStyle} required />
                            </div>
                            <div>
                                <label htmlFor="email" className="text-sm font-[500] text-white">Email<span className="text-red-500">*</span></label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputStyle} required />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                            <div>
                                <label htmlFor="phone" className="text-sm font-[500] text-white">Phone<span className="text-red-500">*</span></label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputStyle} required />
                            </div>
                            <AnimatedSelect label="Hire Type" name="hireType" value={formData.hireType} onChange={handleChange} options={hireTypeOptions} placeholder="Select Hire Type" required />
                        </div>

                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
                            <AnimatedSelect label="Technologies" name="technologies" value={formData.technologies} onChange={handleChange} options={technologiesOptions} required />
                            <div>
                                <label htmlFor="mentionBudget" className="text-sm font-[500] text-white">Mention Budget (In USD)<span className="text-red-500">*</span></label>
                                <input type="number" name="mentionBudget" value={formData.mentionBudget} onChange={handleChange} className={inputStyle} required />
                            </div>
                        </div>

                        <AnimatedSelect label="Positions" name="positions" value={formData.positions} onChange={handleChange} options={positionsOptions} required />

                        <div>
                            <label htmlFor="projectDocument" className="text-sm font-[500] text-white mb-1">Upload Your Project Requirement Document<span className="text-red-500">*</span></label>
                            <label htmlFor="projectDocument" className="mt-1 flex items-center justify-between px-4 py-2 border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-white">
                                <span className="font-[500] text-[#1A96D5]">Choose File</span>
                                <input id="projectDocument" name="projectDocument" type="file" className="sr-only" onChange={handleChange} required />
                                <div className="ml-2 text-sm text-gray-500 truncate min-w-0">
                                    {formData.projectDocument?.name || 'No file chosen (Max 10MB)'}
                                </div>
                            </label>
                        </div>

                        <div>
                            <label htmlFor="projectRequirements" className="text-sm font-[500] text-white">Mention Projects Requirements</label>
                            <textarea name="projectRequirements" rows="3" value={formData.projectRequirements} onChange={handleChange} className={inputStyle}></textarea>
                        </div>

                        <button type="submit" className="relative font-[500] overflow-hidden text-white w-full sm:w-auto h-13.5 px-8 rounded-[2rem] group flex justify-center items-center bg-[#1A96D5] z-0 transition-all duration-300">
                            <div className="absolute inset-0 bg-[#242D65] transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100 z-0" />
                            <div className="flex items-center justify-center relative z-10 py-2">
                                <span className="px-2">Hire Now</span>
                            </div>
                        </button>
                    </form>
                </div>

                <div className="lg:w-1/2 hidden lg:flex items-center justify-center mt-8 md:mt-0 px-4 sm:px-0">
                    <Image
                        src={`${imageBase}/Contact-us-rafiki.png`}
                        alt="Hire Developers"
                        width={500}
                        height={500}
                        className="max-w-full h-auto rounded-lg"
                        unoptimized
                    />
                </div>
            </div>
        </div>
    );
};

export default HD2;
