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
    <div className="mb-5 md:mb-52">
      <div
        className={classnames('flex relative items-center', className, {
          'flex-row-reverse': reverse,
          'text-right': !reverse,
        })}
      >
        <div className={classnames("md:w-3/5 hidden md:block text-left", {
          'mr-3': !reverse,
          'ml-3': reverse
        })}>
          <a href={url} target="_blank" className="text-sm italic">
            <div className="w-full h-[250px] lg:h-[400px]">
              <img src={image} alt="project" className="mix-blend-difference hover:mix-blend-normal transition-all w-full h-[250px] lg:h-[400px] object-cover duration-150 ease-in-out rounded"/>
            </div>
           <span className={classnames("block text-secondary", {
             'text-right': reverse
           })}>{url}</span>
          </a>
        </div>
        <div
          className={classnames('w-full lg:top-[12.5%] sm:w-2/4 md:absolute', {
            'md:right-0': !reverse,
            'md:left-0': reverse,
          })}
        >
          <h3 className="text-secondary">Highlighted Project</h3>
          <h4 className="text-3xl lg:text-4xl mb-5">{title}</h4>
          <div className="bg-altprimary p-3 rounded mb-2">
            <p className="text-left">{description}</p>
          </div>
          <ul
            className={classnames('flex flex-wrap', {
              'justify-end': !reverse,
            })}
          >
            {stack.map((tech) => (
              <li
                key={tech}
                className={classnames('text-sm font-light', {
                  'ml-4': !reverse,
                  'mr-4': reverse,
                })}
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
