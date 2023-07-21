import { ServicesData } from 'data';
import { fontSecondary } from 'fonts';
import { ServiceType } from 'types';

export const Service: React.FC<ServiceType> = (props) => {
  const displaySubServices = props.subServices.map((subService, index) => {
    return <li key={index}>- {subService}</li>;
  });
  const isOddAndLast =
    props.id == ServicesData.length && props.id % 2 != 0 ? 'col-span-2' : '';
  return (
    <div
      style={{ backgroundColor: props.backgroundColor }}
      className={`w-full min-h-[27rem] p-3 lg:p-10 flex flex-col gap-1 ${isOddAndLast}`}
    >
      <div className='w-full flex flex-col-reverse lg:flex-row lg:items-center gap-7 lg:gap-0 lg:justify-between'>
        <h1 className='text-dark font-bold text-4xl'>{props.title}</h1>
        <div className={`${props.animatedIcon} relative lg:m-0 mt-5 ml-5`} />
      </div>
      <p
        className={`${fontSecondary.className} font-medium lg:text-lg lg:pr-10 text-dark`}
      >
        {props.shortDescription}
      </p>
      <ul
        className={`${fontSecondary.className} text-dark text-lg lg:text-2xl flex flex-col gap-1 mt-7 font-medium`}
      >
        {displaySubServices}
      </ul>
    </div>
  );
};

export default Service;
