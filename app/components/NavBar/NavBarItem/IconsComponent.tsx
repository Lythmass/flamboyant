import {
  AboutSvg,
  ContactSvg,
  HomeSvg,
  ProjectsSvg,
  ServicesSvg,
} from 'components';

export const IconsComponent = (props: { icon: string }) => {
  let iconComponent;
  switch (props.icon) {
    case 'homesvg':
      iconComponent = (
        <HomeSvg width={60} height={30} color='var(--accent-2)' />
      );
      break;
    case 'aboutsvg':
      iconComponent = (
        <AboutSvg width={60} height={30} color='var(--accent-2)' />
      );
      break;
    case 'projectssvg':
      iconComponent = (
        <ProjectsSvg width={60} height={30} color='var(--accent-2)' />
      );
      break;
    case 'servicessvg':
      iconComponent = (
        <ServicesSvg width={60} height={30} color='var(--accent-2)' />
      );
      break;
    case 'contactsvg':
      iconComponent = (
        <ContactSvg width={60} height={30} color='var(--accent-2)' />
      );
      break;
  }
  return <>{iconComponent}</>;
};
