
import { motion } from "framer-motion";
import Image from "next/image";
import Screen1 from "../Common/Animations/Scree1";

const Part1 = () => {
    const imgurl = `${process.env.NEXT_PUBLIC_IMG_url}/mascot-webtech.png`
    return (
        <div className="flex flex-col lg:flex-row relative justify-between px-6 sm:px-10 md:px-20 lg:px-40 h-auto sm:h-full items-center w-full pb-5 pt-5 lg:pb-15 lg:pt-22  overflow-hidden">
            <Screen1 />
            <motion.div
                initial={{ y: 700, opacity: 1 }} // Animation from bottom
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="w-full lg:w-[41.7%] lg:order-last lg:mt-0 mt-[4vh]"
            >
                <Image
                    src={imgurl}
                    alt="Mascot Espire Vox"
                    width={1000}
                    height={1000}
                />
            </motion.div>
            <motion.div
                initial={{ x: -1000, opacity: 1 }} // Animation from left
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-[53%] mb-10 lg:mb-0 lg:order-first"
            >
                <div>
                    <h1
                        className="font-[700] leading-snug text-4xl sm:text-5xl md:text-6xl lg:text-7xl pt-8 sm:pt-14 text-[#061526]"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                        Serving Clients Across
                        <span
                            className="text-[#1A96D5]"
                        >{' '}15+ Countries
                        </span>
                    </h1>
                </div>
                <div
                    className="font-[500] lg:font-[400] text-[#061526] pt-5 sm:pt-10 leading-6 sm:leading-7 text-sm sm:text-base"
                    style={{ fontFamily: "Roboto, sans-serif" }}
                >
                    Welcome to Webtech Evolution where development meets innovation to make a consistent computerized insight. As a main IT Company, we are devoted to giving state of the art arrangements that move organizations into what's in store. From concept to execution, we strive for excellence in every aspect of our work. We don't simply give arrangements; we convey encounters that change organizations. Join us on the path to a digitally empowered future!
                </div>
            </motion.div>
        </div>
    )
}
export default Part1;
