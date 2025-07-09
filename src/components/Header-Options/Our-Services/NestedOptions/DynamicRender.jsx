'use client'; // Required if used inside a Client Component in Next.js App Router

import TitlePara from './SmallComponents/TitlePara';
import Bullet from './SmallComponents/Bullet';
import BulletCheck from './SmallComponents/BulletCheck';
import EvsImg from './SmallComponents/EvsImg';
import Faq from './SmallComponents/Faq';

const componentsMap = {
  cont: TitlePara,
  Bullet: Bullet,
  BulletCheck: BulletCheck,
  EvsImg: EvsImg,
  Block: Faq,
};

const DynamicRenderer = ({ blocks = [] }) => {
  return blocks.map((block, index) => {
    const Component = componentsMap[block.type];
    if (!Component) return null;
    return <Component key={index} {...block.props} />;
  });
};

export default DynamicRenderer;
