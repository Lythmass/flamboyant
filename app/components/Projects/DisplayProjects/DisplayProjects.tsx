'use client';
import { ProjectsData } from 'data';
import StickyBox from 'react-sticky-box';
import { Project } from 'components';

export const DisplayProjects = () => {
  const displayProjects = ProjectsData.map((project) => {
    return (
      <StickyBox key={project.id} offsetTop={100} offsetBottom={0}>
        <Project
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
          key={project.id}
          technologies={project.technologies}
          startDate={project.startDate}
          endDate={project.endDate}
        />
      </StickyBox>
    );
  });
  return <>{displayProjects}</>;
};

export default DisplayProjects;
