import { Socials } from 'components';
import { fontSecondary } from 'fonts';

export const ContactInfo = () => {
  return (
    <div className='w-full text-dark bg-accent-1 shadow-[0.4rem_0.4rem_var(--accent-2)] p-4 flex flex-col gap-4 items-start justify-start'>
      <h1 className='text-4xl font-bold'>My Contact Info</h1>
      <ul
        className={`font-medium flex flex-col gap-3 text-2xl ${fontSecondary.className}`}
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
      <p className={`text-xl ${fontSecondary.className} font-medium `}>
        You can contact me on any of the above, or just send me a message!
      </p>
      <Socials />
    </div>
  );
};

export default ContactInfo;
