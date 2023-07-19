import { AboutDescription, AboutExperience } from 'components';

export const About = () => {
  return (
    <div
      id='about'
      className='w-full flex flex-col items-start justify-start gap-10 px-32 lg:py-24 py-12 min-h-screen'
    >
      <AboutDescription />
      <AboutExperience />
    </div>
  );
};

export default About;
