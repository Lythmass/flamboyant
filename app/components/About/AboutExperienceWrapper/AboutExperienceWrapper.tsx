'use client';
import { motion } from 'framer-motion';

export const AboutExperienceWrapper: React.FC<{ children: React.ReactNode }> = (
  props,
) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.25, delay: 0.25, type: 'spring' }}
      className='w-full relative flex flex-col xl:flex-row gap-4 justify-around p-3 xl:px-10 xl:py-7 xl:min-h-[18rem] 2xl:min-h-full bg-dark shadow-[0.8rem_0.8rem_var(--accent-2)] '
    >
      {props.children}
    </motion.div>
  );
};

export default AboutExperienceWrapper;
