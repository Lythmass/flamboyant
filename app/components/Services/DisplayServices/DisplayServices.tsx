import { ServicesData } from 'data';
import { Service } from 'components';

export const DisplayServices = () => {
  const displayServices = ServicesData.map((service) => {
    return (
      <Service
        key={service.id}
        id={service.id}
        title={service.title}
        shortDescription={service.shortDescription}
        subServices={service.subServices}
        backgroundColor={service.backgroundColor}
        animatedIcon={service.animatedIcon}
      />
    );
  });
  return <>{displayServices}</>;
};

export default DisplayServices;
