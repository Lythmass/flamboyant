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
    <div className='w-full flex flex-col items-start justify-start h-full gap-16'>
      <HomeDescription />
      <div className='w-full min-h-[20rem] flex gap-10 flex-wrap'>
        {displayExp}
        <hr className='h-[1rem] w-full' />
      </div>
    </div>
  );
};

export default Home;
