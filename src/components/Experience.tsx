import React, { useState, useRef, useEffect } from "react";
import moment from "moment";
import classNames from "classnames";

import { Experience as ExperienceType } from "../data";

type props = {
  experience: ExperienceType;
};

const Experience = ({ experience }: props) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isClamped, setClamped] = useState(false);
  const [isExpanded, setExpanded] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (contentRef && contentRef.current) {
        setClamped(
          contentRef.current.scrollHeight > contentRef.current.clientHeight
        );
      }
    }
    handleResize()
  }, [experience.summary]);

  const toggleExpansion = () => {
    setExpanded((isExpanded) => !isExpanded);
  };

  return (
    <div className="md:ml-5 mt-2 md:mt-0 animate-fade-in-up">
      <h3 className="font-bold text-3xl mb-2 gradient-text animate-fade-in-up-delay-1">{experience.title}</h3>
      <div className="flex flex-col text-sm mb-4 space-y-1 animate-fade-in-up-delay-2">
        <span className="text-secondary/90 font-medium flex items-center gap-2">
          <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
          {moment(experience.startDate).format("MMM YY")} -{" "}
          {experience.endDate
            ? moment(experience.endDate).format("MMM YY")
            : "Present"}
          , {experience.jobType}
        </span>
        <span className="text-light/70 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-secondary/50 rounded-full"></span>
          {experience.location}
        </span>
      </div>
      <div className="relative animate-fade-in-up-delay-3">
        <div
          ref={contentRef}
          className={classNames(
            "glass-strong p-5 rounded-lg leading-relaxed transition-all duration-300",
            {
              "line-clamp-9": !isExpanded,
              "line-clamp-none": isExpanded,
            }
          )}
          dangerouslySetInnerHTML={{ __html: experience.summary }}
        />
        {isClamped && !isExpanded && (
          <>
            {/* Gradient fade overlay - clickable */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-altprimary via-altprimary/80 to-transparent rounded-b-lg cursor-pointer"
              onClick={toggleExpansion}
            >
              {/* See More button positioned over the fade */}
              <div className="absolute bottom-4 left-5 right-5 flex justify-center">
                <span className="font-semibold text-secondary hover:text-secondary/80 transition-all duration-300 underline decoration-secondary/50 hover:decoration-secondary">
                  See More ↓
                </span>
              </div>
            </div>
          </>
        )}
        {isClamped && isExpanded && (
          <button 
            className="font-semibold text-secondary hover:text-secondary/80 mt-4 transition-all duration-300 underline decoration-secondary/50 hover:decoration-secondary hover:translate-x-1 inline-block" 
            onClick={toggleExpansion}
          >
            Show Less ↑
          </button>
        )}
      </div>
    </div>
  );
};

export default Experience;
