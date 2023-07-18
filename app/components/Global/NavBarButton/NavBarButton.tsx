'use client';
import { NavBarButtonConfig } from 'config';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const NavBarButton = () => {
  const [variant, setVariant] = useState('closed');

  const lineProps = {
    initial: 'closed',
    animate: variant,
    strokeWidth: '4',
    stroke: 'var(--accent-2)',
    vectorEffect: 'non-scaling-stroke',
    transition: { duration: 0.2 },
  };

  const changeHandler = () => {
    setVariant((oldValue) => (oldValue === 'closed' ? 'opened' : 'closed'));
    if (window.innerWidth < 768) {
      document?.body.classList.toggle('overflow-hidden');
    }
  };

  return (
    <>
      <input
        onChange={changeHandler}
        id='navbar-button'
        className='hidden peer'
        type='checkbox'
      />
      <label
        className='fixed right-7 md:hidden top-10 z-[150]'
        htmlFor='navbar-button'
      >
        <motion.svg
          overflow='visible'
          preserveAspectRatio='none'
          width={40}
          height={40}
        >
          <motion.line
            x1='0'
            x2={40}
            y1='0'
            y2='0'
            {...lineProps}
            variants={NavBarButtonConfig['upper']}
          />
          <motion.line
            x1='0'
            x2={40}
            y1='9'
            y2='9'
            {...lineProps}
            variants={NavBarButtonConfig['mid']}
          />
          <motion.line
            x1='0'
            x2={40}
            y1='18'
            y2='18'
            {...lineProps}
            variants={NavBarButtonConfig['lower']}
          />
        </motion.svg>
      </label>
    </>
  );
};

export default NavBarButton;
