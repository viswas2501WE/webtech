'use client';

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Screen3 from '@/components/Common/Animations/Screen3'; // Adjust this path based on your project

const featuresData = [
    {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" id="analytics_1_" data-name="analytics (1)" width="65.184" height="65.185" viewBox="0 0 65.184 65.185"><g id="Group_871" data-name="Group 871" transform="translate(13.723 13.723)"><g id="Group_870" data-name="Group 870"><path id="Path_4412" data-name="Path 4412" d="M144.3,128.3h0a1.026,1.026,0,0,0-1.016.871,16.809,16.809,0,1,1,.043-4.713,1.029,1.029,0,0,0,2.04-.272,18.869,18.869,0,1,0-.047,5.286A1.026,1.026,0,0,0,144.3,128.3Z" transform="translate(-107.79 -107.791)" fill="#1A96D5"/></g></g><g id="Group_873" data-name="Group 873" transform="translate(8.234 8.234)"><g id="Group_872" data-name="Group 872"><path id="Path_4413" data-name="Path 4413" d="M119.842,112.565,109.5,102.224a24.379,24.379,0,1,0-7.278,7.278l10.341,10.341a5.146,5.146,0,0,0,7.278-7.278Zm-30.809-1.232a22.3,22.3,0,1,1,22.3-22.3A22.325,22.325,0,0,1,89.032,111.333Zm29.354,7.054a3.088,3.088,0,0,1-4.367,0l-10.093-10.093a24.574,24.574,0,0,0,4.367-4.367l10.093,10.093A3.092,3.092,0,0,1,118.386,118.387Z" transform="translate(-64.674 -64.675)" fill="#1A96D5"/></g></g><g id="Group_875" data-name="Group 875" transform="translate(1.372 23.329)"><g id="Group_874" data-name="Group 874"><path id="Path_4414" data-name="Path 4414" d="M17.3,183.242H11.808a1.029,1.029,0,1,0,0,2.058H17.3a1.029,1.029,0,1,0,0-2.058Z" transform="translate(-10.779 -183.242)" fill="#1A96D5"/></g></g><g id="Group_877" data-name="Group 877" transform="translate(19.212 20.585)"><g id="Group_876" data-name="Group 876"><path id="Path_4415" data-name="Path 4415" d="M176.636,164.429H170.66a3.773,3.773,0,0,0-7.26,0H151.934a1.029,1.029,0,1,0,0,2.058H163.4a3.773,3.773,0,0,0,7.26,0h5.976a1.029,1.029,0,1,0,0-2.058Zm-9.606,2.745a1.715,1.715,0,1,1,1.715-1.715A1.717,1.717,0,0,1,167.03,167.173Z" transform="translate(-150.905 -161.684)" fill="#1A96D5"/></g></g><g id="Group_879" data-name="Group 879" transform="translate(56.265 23.329)"><g id="Group_878" data-name="Group 878"><path id="Path_4416" data-name="Path 4416" d="M447.083,183.242h-4.117a1.029,1.029,0,0,0,0,2.058h4.117a1.029,1.029,0,0,0,0-2.058Z" transform="translate(-441.937 -183.242)" fill="#1A96D5"/></g></g><g id="Group_881" data-name="Group 881" transform="translate(23.329 37.052)"><g id="Group_880" data-name="Group 880"><path id="Path_4417" data-name="Path 4417" d="M204.857,293.776h-14.21a3.774,3.774,0,1,0,0,2.058h14.21a1.029,1.029,0,0,0,0-2.058Zm-17.84,2.745a1.715,1.715,0,1,1,1.715-1.715A1.717,1.717,0,0,1,187.017,296.52Z" transform="translate(-183.243 -291.031)" fill="#1A96D5"/></g></g><g id="Group_883" data-name="Group 883" transform="translate(56.265 39.797)"><g id="Group_882" data-name="Group 882"><path id="Path_4418" data-name="Path 4418" d="M445.711,312.589h-2.745a1.029,1.029,0,0,0,0,2.058h2.745a1.029,1.029,0,1,0,0-2.058Z" transform="translate(-441.937 -312.589)" fill="#1A96D5"/></g></g><g id="Group_885" data-name="Group 885" transform="translate(0 57.637)"><g id="Group_884" data-name="Group 884"><path id="Path_4419" data-name="Path 4419" d="M24.358,455.461H7.4a3.774,3.774,0,1,0,0,2.058H24.358a1.029,1.029,0,1,0,0-2.058ZM3.774,458.205a1.715,1.715,0,1,1,1.715-1.715A1.717,1.717,0,0,1,3.774,458.205Z" transform="translate(0 -452.716)" fill="#1A96D5"/></g></g><g id="Group_887" data-name="Group 887" transform="translate(42.542)"><g id="Group_886" data-name="Group 886"><path id="Path_4420" data-name="Path 4420" d="M351.645,0A5.155,5.155,0,0,0,346.6,4.117H335.177a1.029,1.029,0,1,0,0,2.058H346.6A5.146,5.146,0,1,0,351.645,0Zm0,8.234a3.088,3.088,0,1,1,3.088-3.088A3.091,3.091,0,0,1,351.645,8.234Z" transform="translate(-334.148)" fill="#1A96D5"/></g></g></svg>',
        title: 'Diverse Skill Set',
        description:
            'A diverse skill set among developers is essential for building robust and comprehensive software solutions. At Webtech Evolution, we pride ourselves on having a well-rounded team of developers and software engineers.',
    },
    {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="64.829" height="64.621" viewBox="0 0 64.829 64.621"><g id="sketch" transform="translate(0 -0.82)"><g id="Group_889" data-name="Group 889" transform="translate(45.648 46.394)"><g id="Group_888" data-name="Group 888"><path id="Path_4421" data-name="Path 4421" d="M372.232,360.822a.951.951,0,0,0-1.037.206l-10.4,10.4a.952.952,0,0,0,.673,1.624h10.4a.951.951,0,0,0,.952-.952V361.7A.952.952,0,0,0,372.232,360.822Zm-8.466,10.326,7.15-7.15v7.15Z" transform="translate(-360.517 -360.749)" fill="#1A96D5"/></g></g><g id="Group_891" data-name="Group 891" transform="translate(0 0.82)"><g id="Group_890" data-name="Group 890"><path id="Path_4422" data-name="Path 4422" d="M64.242,31.215a.951.951,0,0,0-1.037.206l-2.85,2.85V14.894a.952.952,0,0,0-.952-.952H52.092l2.654-2.654h0L57.3,8.73a2.9,2.9,0,0,0,0-4.1L54.347,1.67a2.9,2.9,0,0,0-4.1,0L47.686,4.228,44.594,7.32l-6.623,6.623H8.435V4.529a.952.952,0,0,0-.952-.952A7.493,7.493,0,0,0,0,11.061V51.476a.954.954,0,0,0,.023.2,7.207,7.207,0,0,0,7.186,6.66H36.285l-5.476,5.476a.952.952,0,0,0,.673,1.624h32.4a.952.952,0,0,0,.952-.952v-32.4A.952.952,0,0,0,64.242,31.215ZM51.59,3.015a1,1,0,0,1,1.412,0l2.957,2.957a1,1,0,0,1,0,1.412L54.074,9.27,49.7,4.9ZM48.359,6.247l4.369,4.369-1.746,1.746L46.613,7.993ZM62.926,42.786H61.171a.952.952,0,1,0,0,1.9h1.756v2.867H61.171a.952.952,0,0,0,0,1.9h1.756v2.867H61.171a.952.952,0,0,0,0,1.9h1.756V57.1H61.171a.952.952,0,1,0,0,1.9h1.756v4.538H33.778l9.611-9.611a.952.952,0,0,0-1.346-1.346l-3.856,3.856H7.208a5.275,5.275,0,0,1-5.3-5.134q.008-.271.042-.537v0q.016-.126.038-.251l.005-.028q.02-.111.045-.222l.014-.061q.022-.093.047-.186c.009-.033.019-.066.028-.1.014-.048.028-.1.044-.144s.032-.095.048-.142.023-.066.035-.1c.023-.062.048-.124.073-.185l.022-.053c.033-.076.066-.151.1-.225l0-.009a5.6,5.6,0,0,1,3.894-3.045l.014,0c.079-.016.158-.03.238-.043l.04-.007c.072-.011.145-.02.218-.028l.062-.007c.071-.007.142-.012.213-.016l.068,0q.14-.007.281-.007a.952.952,0,0,0,.952-.952v-6.9a.952.952,0,1,0-1.9,0v6.008a7.432,7.432,0,0,0-4.274,2.068c-.124.121-.241.246-.355.374V11.061a5.591,5.591,0,0,1,4.629-5.5V34.238h0a.952.952,0,1,0,1.9,0h0V15.845H36.069l-5.26,5.26a.952.952,0,0,0,1.346,1.346l6.885-6.885h0l6.228-6.228,4.369,4.369-.513.513h0L29.936,33.408l-4.369-4.369,3.782-3.782A.952.952,0,1,0,28,23.911l-4.455,4.455a.956.956,0,0,0-.067.075l-.02.027c-.013.018-.027.036-.039.055l-.02.033c-.011.018-.021.036-.03.054s-.012.024-.017.036-.016.038-.024.057l-.008.02L21.47,33.974l-1.264,3.581a.962.962,0,0,0-.038.145H17a.952.952,0,0,0,0,1.9H43.355a.952.952,0,0,0,0-1.9H24.449l5.8-2.048.014-.006c.023-.008.045-.018.067-.028l.026-.012c.023-.011.045-.024.067-.037l.021-.013c.023-.015.045-.031.067-.048l.016-.012a.955.955,0,0,0,.077-.069L50.189,15.846h8.263V36.174L44.841,49.785a.952.952,0,0,0,0,1.346.972.972,0,0,0,.072.065.951.951,0,0,0,1.273-.065h0l16.74-16.74ZM28.2,34.358l-2.726.962L23.654,33.5l.962-2.726Z" transform="translate(0 -0.82)" fill="#1A96D5"/></g></g></g></svg>',
        title: 'Proven Track Record',
        description:
            'Our successful track record is a critical factor that assesses our team\'s competency and reliability. Additionally, cultural fit within the organization and alignment with the team\'s values and goals are crucial factors for long-term success.',
    },
    {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62"><g id="challenges" transform="translate(-1 -1)"><path id="Path_4423" data-name="Path 4423" d="M23.192,49.433h1.986v2H23.192Z" transform="matrix(0.821, -0.572, 0.572, 0.821, -24.483, 22.869)" fill="#1A96D5"/><path id="Path_4424" data-name="Path 4424" d="M25.514,42.737H42.1v2H25.514Z" transform="matrix(0.821, -0.572, 0.572, 0.821, -18.931, 27.166)" fill="#1A96D5"/><path id="Path_4425" data-name="Path 4425" d="M60.365,14.588a15.9,15.9,0,0,0-1.381-3.332l1.426-2.3L55.047,3.59l-2.3,1.426a15.9,15.9,0,0,0-3.332-1.381L48.792,1H41.208l-.62,2.635a15.9,15.9,0,0,0-3.332,1.381l-2.3-1.426L29.59,8.953l1.426,2.3a15.9,15.9,0,0,0-1.381,3.332L27,15.208v1.916a3.674,3.674,0,0,0-1.316.614L18.933,22.8a1.006,1.006,0,0,1-.6.2H15.889a7,7,0,1,0-9.078.594A9.007,9.007,0,0,0,1,32V59a4,4,0,0,0,4,4H63V15.208ZM6,18a5,5,0,1,1,5,5A5.006,5.006,0,0,1,6,18ZM3,32a7.009,7.009,0,0,1,7-7h8.333a3.015,3.015,0,0,0,1.8-.6l6.75-5.062A1.7,1.7,0,0,1,27.9,19h.418a1.687,1.687,0,0,1,1.035,3.018l-6.338,4.93A5.025,5.025,0,0,1,19.941,28H12V39h4a3,3,0,0,1,3,3v9a2,2,0,1,1-4,0V45a2,2,0,0,0-2-2H6a3,3,0,0,1-3-3Zm13,5H14V30h5.941a7.024,7.024,0,0,0,4.3-1.475l5.633-4.381a15.789,15.789,0,0,0,1.144,2.6l-1.426,2.3,5.363,5.363,2.3-1.426a15.878,15.878,0,0,0,1.953.9L21,46.558V42A5.006,5.006,0,0,0,16,37ZM9,45h4v6h0a4.013,4.013,0,0,0,.144,1.011L9,54.905ZM3,59V43.974A4.948,4.948,0,0,0,6,45H7V59a2,2,0,0,1-4,0Zm58,2H8.444A3.959,3.959,0,0,0,9,59V57.345l5.12-3.578c.018.019.031.042.05.061A4,4,0,0,0,21,51V48.994L40.789,35.22,41.208,37h7.584l.62-2.635a15.9,15.9,0,0,0,3.332-1.381l2.3,1.426,5.363-5.363-1.426-2.3a15.9,15.9,0,0,0,1.381-3.332L61,23.263Zm0-39.792-2.273.535-.146.6a13.879,13.879,0,0,1-1.617,3.9l-.318.523,1.229,1.986-3.123,3.123-1.986-1.229-.523.318a13.879,13.879,0,0,1-3.9,1.617l-.6.146L47.208,35H42.792l-.535-2.273-.6-.146a13.879,13.879,0,0,1-3.9-1.617l-.523-.318-1.986,1.229-3.123-3.123,1.229-1.986-.318-.523a13.846,13.846,0,0,1-1.559-3.7A3.65,3.65,0,0,0,29,17.07v-.277l2.273-.535.146-.6a13.879,13.879,0,0,1,1.617-3.9l.318-.523L32.125,9.25l3.123-3.123,1.986,1.229.523-.318a13.879,13.879,0,0,1,3.9-1.617l.6-.146L42.792,3h4.416l.535,2.273.6.146a13.879,13.879,0,0,1,3.9,1.617l.523.318,1.986-1.229,3.123,3.123-1.229,1.986.318.523a13.879,13.879,0,0,1,1.617,3.9l.146.6L61,16.792v4.416Z" fill="#1A96D5"/><path id="Path_4426" data-name="Path 4426" d="M45,7A12,12,0,1,0,57,19,12.013,12.013,0,0,0,45,7Zm0,22A10,10,0,1,1,55,19,10.011,10.011,0,0,1,45,29Z" fill="#1A96D5"/><path id="Path_4427" data-name="Path 4427" d="M45,13a6,6,0,1,0,6,6A6.006,6.006,0,0,0,45,13Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,45,23Z" fill="#1A96D5"/><path id="Path_4428" data-name="Path 4428" d="M57,57h2v2H57Z" fill="#1A96D5"/><path id="Path_4429" data-name="Path 4429" d="M57,53h2v2H57Z" fill="#1A96D5"/><path id="Path_4430" data-name="Path 4430" d="M57,49h2v2H57Z" fill="#1A96D5"/><path id="Path_4431" data-name="Path 4431" d="M11,57h2v2H11Z" fill="#1A96D5"/><path id="Path_4432" data-name="Path 4432" d="M15,57h2v2H15Z" fill="#1A96D5"/><path id="Path_4433" data-name="Path 4433" d="M19,57h2v2H19Z" fill="#1A96D5"/></g></svg>',
        title: 'Communication and Transparency',
        description:
            'By prioritizing open communication and transparency within the team, we, at Webtech Evolution, create a collaborative and productive environment that fosters trust and contributes to the success of our projects!',
    },
    {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="65.185" height="61.102" viewBox="0 0 65.185 61.102"><g id="rocket" transform="translate(0 -16.032)"><path id="Path_4434" data-name="Path 4434" d="M64.23,183.072H60.082V148.307a4.021,4.021,0,0,0-4.016-4.016H43.819a.955.955,0,1,0,0,1.91H56.065a2.109,2.109,0,0,1,2.107,2.107v34.765H54.9a8.023,8.023,0,0,0,.075-1.086,8.108,8.108,0,0,0-8.1-8.1,7.986,7.986,0,0,0-1.791.2,6.039,6.039,0,0,0-5.353-3.266,5.9,5.9,0,0,0-2.137.4,5.037,5.037,0,0,0-10.013,0,5.9,5.9,0,0,0-2.137-.4,6.039,6.039,0,0,0-5.353,3.266,7.98,7.98,0,0,0-1.791-.2,8.108,8.108,0,0,0-8.1,8.1,8.022,8.022,0,0,0,.075,1.086H7.013V148.307A2.109,2.109,0,0,1,9.119,146.2H21.366a.955.955,0,1,0,0-1.91H9.119A4.021,4.021,0,0,0,5.1,148.307v34.765H.955a.955.955,0,0,0-.955.955v2.041a3,3,0,0,0,3,3H62.189a3,3,0,0,0,3-3v-2.041A.955.955,0,0,0,64.23,183.072Zm-.955,3a1.087,1.087,0,0,1-1.086,1.086H3a1.087,1.087,0,0,1-1.086-1.086v-1.086H14.222a.955.955,0,1,0,0-1.91H12.213a6.129,6.129,0,0,1-.1-1.086,6.175,6.175,0,0,1,8.212-5.843.955.955,0,0,0,1.216-.593,4.138,4.138,0,0,1,3.9-2.814,4.084,4.084,0,0,1,2.651.988.955.955,0,0,0,1.526-1.016,3.068,3.068,0,0,1-.16-.927,3.127,3.127,0,1,1,6.255,0,3.068,3.068,0,0,1-.16.927.955.955,0,0,0,1.526,1.016,4.085,4.085,0,0,1,2.651-.988,4.138,4.138,0,0,1,3.9,2.814.955.955,0,0,0,1.216.593,6.179,6.179,0,0,1,8.114,6.93H18.3a.955.955,0,1,0,0,1.91h44.97Z" transform="translate(0 -111.929)" fill="#1A96D5"/><path id="Path_4435" data-name="Path 4435" d="M153.238,44.1a4.024,4.024,0,0,0-.931,2.571v2.974a.955.955,0,0,0,1.424.832l6.8-3.837q.389.71.824,1.4l-.855,3.419a.955.955,0,0,0,.926,1.187h8.164a.955.955,0,0,0,.926-1.187l-.855-3.419q.435-.685.824-1.4l6.8,3.837a.955.955,0,0,0,1.424-.832V46.672a4.024,4.024,0,0,0-.931-2.571l-4.533-5.438a26.058,26.058,0,0,0,.361-4.326,25.626,25.626,0,0,0-2-10,24.6,24.6,0,0,0-5.425-8.026.955.955,0,0,0-1.34,0,24.593,24.593,0,0,0-5.425,8.026,25.627,25.627,0,0,0-2,10,26.061,26.061,0,0,0,.36,4.319Zm.979,3.91V46.672a2.111,2.111,0,0,1,.488-1.349l3.579-4.295a25.319,25.319,0,0,0,1.392,3.9Zm8.433,2.721.543-2.172h4.632l.543,2.172Zm13.663-5.409a2.111,2.111,0,0,1,.488,1.349V48.01l-5.46-3.081a25.33,25.33,0,0,0,1.392-3.9Zm-10.8-26.966a22.8,22.8,0,0,1,3.931,5.84h-7.862A22.8,22.8,0,0,1,165.509,18.357Zm-4.727,7.75h9.454a23.928,23.928,0,0,1,1.462,8.23,23.609,23.609,0,0,1-3.421,12.312h-5.536a23.609,23.609,0,0,1-3.421-12.312A23.932,23.932,0,0,1,160.782,26.107Z" transform="translate(-132.916 0)" fill="#1A96D5"/><path id="Path_4436" data-name="Path 4436" d="M232.485,124.258a4.016,4.016,0,1,0-4.016,4.016A4.021,4.021,0,0,0,232.485,124.258Zm-6.123,0a2.107,2.107,0,1,1,2.107,2.107A2.109,2.109,0,0,1,226.362,124.258Z" transform="translate(-195.876 -90.942)" fill="#1A96D5"/></g></svg>',
        title: 'Cost-effective Solutions',
        description:
            'Webtech Evolution builds strategies and follows standard practices to optimize costs while maintaining quality and efficiency. We continuously monitor and adapt to changes in order to come up with cost-effective solutions without compromising quality or project success.',
    },
];

// Detect device type (mobile vs PC)
const isPC = () => {
  if (typeof window === 'undefined') return false;
  return !/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

const FeatureCard = ({ feature, index, isPCView }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isVisible, setIsVisible] = useState(false);
  const [isView, setPCView] = useState(null);

  useEffect(() => {
    if (inView) {
      if (isView) {
        const timer = setTimeout(() => setIsVisible(true), index * 200);
        return () => clearTimeout(timer);
      } else {
        setIsVisible(true);
      }
      setPCView(isPC());
    }
  }, [inView, index, isView]);

  return (
    <div
      ref={ref}
      className={`
        px-[2.5vh] text-left flex flex-col md:block
        transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{ minHeight: '280px' }}
    >
      <div className="flex md:flex-col items-center lg:items-start justify-start mb-3 md:mb-6">
        <div className="w-[10vh] h-[10vh] md:w-[15vh] md:h-[15vh] bg-[#F8F8F8] rounded-full flex items-center justify-center mr-4 md:mr-0 md:-ml-1 flex-shrink-0">
          <div
            className="w-[6vh] h-[6vh] md:w-[8vh] md:h-[8vh] object-contain text-[#1A96D5] flex justify-center items-center"
            dangerouslySetInnerHTML={{ __html: feature.icon }}
          />
        </div>
        <h3 className="text-gray-800 text-[3vh] md:text-[3.5vh] font-[600]">
          {feature.title}
        </h3>
      </div>
      <div className="text-gray-600 font-[400] leading-relaxed mt-2 md:mt-0">
        {feature.description}
      </div>
    </div>
  );
};

const OT2 = () => {
  const [isPCView, setIsPCView] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsPCView(isPC());
    setMounted(true);
  }, []);

  if (isPCView === null) return null; 
  if (!mounted) return null; 

  return (
    <section
      className="relative py-16 text-center"
      style={{ fontFamily: 'Roboto, sans-serif' }}
    >
      <Screen3 />
      <div className="container mx-auto max-w-6xl">
        <p className="text-[#1A96D5] text-[2.5vh] font-[500] uppercase mb-2">WHY CHOOSE US</p>
        <h2
          className="text-gray-800 text-[5vh] md:text-[6vh] font-[600] mb-16 leading-tight"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          What makes us the Best!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              isPCView={isPCView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OT2;
