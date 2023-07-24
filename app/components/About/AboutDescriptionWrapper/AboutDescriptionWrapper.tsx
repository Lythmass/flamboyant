'use client';
import { motion } from 'framer-motion';

export const AboutDescriptionWrapper: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.25, duration: 1.25, type: 'spring' }}
      className='relative w-full p-3 xl:px-10 xl:py-7 flex flex-col items-center xl:items-stretch xl:flex-row gap-5 xl:gap-10 bg-dark min-h-[18rem] shadow-[0.8rem_0.8rem_var(--accent-1)] '
    >
      {props.children}
    </motion.div>
  );
};

export default AboutDescriptionWrapper;
