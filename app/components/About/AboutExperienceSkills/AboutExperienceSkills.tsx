import { SkillType } from 'types';
import { fontSecondary } from 'fonts';

export const AboutExperienceSkills: React.FC<SkillType> = (props) => {
  const before =
    'before:absolute before:text-dark before:flex before:items-center before:justify-center before:w-full before:hover:left-0 before:transition-all before:h-full before:bg-light before:left-[-100%] before:top-0 before:content-[attr(content)]';
  return (
    <div
      content={props.yearsOfExperience}
      className={`${fontSecondary.className} font-medium ${before} bg-dark relative cursor-default overflow-hidden px-6 text-center py-1 text-light xl:text-lg`}
    >
      {props.skill}
    </div>
  );
};

export default AboutExperienceSkills;
