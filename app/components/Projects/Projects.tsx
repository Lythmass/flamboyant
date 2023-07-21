import { DisplayProjects, SectionTitle } from 'components';

export const Projects = () => {
  return (
    <div
      id='projects'
      className='w-full relative xl:px-32 lg:py-24 py-12 min-h-screen flex flex-col gap-16'
    >
      <SectionTitle title='Take a look at my projects' />
      <div className='w-full flex flex-col gap-44 relative'>
        <DisplayProjects />
      </div>
    </div>
  );
};

export default Projects;
