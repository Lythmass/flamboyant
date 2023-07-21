import { SectionTitle, DisplayServices } from 'components';

export const Services = () => {
  return (
    <div
      id='services'
      className='w-full relative px-5 2xl:px-32 lg:py-24 py-12 min-h-screen flex flex-col gap-16'
    >
      <SectionTitle title='My Services' />
      <div className='grid grid-cols-1 lg:grid-cols-2 justify-start w-full gap-8'>
        <DisplayServices />
      </div>
    </div>
  );
};

export default Services;
