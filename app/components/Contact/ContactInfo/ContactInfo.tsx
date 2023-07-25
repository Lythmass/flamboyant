import { ContactInfoWrapper, Socials } from 'components';
import { PersonalData } from 'data';
import { fontSecondary } from 'fonts';

export const ContactInfo = () => {
  return (
    <ContactInfoWrapper>
      <h1 className='text-3xl sm:text-4xl font-bold'>My Contact Info</h1>
      <ul
        className={`font-medium flex flex-col gap-3 text-lg sm:text-2xl ${fontSecondary.className}`}
      >
        <li>
          <span className='font-semibold text-light'>Number:</span>{' '}
          {PersonalData.number}
        </li>
        <li>
          <span className='font-semibold text-light'>Email:</span>{' '}
          {PersonalData.email}
        </li>
        <li>
          <span className='font-semibold text-light'>Location:</span>{' '}
          {PersonalData.location}
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
    </ContactInfoWrapper>
  );
};

export default ContactInfo;
