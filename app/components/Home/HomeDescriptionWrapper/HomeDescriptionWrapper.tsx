'use client';
import { motion } from 'framer-motion';

export const HomeDescriptionWrapper: React.FC<{ children: React.ReactNode }> = (
  props,
) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.25, type: 'spring' }}
      className='w-full xl:w-[70%] text-dark flex flex-col justify-center items-start gap-3 md:gap-10 '
    >
      {props.children}
    </motion.div>
  );
};

export default HomeDescriptionWrapper;
