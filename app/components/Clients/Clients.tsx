import { DisplayClients, SectionTitle } from 'components';
import { fontSecondary } from 'fonts';

export const Clients = () => {
  return (
    <div className='w-full relative px-5 2xl:px-32 lg:py-24 py-12 min-h-screen flex flex-col gap-16'>
      <SectionTitle title='Testimonials' />
      <div className='w-full flex flex-col'>
        <p
          className={`${fontSecondary.className} text-3xl pr-64 font-medium text-dark text-left`}
        >
          Here is a list of my satisfied clients for my services and
          high-quality work.
        </p>
        <DisplayClients />
      </div>
    </div>
  );
};

export default Clients;
