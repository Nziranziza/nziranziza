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
    <div className={classnames("mb-16 md:mb-24", className)}>
      <div className="glass rounded-2xl overflow-hidden card-hover group">
        <div className={classnames("grid md:grid-cols-2 gap-0", {
          'md:grid-flow-dense': reverse,
        })}>
          {/* Image */}
          <div className={classnames("relative h-64 md:h-full min-h-[300px] overflow-hidden", {
            'md:col-start-2': reverse,
          })}>
            {url ? (
              <a href={url} target="_blank" rel="noreferrer" className="block h-full">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-indigo-400 text-sm font-medium flex items-center">
                    Visit Project
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </div>
              </a>
            ) : (
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
          </div>
          
          {/* Content */}
          <div className={classnames("p-6 md:p-8 flex flex-col justify-center", {
            'md:col-start-1': reverse,
          })}>
            <div className="mb-4">
              <span className="text-indigo-400 text-sm font-semibold">Featured Project</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-light mb-4">
              {url ? (
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-indigo-400 transition-colors link-hover"
                >
                  {title}
                </a>
              ) : (
                title
              )}
            </h3>
            <p className="text-light/80 mb-6 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-dark/50 border border-indigo-500/30 text-xs text-light/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
