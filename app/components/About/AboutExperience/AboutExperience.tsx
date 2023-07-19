import { AboutExperienceSkillsData } from 'data';
import { fontSecondary } from 'fonts';
import { AboutExperienceSkills } from 'components';
import { SkillType } from 'types';

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
    <div className='w-full relative flex gap-4 justify-around px-10 py-7 h-[18rem] bg-dark shadow-[0.8rem_0.8rem_var(--accent-2)] '>
      <div className='w-full px-4 py-3 h-full border-2 border-accent-2 flex flex-col items-start justify-start gap-4'>
        <h1 className='font-bold w-full text-2xl text-light'>
          <span className='text-accent-2'>Work</span> Experience
        </h1>
        <p
          className={`text-xl text-light ${fontSecondary.className} font-medium`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odit
          provident, error incidunt esse facilis suscipit nobis sapiente aperiam
          odio ad, vel quo optio? Nulla odio autem quaerat voluptatibus qui.
        </p>
      </div>
      <div className='min-w-[18rem] flex flex-col gap-4 px-4 py-3 h-full bg-accent-2'>
        <h1 className='font-bold w-full text-2xl text-dark'>My Skills</h1>
        <div className='w-full flex flex-wrap gap-1'>{displaySkills}</div>
      </div>
    </div>
  );
};

export default AboutExperience;
