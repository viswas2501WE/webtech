'use client';                      // 🚨 required – uses hooks + framer-motion

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Screen3 from '@/components/Common/Animations/Screen3';

const DesignIcon = () => (   <svg xmlns="http://www.w3.org/2000/svg" id="analytics_1_" data-name="analytics (1)" width="65.184" height="65.185" viewBox="0 0 65.184 65.185"><g id="Group_871" data-name="Group 871" transform="translate(13.723 13.723)"><g id="Group_870" data-name="Group 870"><path id="Path_4412" data-name="Path 4412" d="M144.3,128.3h0a1.026,1.026,0,0,0-1.016.871,16.809,16.809,0,1,1,.043-4.713,1.029,1.029,0,0,0,2.04-.272,18.869,18.869,0,1,0-.047,5.286A1.026,1.026,0,0,0,144.3,128.3Z" transform="translate(-107.79 -107.791)" fill="#ff3147"/></g></g><g id="Group_873" data-name="Group 873" transform="translate(8.234 8.234)"><g id="Group_872" data-name="Group 872"><path id="Path_4413" data-name="Path 4413" d="M119.842,112.565,109.5,102.224a24.379,24.379,0,1,0-7.278,7.278l10.341,10.341a5.146,5.146,0,0,0,7.278-7.278Zm-30.809-1.232a22.3,22.3,0,1,1,22.3-22.3A22.325,22.325,0,0,1,89.032,111.333Zm29.354,7.054a3.088,3.088,0,0,1-4.367,0l-10.093-10.093a24.574,24.574,0,0,0,4.367-4.367l10.093,10.093A3.092,3.092,0,0,1,118.386,118.387Z" transform="translate(-64.674 -64.675)" fill="#ff3147"/></g></g><g id="Group_875" data-name="Group 875" transform="translate(1.372 23.329)"><g id="Group_874" data-name="Group 874"><path id="Path_4414" data-name="Path 4414" d="M17.3,183.242H11.808a1.029,1.029,0,1,0,0,2.058H17.3a1.029,1.029,0,1,0,0-2.058Z" transform="translate(-10.779 -183.242)" fill="#ff3147"/></g></g><g id="Group_877" data-name="Group 877" transform="translate(19.212 20.585)"><g id="Group_876" data-name="Group 876"><path id="Path_4415" data-name="Path 4415" d="M176.636,164.429H170.66a3.773,3.773,0,0,0-7.26,0H151.934a1.029,1.029,0,1,0,0,2.058H163.4a3.773,3.773,0,0,0,7.26,0h5.976a1.029,1.029,0,1,0,0-2.058Zm-9.606,2.745a1.715,1.715,0,1,1,1.715-1.715A1.717,1.717,0,0,1,167.03,167.173Z" transform="translate(-150.905 -161.684)" fill="#ff3147"/></g></g><g id="Group_879" data-name="Group 879" transform="translate(56.265 23.329)"><g id="Group_878" data-name="Group 878"><path id="Path_4416" data-name="Path 4416" d="M447.083,183.242h-4.117a1.029,1.029,0,0,0,0,2.058h4.117a1.029,1.029,0,0,0,0-2.058Z" transform="translate(-441.937 -183.242)" fill="#ff3147"/></g></g><g id="Group_881" data-name="Group 881" transform="translate(23.329 37.052)"><g id="Group_880" data-name="Group 880"><path id="Path_4417" data-name="Path 4417" d="M204.857,293.776h-14.21a3.774,3.774,0,1,0,0,2.058h14.21a1.029,1.029,0,0,0,0-2.058Zm-17.84,2.745a1.715,1.715,0,1,1,1.715-1.715A1.717,1.717,0,0,1,187.017,296.52Z" transform="translate(-183.243 -291.031)" fill="#ff3147"/></g></g><g id="Group_883" data-name="Group 883" transform="translate(56.265 39.797)"><g id="Group_882" data-name="Group 882"><path id="Path_4418" data-name="Path 4418" d="M445.711,312.589h-2.745a1.029,1.029,0,0,0,0,2.058h2.745a1.029,1.029,0,1,0,0-2.058Z" transform="translate(-441.937 -312.589)" fill="#ff3147"/></g></g><g id="Group_885" data-name="Group 885" transform="translate(0 57.637)"><g id="Group_884" data-name="Group 884"><path id="Path_4419" data-name="Path 4419" d="M24.358,455.461H7.4a3.774,3.774,0,1,0,0,2.058H24.358a1.029,1.029,0,1,0,0-2.058ZM3.774,458.205a1.715,1.715,0,1,1,1.715-1.715A1.717,1.717,0,0,1,3.774,458.205Z" transform="translate(0 -452.716)" fill="#ff3147"/></g></g><g id="Group_887" data-name="Group 887" transform="translate(42.542)"><g id="Group_886" data-name="Group 886"><path id="Path_4420" data-name="Path 4420" d="M351.645,0A5.155,5.155,0,0,0,346.6,4.117H335.177a1.029,1.029,0,1,0,0,2.058H346.6A5.146,5.146,0,1,0,351.645,0Zm0,8.234a3.088,3.088,0,1,1,3.088-3.088A3.091,3.091,0,0,1,351.645,8.234Z" transform="translate(-334.148)" fill="#ff3147"/></g></g></svg>);
const CodingIcon  = () => (   <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62"><g id="challenges" transform="translate(-1 -1)"><path id="Path_4423" data-name="Path 4423" d="M23.192,49.433h1.986v2H23.192Z" transform="matrix(0.821, -0.572, 0.572, 0.821, -24.483, 22.869)" fill="#ff3147"/><path id="Path_4424" data-name="Path 4424" d="M25.514,42.737H42.1v2H25.514Z" transform="matrix(0.821, -0.572, 0.572, 0.821, -18.931, 27.166)" fill="#ff3147"/><path id="Path_4425" data-name="Path 4425" d="M60.365,14.588a15.9,15.9,0,0,0-1.381-3.332l1.426-2.3L55.047,3.59l-2.3,1.426a15.9,15.9,0,0,0-3.332-1.381L48.792,1H41.208l-.62,2.635a15.9,15.9,0,0,0-3.332,1.381l-2.3-1.426L29.59,8.953l1.426,2.3a15.9,15.9,0,0,0-1.381,3.332L27,15.208v1.916a3.674,3.674,0,0,0-1.316.614L18.933,22.8a1.006,1.006,0,0,1-.6.2H15.889a7,7,0,1,0-9.078.594A9.007,9.007,0,0,0,1,32V59a4,4,0,0,0,4,4H63V15.208ZM6,18a5,5,0,1,1,5,5A5.006,5.006,0,0,1,6,18ZM3,32a7.009,7.009,0,0,1,7-7h8.333a3.015,3.015,0,0,0,1.8-.6l6.75-5.062A1.7,1.7,0,0,1,27.9,19h.418a1.687,1.687,0,0,1,1.035,3.018l-6.338,4.93A5.025,5.025,0,0,1,19.941,28H12V39h4a3,3,0,0,1,3,3v9a2,2,0,1,1-4,0V45a2,2,0,0,0-2-2H6a3,3,0,0,1-3-3Zm13,5H14V30h5.941a7.024,7.024,0,0,0,4.3-1.475l5.633-4.381a15.789,15.789,0,0,0,1.144,2.6l-1.426,2.3,5.363,5.363,2.3-1.426a15.878,15.878,0,0,0,1.953.9L21,46.558V42A5.006,5.006,0,0,0,16,37ZM9,45h4v6h0a4.013,4.013,0,0,0,.144,1.011L9,54.905ZM3,59V43.974A4.948,4.948,0,0,0,6,45H7V59a2,2,0,0,1-4,0Zm58,2H8.444A3.959,3.959,0,0,0,9,59V57.345l5.12-3.578c.018.019.031.042.05.061A4,4,0,0,0,21,51V48.994L40.789,35.22,41.208,37h7.584l.62-2.635a15.9,15.9,0,0,0,3.332-1.381l2.3,1.426,5.363-5.363-1.426-2.3a15.9,15.9,0,0,0,1.381-3.332L61,23.263Zm0-39.792-2.273.535-.146.6a13.879,13.879,0,0,1-1.617,3.9l-.318.523,1.229,1.986-3.123,3.123-1.986-1.229-.523.318a13.879,13.879,0,0,1-3.9,1.617l-.6.146L47.208,35H42.792l-.535-2.273-.6-.146a13.879,13.879,0,0,1-3.9-1.617l-.523-.318-1.986,1.229-3.123-3.123,1.229-1.986-.318-.523a13.846,13.846,0,0,1-1.559-3.7A3.65,3.65,0,0,0,29,17.07v-.277l2.273-.535.146-.6a13.879,13.879,0,0,1,1.617-3.9l.318-.523L32.125,9.25l3.123-3.123,1.986,1.229.523-.318a13.879,13.879,0,0,1,3.9-1.617l.6-.146L42.792,3h4.416l.535,2.273.6.146a13.879,13.879,0,0,1,3.9,1.617l.523.318,1.986-1.229,3.123,3.123-1.229,1.986.318.523a13.879,13.879,0,0,1,1.617,3.9l.146.6L61,16.792v4.416Z" fill="#ff3147"/><path id="Path_4426" data-name="Path 4426" d="M45,7A12,12,0,1,0,57,19,12.013,12.013,0,0,0,45,7Zm0,22A10,10,0,1,1,55,19,10.011,10.011,0,0,1,45,29Z" fill="#ff3147"/><path id="Path_4427" data-name="Path 4427" d="M45,13a6,6,0,1,0,6,6A6.006,6.006,0,0,0,45,13Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,45,23Z" fill="#ff3147"/><path id="Path_4428" data-name="Path 4428" d="M57,57h2v2H57Z" fill="#ff3147"/><path id="Path_4429" data-name="Path 4429" d="M57,53h2v2H57Z" fill="#ff3147"/><path id="Path_4430" data-name="Path 4430" d="M57,49h2v2H57Z" fill="#ff3147"/><path id="Path_4431" data-name="Path 4431" d="M11,57h2v2H11Z" fill="#ff3147"/><path id="Path_4432" data-name="Path 4432" d="M15,57h2v2H15Z" fill="#ff3147"/><path id="Path_4433" data-name="Path 4433" d="M19,57h2v2H19Z" fill="#ff3147"/></g></svg> );
const ExperienceIcon = () => (   <svg xmlns="http://www.w3.org/2000/svg" width="65.185" height="61.102" viewBox="0 0 65.185 61.102"><g id="rocket" transform="translate(0 -16.032)"><path id="Path_4434" data-name="Path 4434" d="M64.23,183.072H60.082V148.307a4.021,4.021,0,0,0-4.016-4.016H43.819a.955.955,0,1,0,0,1.91H56.065a2.109,2.109,0,0,1,2.107,2.107v34.765H54.9a8.023,8.023,0,0,0,.075-1.086,8.108,8.108,0,0,0-8.1-8.1,7.986,7.986,0,0,0-1.791.2,6.039,6.039,0,0,0-5.353-3.266,5.9,5.9,0,0,0-2.137.4,5.037,5.037,0,0,0-10.013,0,5.9,5.9,0,0,0-2.137-.4,6.039,6.039,0,0,0-5.353,3.266,7.98,7.98,0,0,0-1.791-.2,8.108,8.108,0,0,0-8.1,8.1,8.022,8.022,0,0,0,.075,1.086H7.013V148.307A2.109,2.109,0,0,1,9.119,146.2H21.366a.955.955,0,1,0,0-1.91H9.119A4.021,4.021,0,0,0,5.1,148.307v34.765H.955a.955.955,0,0,0-.955.955v2.041a3,3,0,0,0,3,3H62.189a3,3,0,0,0,3-3v-2.041A.955.955,0,0,0,64.23,183.072Zm-.955,3a1.087,1.087,0,0,1-1.086,1.086H3a1.087,1.087,0,0,1-1.086-1.086v-1.086H14.222a.955.955,0,1,0,0-1.91H12.213a6.129,6.129,0,0,1-.1-1.086,6.175,6.175,0,0,1,8.212-5.843.955.955,0,0,0,1.216-.593,4.138,4.138,0,0,1,3.9-2.814,4.084,4.084,0,0,1,2.651.988.955.955,0,0,0,1.526-1.016,3.068,3.068,0,0,1-.16-.927,3.127,3.127,0,1,1,6.255,0,3.068,3.068,0,0,1-.16.927.955.955,0,0,0,1.526,1.016,4.085,4.085,0,0,1,2.651-.988,4.138,4.138,0,0,1,3.9,2.814.955.955,0,0,0,1.216.593,6.179,6.179,0,0,1,8.114,6.93H18.3a.955.955,0,1,0,0,1.91h44.97Z" transform="translate(0 -111.929)" fill="#ff3147"/><path id="Path_4435" data-name="Path 4435" d="M153.238,44.1a4.024,4.024,0,0,0-.931,2.571v2.974a.955.955,0,0,0,1.424.832l6.8-3.837q.389.71.824,1.4l-.855,3.419a.955.955,0,0,0,.926,1.187h8.164a.955.955,0,0,0,.926-1.187l-.855-3.419q.435-.685.824-1.4l6.8,3.837a.955.955,0,0,0,1.424-.832V46.672a4.024,4.024,0,0,0-.931-2.571l-4.533-5.438a26.058,26.058,0,0,0,.361-4.326,25.626,25.626,0,0,0-2-10,24.6,24.6,0,0,0-5.425-8.026.955.955,0,0,0-1.34,0,24.593,24.593,0,0,0-5.425,8.026,25.627,25.627,0,0,0-2,10,26.061,26.061,0,0,0,.36,4.319Zm.979,3.91V46.672a2.111,2.111,0,0,1,.488-1.349l3.579-4.295a25.319,25.319,0,0,0,1.392,3.9Zm8.433,2.721.543-2.172h4.632l.543,2.172Zm13.663-5.409a2.111,2.111,0,0,1,.488,1.349V48.01l-5.46-3.081a25.33,25.33,0,0,0,1.392-3.9Zm-10.8-26.966a22.8,22.8,0,0,1,3.931,5.84h-7.862A22.8,22.8,0,0,1,165.509,18.357Zm-4.727,7.75h9.454a23.928,23.928,0,0,1,1.462,8.23,23.609,23.609,0,0,1-3.421,12.312h-5.536a23.609,23.609,0,0,1-3.421-12.312A23.932,23.932,0,0,1,160.782,26.107Z" transform="translate(-132.916 0)" fill="#ff3147"/><path id="Path_4436" data-name="Path 4436" d="M232.485,124.258a4.016,4.016,0,1,0-4.016,4.016A4.021,4.021,0,0,0,232.485,124.258Zm-6.123,0a2.107,2.107,0,1,1,2.107,2.107A2.109,2.109,0,0,1,226.362,124.258Z" transform="translate(-195.876 -90.942)" fill="#ff3147"/></g></svg> );

const BlurbItem = ({ title, description, delay, IconComponent }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  const itemVariants = {
    hidden:  { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay } },
  };

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="flex flex-col p-4"
      data-animate-on-mobile
    >
      <div className="flex flex-row md:flex-col md:items-start items-center">
        <div className="mb-6 w-24 h-24 flex items-center justify-center">
          {IconComponent ? <IconComponent /> : (
            <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center">
              <span className="text-red-500 text-xs">No Icon</span>
            </div>
          )}
        </div>

        <h3
          className="text-xl md:text-2xl font-[600] text-gray-800 mb-3"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {title}
        </h3>
      </div>

      <div
        className="text-gray-600 text-sm md:text-base font-[400] leading-relaxed"
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        {description}
      </div>
    </motion.div>
  );
};

const HD3 = () => {
  const blurbData = [
    {
      title: 'IMAGINATIVE DESIGN',
      description:
        'We craft websites that strike a flawless harmony between innovative design and exceptional user experience.',
      delay: 0,
      IconComponent: DesignIcon,
    },
    {
      title: 'INTELLIGENT CODING',
      description:
        'Using state-of-the-art advancements, we make extraordinarily functional web applications.',
      delay: 0.2,
      IconComponent: CodingIcon,
    },
    {
      title: 'INCREDIBLE EXPERIENCE',
      description:
        'Allow us the chance to unveil the WOW factor and leave a lasting impression!',
      delay: 0.4,
      IconComponent: ExperienceIcon,
    },
  ];

  return (
    <div
      className="relative py-12 md:py-18 overflow-hidden"
      style={{ fontFamily: 'Roboto, sans-serif' }}
    >
      {/* Background animation component – stays the same */}
      <Screen3 />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <p className="text-red-500 text-sm md:text-base text-center uppercase font-[500] tracking-wider mb-2">
          WE PROVIDE DEDICATED DEVELOPERS
        </p>

        <h2
          className="text-3xl md:text-5xl font-[600] text-center text-gray-800 leading-tight my-5"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          To meet your development needs...
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {blurbData.map((blurb, idx) => (
            <BlurbItem
              key={idx}
              {...blurb}             
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HD3;
