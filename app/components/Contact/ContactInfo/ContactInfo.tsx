import { Socials } from 'components';
import { fontSecondary } from 'fonts';

export const ContactInfo = () => {
  return (
    <div className='w-full text-dark bg-accent-1 shadow-[0.4rem_0.4rem_var(--accent-2)] p-4 flex flex-col gap-4 min-h-screen items-start justify-start'>
      <h1 className='text-3xl sm:text-4xl font-bold'>My Contact Info</h1>
      <ul
        className={`font-medium flex flex-col gap-3 text-lg sm:text-2xl ${fontSecondary.className}`}
      >
        <li>
          <span className='font-semibold text-light'>Number:</span> 577-55-11-71
        </li>
        <li>
          <span className='font-semibold text-light'>Email:</span>{' '}
          lythmass17@gmail.com
        </li>
        <li>
          <span className='font-semibold text-light'>Location:</span> Tbilisi,
          Georgia
        </li>
      </ul>

      <p
        className={`text-base sm:text-xl ${fontSecondary.className} font-medium `}
      >
        You can contact me on any of the above, or just send me a message!
      </p>

      <div className='mt-auto w-full gap-3 flex-col sm:flex-row sm:flex sm:justify-between'>
        <h1 className='text-xl sm:text-3xl w-full font-bold text-light'>
          My Socials:
        </h1>
        <Socials iconsColor='--light' />
      </div>
    </div>
  );
};

export default ContactInfo;
