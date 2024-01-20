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
    <div className="md:ml-5 mt-2 md:mt-0">
      <h3 className="font-medium text-3xl mb-1">{experience.title}</h3>
      <div className="flex flex-col text-xs mb-1">
        <span className="text-xs">
          {moment(experience.startDate).format("MMM YY")} -{" "}
          {experience.endDate
            ? moment(experience.endDate).format("MMM YY")
            : "Present"}
          , {experience.jobType}
        </span>
        <span className="text-xs">{experience.location}</span>
      </div>
      <div
        ref={contentRef}
        className={classNames({
          "line-clamp-9": !isExpanded,
          "line-clamp-none": isExpanded,
        })}
        dangerouslySetInnerHTML={{ __html: experience.summary }}
      />
      {isClamped && (
        <span>
          <button className="font-bold text-title" onClick={toggleExpansion}>
            {isExpanded ? "Show Less" : "See More"}
          </button>
        </span>
      )}
    </div>
  );
};

export default Experience;
