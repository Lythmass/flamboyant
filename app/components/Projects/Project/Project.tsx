import Image from 'next/image';
import { ProjectDescription, ProjectDetails } from 'components';
import { ProjectType } from 'types';

export const Project: React.FC<ProjectType> = (props) => {
  return (
    <div className='w-full relative boxes shadow-[0.4rem_0.4rem_var(--dark)] p-7 border-2 border-dark min-h-[35rem] pb-5 flex flex-col lg:flex-row items-start gap-10 lg:gap-0'>
      <div className='w-full lg:w-1/2 min-h-[31rem] flex flex-col items-start gap-1'>
        <ProjectDescription
          technologies={props.technologies}
          title={props.title}
          description={props.description}
        />
        <ProjectDetails
          startDate={props.startDate}
          endDate={props.endDate}
          link={props.link}
        />
      </div>
      <Image
        className='w-full self-end lg:w-1/2 lg:pl-10 min-h-[31.3rem] object-cover'
        src={props.image}
        width={1400}
        height={700}
        alt={props.title}
      />
    </div>
  );
};

export default Project;
