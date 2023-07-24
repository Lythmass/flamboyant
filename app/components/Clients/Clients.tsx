import { ClientsDescription, DisplayClients, SectionTitle } from 'components';

export const Clients = () => {
  return (
    <div
      id='clients'
      className='w-full relative px-1 lg:px-5 2xl:px-32 lg:py-24 py-12 min-h-screen flex flex-col gap-16'
    >
      <SectionTitle title='Testimonials' />
      <div className='w-full flex flex-col gap-5'>
        <ClientsDescription />
        <DisplayClients />
      </div>
    </div>
  );
};

export default Clients;
