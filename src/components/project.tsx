import * as React from 'react';
import classnames from 'classnames';

type props = {
  title: string;
  description: string;
  stack: string[];
  image: any;
  reverse?: boolean;
  className?: string;
  url?: string;
};

const Project = ({ 
  title, 
  description, 
  stack, 
  image, 
  reverse, 
  className,
  url 
}: props) => {
  return (
    <div className="mb-5 md:mb-52 animate-fade-in-up">
      <div
        className={classnames('flex relative items-center', className, {
          'flex-row-reverse': reverse,
          'text-right': !reverse,
        })}
      >
        <div className={classnames("md:w-3/5 my-10 hidden md:block text-left", {
          'mr-3': !reverse,
          'ml-3': reverse
        })}>
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-sm italic group">
            <div className="w-full h-[250px] lg:h-[200px] flex justify-center items-center overflow-hidden rounded-lg glass-strong card-hover">
              <img 
                src={image} 
                alt="project" 
                className="mix-blend-difference group-hover:mix-blend-normal transition-all w-full h-[400px] lg:h-[200px] object-cover duration-500 ease-in-out rounded-lg group-hover:scale-110"
              />
            </div>
           <span className={classnames("block text-secondary mt-2 font-medium hover:text-secondary/80 transition-colors", {
             'text-right': reverse
           })}>{url}</span>
          </a>
        </div>
        <div
          className={classnames('w-full lg:top-[12.5%] sm:w-2/4 md:absolute z-10', {
            'md:right-0': !reverse,
            'md:left-0': reverse,
          })}
        >
          <h3 className="text-secondary text-sm font-semibold mb-2">Highlighted Project</h3>
          <h4 className="text-3xl lg:text-4xl mb-5 font-bold gradient-text">{title}</h4>
          <div className="glass-strong p-5 rounded-lg mb-4 shadow-card card-hover border border-secondary/10">
            <p className="text-left leading-relaxed">{description}</p>
          </div>
          <ul
            className={classnames('flex flex-wrap gap-3', {
              'justify-end': !reverse,
            })}
          >
            {stack.map((tech) => (
              <li
                key={tech}
                className={classnames(
                  'text-sm font-medium px-3 py-1 rounded-full glass border border-secondary/20 text-secondary/90 hover:text-secondary hover:border-secondary/40 transition-all',
                  {
                    'ml-0': !reverse,
                    'mr-0': reverse,
                  }
                )}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
