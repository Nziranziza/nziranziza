import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import moment from "moment";

import Title from "./title";
import { experiences } from "../data";
import Experience from "./Experience";

const Expriences = () => {
  const [activeExperience, setActiveExperience] = useState(experiences[0]);
  const [isChanging, setIsChanging] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const index = experiences.findIndex(e => e.id === activeExperience.id);
    setActiveIndex(index >= 0 ? index : 0);
    setIsChanging(true);
    const timer = setTimeout(() => setIsChanging(false), 300);
    return () => clearTimeout(timer);
  }, [activeExperience.id]);

  return (
    <div className="lg:mr-20 lg:-ml-20 pb-20 lg:mt-[200px] animate-fade-in-up">
      <div className="flex w-100 justify-between gap-8">
        <div className="w-[40%] hidden lg:block mt-20">
          {activeExperience.image && (
            <a
              href={activeExperience.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-secondary italic group block"
            >
              <div 
                ref={imageRef}
                className={classNames(
                  "glass-strong rounded-lg overflow-hidden card-hover transition-all duration-500",
                  {
                    "opacity-0 scale-95": isChanging,
                    "opacity-100 scale-100": !isChanging,
                  }
                )}
              >
                <img
                  src={activeExperience.image}
                  className="mix-blend-difference group-hover:mix-blend-normal h-[240px] w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
                  alt="company image"
                />
              </div>
              <span className="block mt-2 font-medium hover:text-secondary/80 transition-colors">{activeExperience.url}</span>
            </a>
          )}
        </div>
        <div className="w-full lg:w-[50%]">
          <Title>expriences</Title>
          <div className="flex flex-col md:flex-row gap-4">
            <ul className="flex md:flex-col overflow-x-auto md:overflow-visible relative scrollbar-hide">
              {experiences.map((experience, index) => (
                <li
                  key={experience.id}
                  ref={(el) => (tabRefs.current[index] = el)}
                  onClick={() => setActiveExperience(experience)}
                  className={classNames(
                    "relative py-3 px-6 md:px-4 clear-both whitespace-nowrap border-b-2 md:border-b-0 md:border-l-2 border-solid cursor-pointer transition-all duration-500 z-10 first:ml-0 last:mr-0",
                    {
                      [`bg-secondary/10 border-secondary text-secondary font-medium`]:
                        experience.id === activeExperience.id,
                      [`border-secondary/20 hover:border-secondary/40`]:
                        experience.id !== activeExperience.id,
                    }
                  )}
                >
                  <span className="relative z-10 inline-block">
                    {experience.company}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex-1 relative min-h-[300px]">
              <div
                key={activeExperience.id}
                className={classNames(
                  "transition-all duration-300 ease-in-out",
                  {
                    "opacity-0 translate-x-4": isChanging,
                    "opacity-100 translate-x-0": !isChanging,
                  }
                )}
              >
                <Experience experience={activeExperience} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expriences;
