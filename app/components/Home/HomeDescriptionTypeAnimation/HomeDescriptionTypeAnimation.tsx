'use client';
import { TypeAnimation } from 'react-type-animation';

export const HomeDescriptionTypeAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        'I can build websites.',
        1500,
        'I can create elegant designs.',
        1500,
        'I can build mobile apps.',
        1500,
        'I can create beautiful animations.',
        1500,
      ]}
      repeat={Infinity}
    />
  );
};

export default HomeDescriptionTypeAnimation;
