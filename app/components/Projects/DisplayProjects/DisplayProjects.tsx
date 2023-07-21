'use client';
import { ProjectsData } from 'data';
import { Project } from 'components';

export const DisplayProjects = () => {
  const displayProjects = ProjectsData.map((project) => {
    return (
      <Project
        key={project.id}
        title={project.title}
        description={project.description}
        image={project.image}
        link={project.link}
        technologies={project.technologies}
        startDate={project.startDate}
        endDate={project.endDate}
      />
    );
  });
  return <>{displayProjects}</>;
};

export default DisplayProjects;
