'use client';
import { fontSecondary } from 'fonts';
import { ContactMeButton, HomeDescriptionTypeAnimation } from 'components';
import { motion } from 'framer-motion';

export const HomeDescription = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: 'spring' }}
      className='w-full xl:w-[70%] text-dark flex flex-col justify-center items-start gap-3 md:gap-10 '
    >
      <h1 className='text-2xl'>
        <span className='text-accent-1'>Gigi</span> Lapachishvili
      </h1>
      <h1
        className={`text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium ${fontSecondary.className}`}
      >
        Welcome to the world of my flamboyant art!
      </h1>
      <p
        className={`xl:pr-24 text-lg sm:text-2xl h-4 md:h-auto lg:text-3xl xl:text-5xl min-w-[90vw] md:min-w-[75rem] ${fontSecondary.className}`}
      >
        <HomeDescriptionTypeAnimation />
      </p>
      <ContactMeButton />
    </motion.div>
  );
};

export default HomeDescription;
