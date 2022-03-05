import * as React from 'react';

import Project from './project';
import Title from './title';
import { projects } from '../data';

const Projects = () => {
  return (
    <div>
      <div className="w-full md:w-2/4 lg:mt-[200px]">
        <Title>projects</Title>
      </div>
      {projects.map(({ title, description, stack, image, url }, index) => (
        <Project
          title={title}
          description={description}
          stack={stack}
          image={image}
          reverse={!!(index % 2)}
          className="mb-20"
          url={url}
        />
      ))}
    </div>
  );
};

export default Projects;
