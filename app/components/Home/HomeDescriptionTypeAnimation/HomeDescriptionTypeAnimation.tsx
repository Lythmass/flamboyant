'use client';
import { HomeDescriptionData } from 'data';
import { TypeAnimation } from 'react-type-animation';

export const HomeDescriptionTypeAnimation = () => {
  return (
    <TypeAnimation
      sequence={HomeDescriptionData.typeAnimationTexts}
      repeat={Infinity}
    />
  );
};

export default HomeDescriptionTypeAnimation;
