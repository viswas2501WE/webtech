"use client"; // Required because useState is used

import { useState } from 'react';
import AccordionItem from './AEV_4.2'; // Adjust the path if needed

const AEV_1 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionData = [
    {
      title: 'Our Vision',
      content: (
        <>
          <p>To earn respect as a main, dependable, and talented worldwide IT arrangement supplier.</p>
          <ul className="px-10 list-disc">
            <li>Underpromise, overdeliver</li>
            <li>Accurate estimations and timelines</li>
            <li>Efficient, smart coding practices</li>
            <li>Thorough testing by certified engineers</li>
            <li>High-quality services at an affordable cost</li>
            <li>Transparent, effective communication</li>
            <li>Swift turnarounds with unwavering commitment</li>
            <li>Encourage employees to excel</li>
            <li>Prioritize enduring relationships</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Our Mission',
      content: (
        <>
          <p>
            Providing top-notch solutions that redefine the market and act as catalysts for transformative change, fostering growth for both our clients and our organization.
          </p>
          <ul className="px-10 list-disc">
            <li>Commit to less, achieve more</li>
            <li>Accurate effort estimates and timelines</li>
            <li>Precise and intelligent coding practices</li>
            <li>Thorough testing conducted by certified engineers</li>
            <li>Cost-effective for the delivered quality</li>
            <li>Transparent and efficient communication</li>
            <li>Swift turnarounds with an unwavering commitment</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Our Commitment',
      content: (
        <>
          <p>
            Our faith in Client Pleasure drives us to outperform assumptions, accentuating accuracy and opportune conveyance.
          </p>
          <ul className="px-10 list-disc">
            <li>Commit to minimal, deliver maximal</li>
            <li>Accurate estimations and timelines</li>
            <li>Precise, sophisticated coding</li>
            <li>Thorough testing by certified engineers</li>
            <li>Quality at an affordable cost</li>
            <li>Transparent and efficient communication</li>
            <li>Swift turnarounds with unwavering commitment</li>
          </ul>
        </>
      ),
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="">
      <div className="w-full max-w-2xl overflow-hidden">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            toggleAccordion={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AEV_1;
