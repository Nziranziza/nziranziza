import * as React from 'react';

import Project from './project';
import Title from './title';
import { projects } from '../data';

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 section-fade">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title>Projects</Title>
        
        <div className="mt-12 space-y-16">
          {projects.map(({ title, description, stack, image, url, id }, index) => (
            <Project
              title={title}
              description={description}
              stack={stack}
              image={image}
              reverse={!!(index % 2)}
              url={url}
              key={id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
