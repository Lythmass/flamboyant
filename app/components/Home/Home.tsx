import { HomeDescription, HomeExperience } from 'components';
import { HomeExperienceData } from 'data';
import { HomeExperienceType } from 'types';

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
    <div
      id='home'
      className='w-full px-10 xl:pl-32 lg:py-24 py-12 flex flex-col items-start justify-start min-h-screen gap-8 md:gap-16'
    >
      <HomeDescription />
      <div className='w-full min-h-[20rem] flex gap-10 flex-wrap'>
        {displayExp}
      </div>
    </div>
  );
};

export default Home;
