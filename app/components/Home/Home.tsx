'use client';
import { HomeDescription, HomeExperience } from 'components';
import { HomeExperienceData } from 'data';
import { HomeExperienceType } from 'types';
import { motion } from 'framer-motion';

export const Home = () => {
  const displayExp = HomeExperienceData.map((exp: HomeExperienceType) => {
    return (
      <HomeExperience
        key={exp.id}
        topic={exp.topic}
        quantity={exp.quantity}
        id={exp.id}
      />
    );
  });
  return (
    <div className='w-full flex flex-col items-start justify-start h-full gap-16'>
      <HomeDescription />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 1, type: 'spring' }}
        className='w-full min-h-[20rem] flex gap-10 flex-wrap'
      >
        {displayExp}
        <hr className='h-[1rem] w-full' />
      </motion.div>
    </div>
  );
};

export default Home;
