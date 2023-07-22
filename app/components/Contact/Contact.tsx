import { SectionTitle, ContactForm, ContactInfo } from 'components';

export const Contact = () => {
  return (
    <div
      id='contact'
      className='w-full relative px-5 2xl:px-32 lg:py-24 py-12 min-h-screen flex flex-col gap-16'
    >
      <SectionTitle title='Contact Me' />
      <div className='w-full flex gap-8'>
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
};

export default Contact;
