import { ProjectDetailsType } from './ProjectDetailsType';
import { ArrowSvg } from 'components';

export const ProjectDetails: React.FC<ProjectDetailsType> = (props) => {
  return (
    <div className='w-full mt-auto flex flex-col gap-3'>
      <div className='w-full flex gap-3 items-center'>
        <h1 className='w-full shadow-[0.4rem_0.4rem_var(--light)] text-light font-bold px-3 py-2 bg-dark'>
          Start Date: {props.startDate}
        </h1>
        <h1 className='w-full shadow-[0.4rem_0.4rem_var(--light)] text-light font-bold px-3 py-2 bg-dark'>
          End Date: {props.endDate}
        </h1>
      </div>
      <a
        className='w-full flex items-center text-lg text-dark font-bold hover:shadow-[0_0_var(--dark)] hover:translate-x-[0.4rem] hover:translate-y-[0.4rem] transition-all shadow-[0.4rem_0.4rem_var(--dark)] bg-accent-2 py-2 px-3'
        href={props.link}
        target='_blank'
      >
        <h1 className='w-1/2'>Open Project</h1>
        <ArrowSvg width={1000} height={30} color='var(--dark)' />
      </a>
    </div>
  );
};

export default ProjectDetails;
