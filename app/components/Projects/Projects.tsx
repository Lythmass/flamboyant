import { DisplayProjects } from 'components';

export const Projects = () => {
  return (
    <div
      id='projects'
      className='w-full relative xl:px-32 lg:py-24 py-12 min-h-screen flex flex-col gap-16'
    >
      <div className='w-full flex items-center gap-4'>
        <h1 className='w-full whitespace-nowrap text-5xl lg:text-6xl xl:text-7xl text-dark font-bold text-left'>
          Take a look at my projects
        </h1>
        <div className='w-full h-1 mt-2 bg-dark' />
      </div>
      <div className='w-full flex flex-col gap-44 relative'>
        <DisplayProjects />
      </div>
    </div>
  );
};

export default Projects;
