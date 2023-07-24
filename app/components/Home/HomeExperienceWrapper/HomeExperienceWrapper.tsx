'use client';
import { motion } from 'framer-motion';

export const HomeExperienceWrapper: React.FC<{ children: React.ReactNode }> = (
  props,
) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.25, duration: 1.25, type: 'spring' }}
      className='w-full lg:w-[29%] xl:w-1/4 h-[20rem]'
    >
      {props.children}
    </motion.div>
  );
};

export default HomeExperienceWrapper;
