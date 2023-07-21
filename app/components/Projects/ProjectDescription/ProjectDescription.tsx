import { fontSecondary } from 'fonts';
import { ProjectDescriptionType } from './ProjectDescriptionType';

export const ProjectDescription: React.FC<ProjectDescriptionType> = (props) => {
  return (
    <>
      <h1 className='text-3xl lg:text-5xl font-bold text-dark'>
        {props.title}
      </h1>
      <h1
        className={`${fontSecondary.className} text-dark font-bold text:lg lg:text-xl`}
      >
        {props.technologies}
      </h1>
      <hr className='w-full my-4 border-dark border-[0.12rem]' />
      <p
        className={`${fontSecondary.className} min-h-[16rem] mb-4 bg-dark text-light p-4 text-lg shadow-[0.4rem_0.4rem_var(--light)]`}
      >
        {props.description}
      </p>
    </>
  );
};

export default ProjectDescription;
