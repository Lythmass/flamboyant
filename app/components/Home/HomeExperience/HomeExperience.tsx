'use client';
import { HomeExperienceType } from 'types';
import { motion } from 'framer-motion';

export const HomeExperience: React.FC<HomeExperienceType> = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.25, duration: 1.25, type: 'spring' }}
      className='w-full lg:w-[29%] xl:w-1/4 h-[20rem]'
    >
      <div className='w-full boxes text-dark bg-accent-1 h-full border-2 border-dark flex justify-center items-center shadow-[0.4rem_0.4rem_var(--dark)] hover:shadow-[0.8rem_0.8rem_var(--dark)] hover:translate-x-[-0.4rem] hover:translate-y-[-0.4rem] transition-all'>
        <h1 className='text-4xl xl:text-4xl lg:text-2xl font-bold text-center capitalize'>
          <span className='text-light'>{props.quantity}+</span> {props.topic}
        </h1>
      </div>
    </motion.div>
  );
};

export default HomeExperience;
