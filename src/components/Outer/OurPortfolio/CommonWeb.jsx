'use client'
import { FaCheck } from "react-icons/fa";
import { allImages } from '@/components/Outer/OurPortfolio/OP1/OP1'; // Import allImages from OP1.jsx
import { ImageGrid } from '@/components/Outer/OurPortfolio/OP1/OP1Common'; // Import ImageGrid

const CommonWeb = ({ p1, p2, wimg, p3, features, currentCategoryId }) => {
    if (!features || features.length === 0) {
        return null; // Or return a message like "No features available"
    }

    const numColumns = 2;
    const itemsPerColumn = Math.ceil(features.length / numColumns);

    const column1Features = features.slice(0, itemsPerColumn);
    const column2Features = features.slice(itemsPerColumn);

    // Find the category of the current page
    const currentPageCategory = allImages.find(
        (image) => image.id === parseInt(currentCategoryId)
    )?.category;

    // Filter for related portfolios (max 3, excluding the current one)
    const relatedPortfolios = allImages.filter(
        (image) => image.category === currentPageCategory && image.id !== parseInt(currentCategoryId)
    ).slice(0, 3);

    return (
        <>
        <div className="px-4 sm:px-8 xl:px-[11.5%]"> {/* Responsive padding */}
            <div className="py-[5%] text-gray-700" style={{ fontFamily: "Roboto, sans-serif" }}>
                <div className="py-[3%]"><div>{p1}</div></div>
                {/* Flex direction changes for responsiveness */}
                <div className="flex flex-col-reverse xl:flex-row xl:justify-between">
                    {/* Text content - full width on small, half on medium+ */}
                    <div className="w-full xl:w-[50%] flex flex-col justify-center">
                        <div className="py-[3%]">{p2}</div>
                        <h1 className="py-[3%] font-[500] text-xl" style={{ fontFamily: "Poppins, sans-serif" }}>Tools and Technologies used:</h1>
                        <div className="relative flex" style={{ fontFamily: "Poppins, sans-serif" }}>
                            {/* Vertical Red Bar - Matches the image */}
                            <div className="absolute left-0 top-0 bottom-0 w-2 bg-red-500 my-1"></div>

                            {/* Content Container */}
                            {/* Grid columns responsive: 1 on small, 2 on medium+ */}
                            <div className="grid grid-cols-1 md:grid-cols-2 py-[5%] gap-x-12 gap-y-4 pl-8">
                                {/* Column 1 */}
                                <ul className="space-y-4">
                                    {column1Features.map((feature, index) => (
                                        <li key={`col1-${index}`} className="flex items-center text-gray-800 text-md font-[500]">
                                            <span className="text-red-500 mr-3 text-sm border-1 rounded-full p-[2.5%] leading-none"><FaCheck /></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Column 2 (only render if there are features for it) */}
                                {column2Features.length > 0 && (
                                    <ul className="space-y-4">
                                        {column2Features.map((feature, index) => (
                                            <li key={`col2-${index}`} className="flex items-center text-gray-800 text-md font-[500]">
                                                <span className="text-red-500 mr-3 text-sm border-1 rounded-full p-[2.5%] leading-none"><FaCheck /></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                    {/* Image - full width on small, 45% on medium+ */}
                    <div className="w-full xl:w-[45%] mb-8 xl:mb-0"> {/* Added margin-bottom for spacing on small screens */}
                        <img src={wimg} className="rounded-md w-full h-auto" alt="Not Available" /> {/* Ensure image is responsive */}
                    </div>
                </div>
                <div className="py-[3%]"><div>{p3}</div></div>
                <h1 className="text-2xl sm:text-3xl font-[600]" style={{ fontFamily: "Poppins, sans-serif" }}>Related Portfolios</h1>
            </div>
        </div>
            <div className="mx-[2%]">
                {/* Responsive font size for heading */}
                {/* Display related portfolios using ImageGrid */}
                <ImageGrid images={relatedPortfolios} /> {/* Use ImageGrid here */}
            </div>
        </>
    )
}
export default CommonWeb;