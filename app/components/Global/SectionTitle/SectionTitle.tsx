'use client';
import { motion } from 'framer-motion';

export const SectionTitle: React.FC<{ title: string }> = (props) => {
  return (
    <div className='w-full flex items-center gap-4'>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.25, type: 'spring' }}
        className='text-5xl whitespace-nowrap lg:text-6xl xl:text-7xl  text-dark font-bold text-left'
      >
        {props.title}
      </motion.h1>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.25, delay: 0.5, type: 'spring' }}
        className='w-full h-1 mt-2 bg-dark'
      />
    </div>
  );
};

export default SectionTitle;
