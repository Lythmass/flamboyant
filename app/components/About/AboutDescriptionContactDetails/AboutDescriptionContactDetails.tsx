import { PersonalData } from 'data';

export const AboutDescriptionContactDetails = () => {
  return (
    <div className='w-full flex 2xl:flex-row flex-col 2xl:mt-auto 2xl:gap-8'>
      <h1 className='text-lg text-light'>
        <span className='text-accent-1'>Number:</span> {PersonalData.number}
      </h1>
      <h1 className='text-lg text-light'>
        <span className='text-accent-1'>Email:</span> {PersonalData.email}
      </h1>
      <h1 className='text-lg text-light'>
        <span className='text-accent-1'>Location:</span> {PersonalData.location}
      </h1>
    </div>
  );
};

export default AboutDescriptionContactDetails;
