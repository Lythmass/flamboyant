import { fontSecondary } from 'fonts';
import {
  ContactMeButton,
  HomeDescriptionTypeAnimation,
  HomeDescriptionWrapper,
} from 'components';
import Link from 'next/link';
import { HomeDescriptionData } from 'data';

export const HomeDescription = () => {
  return (
    <HomeDescriptionWrapper>
      <h1
        className={`text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium ${fontSecondary.className}`}
      >
        {HomeDescriptionData.title}
      </h1>
      <p
        className={`xl:pr-24 text-lg sm:text-2xl h-4 md:h-auto lg:text-3xl xl:text-5xl min-w-[90vw] md:min-w-[75rem] ${fontSecondary.className}`}
      >
        <HomeDescriptionTypeAnimation />
      </p>
      <ContactMeButton>
        <Link href='#contact'>{HomeDescriptionData.cta}</Link>
      </ContactMeButton>
    </HomeDescriptionWrapper>
  );
};

export default HomeDescription;
