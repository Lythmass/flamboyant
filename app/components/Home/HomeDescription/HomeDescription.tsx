import { fontSecondary } from 'fonts';
import { ContactMeButton, HomeDescriptionTypeAnimation } from 'components';

export const HomeDescription = () => {
  return (
    <div className='w-[70%] text-dark flex flex-col justify-center items-start gap-10 '>
      <h1 className='text-3xl '>
        <span className='text-accent-1'>Gigi</span> Lapachishvili
      </h1>
      <h1 className={`text-7xl font-medium ${fontSecondary.className}`}>
        Welcome to the world of my flamboyant art!
      </h1>
      <p className={`pr-24 text-5xl min-w-[75rem] ${fontSecondary.className}`}>
        <HomeDescriptionTypeAnimation />
      </p>
      <ContactMeButton />
    </div>
  );
};

export default HomeDescription;
