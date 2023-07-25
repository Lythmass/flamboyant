import Image from 'next/image';
import { fontSecondary } from 'fonts';
import {
  AboutDescriptionContactDetails,
  AboutDescriptionWrapper,
} from 'components';
import { AboutMeData, PersonalData } from 'data';

export const AboutDescription = () => {
  return (
    <AboutDescriptionWrapper>
      <div className='colorful hidden absolute right-2 bottom-2 2xl:right-10 2xl:top-5 w-10 h-10 lg:flex' />
      <Image
        className='xl:w-[18rem] h-[14rem] sm:h-[20rem] lg:h-[25rem] xl:h-auto w-full object-cover'
        src={PersonalData.profilePicture}
        width={1400}
        height={700}
        alt={`${PersonalData.firstName} ${PersonalData.lastName}`}
      />
      <div className='w-full xl:px-0 min-h-full gap-2 flex flex-col items-start justify-start'>
        <h1 className='xl:text-4xl text-2xl text-light'>
          <span className='text-accent-1'>{PersonalData.firstName}</span>{' '}
          {PersonalData.lastName}
        </h1>
        <p
          className={`${fontSecondary.className} break-words xl:w-full text-light text-lg xl:text-xl font-medium`}
        >
          {AboutMeData.description}
        </p>
        <AboutDescriptionContactDetails />
      </div>
    </AboutDescriptionWrapper>
  );
};

export default AboutDescription;
