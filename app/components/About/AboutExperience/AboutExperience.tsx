'use client';
import { AboutExperienceSkillsData } from 'data';
import { fontSecondary } from 'fonts';
import { AboutExperienceSkills } from 'components';
import { SkillType } from 'types';
import { motion } from 'framer-motion';

export const AboutExperience = () => {
  const displaySkills = AboutExperienceSkillsData.map((skill: SkillType) => {
    return (
      <AboutExperienceSkills
        key={skill.id}
        id={skill.id}
        skill={skill.skill}
        yearsOfExperience={skill.yearsOfExperience}
      />
    );
  });
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.25, delay: 0.25, type: 'spring' }}
      className='w-full relative flex flex-col xl:flex-row gap-4 justify-around p-3 xl:px-10 xl:py-7 xl:min-h-[18rem] 2xl:min-h-[18rem] bg-dark shadow-[0.8rem_0.8rem_var(--accent-2)] '
    >
      <div className='w-full px-4 py-3 h-full border-2 border-accent-2 flex flex-col items-start justify-start gap-4'>
        <h1 className='font-bold w-full text-2xl text-light'>
          <span className='text-accent-2'>Work</span> Experience
        </h1>
        <p
          className={`xl:text-xl text-lg text-light ${fontSecondary.className} font-medium`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odit
          provident, error incidunt esse facilis suscipit nobis sapiente aperiam
          odio ad, vel quo optio? Nulla odio autem quaerat voluptatibus qui.
        </p>
      </div>
      <div className='2xl:min-w-[18rem] flex flex-col gap-4 px-4 py-3 bg-accent-2'>
        <h1 className='font-bold w-full text-2xl text-dark'>My Skills</h1>
        <div className='w-full flex flex-wrap gap-1'>{displaySkills}</div>
      </div>
    </motion.div>
  );
};

export default AboutExperience;
