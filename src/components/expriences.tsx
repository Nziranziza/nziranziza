import React, { useState } from 'react';
import classNames from 'classnames';
import moment from 'moment';

import Title from './title';
import { experiences } from '../data';

const Expriences = () => {
  const [activeExperience, setActiveExperience] = useState(experiences[0]);
  return (
    <div className="lg:mr-20 lg:-ml-20 pb-20 lg:mt-[200px]">
      <div className="flex w-100 justify-between">
        <div className="w-[40%] hidden lg:block mt-20">
          {activeExperience.image && (
            <a
              href={activeExperience.url}
              target="_blank"
              className="text-xs text-secondary italic"
            >
              <img src={activeExperience.image} className="mix-blend-difference hover:mix-blend-normal h-[240px] object-cover transition-all duration-150 ease-in-out rounded" alt="company image" />
              {activeExperience.url}
            </a>
          )}
        </div>
        <div className="w-full lg:w-[50%]">
          <Title>expriences</Title>
          <div className="flex flex-col md:flex-row">
            <ul className="flex md:flex-col overflow-auto md:overflow-visible">
              {experiences.map((experience) => (
                <li
                  key={experience.id}
                  onClick={() => setActiveExperience(experience)}
                  className={classNames(
                    'py-3 px-4 clear-both whitespace-nowrap border-b-2 md:border-b-0 md:border-l-2 border-solid hover:bg-secondary/[0.1] cursor-pointer',
                    {
                      [`bg-secondary/[0.1] border-secondary`]:
                        experience.id === activeExperience.id,
                      [`border-secondary/[0.1]`]:
                        experience.id !== activeExperience.id,
                    }
                  )}
                >
                  {experience.company}
                </li>
              ))}
            </ul>
            <div className="md:ml-5 mt-2 md:mt-0">
              <h3 className="font-medium text-3xl mb-1">
                {activeExperience.title}
              </h3>
              <div className="flex flex-col text-xs mb-1">
                <span className="text-xs">
                  {moment(activeExperience.startDate).format('MMM YY')} -{' '}
                  {moment(activeExperience.endDate).format('MMM YY')},{' '}
                  {activeExperience.jobType}
                </span>
                <span className="text-xs">{activeExperience.location}</span>
              </div>
              <p>{activeExperience.summary}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expriences;
