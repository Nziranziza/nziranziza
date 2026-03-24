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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [experience.id]);

  useEffect(() => {
    function handleResize() {
      if (contentRef && contentRef.current) {
        setClamped(
          contentRef.current.scrollHeight > contentRef.current.clientHeight
        );
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [experience.summary, isVisible]);

  const toggleExpansion = () => {
    setExpanded((isExpanded) => !isExpanded);
  };

  return (
    <div 
      className={classNames(
        "glass rounded-2xl p-4 sm:p-6 md:p-8 card-hover transition-all duration-500 w-full",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3 sm:gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-light mb-2 sm:mb-3 break-words">
            {experience.title}
          </h3>
          <div className="flex flex-col space-y-1.5 text-xs sm:text-sm text-light/70">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="flex items-center gap-1.5">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="break-words">{moment(experience.startDate).format("MMM YYYY")} -{" "}
                {experience.endDate
                  ? moment(experience.endDate).format("MMM YYYY")
                  : "Present"}</span>
              </span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2 py-1 rounded-md bg-indigo-500/20 text-indigo-400 text-xs font-medium whitespace-nowrap">
                {experience.jobType}
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="break-words">{experience.location}</span>
              </span>
            </div>
          </div>
        </div>
        {experience.url && (
          <a
            href={experience.url}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-400 hover:text-indigo-300 transition-colors flex-shrink-0 self-start mt-1 sm:mt-0"
            aria-label={`Visit ${experience.company} website`}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
      
      <div className="relative">
        <div
          ref={contentRef}
          className={classNames("text-light/80 leading-relaxed text-sm sm:text-base prose prose-invert max-w-none relative", {
            "line-clamp-9": !isExpanded,
            "line-clamp-none": isExpanded,
          })}
          style={isClamped && !isExpanded ? {
            maskImage: 'linear-gradient(to bottom, black calc(100% - 160px), rgba(0, 0, 0, 0.2) calc(100% - 80px), transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black calc(100% - 160px), rgba(0, 0, 0, 0.2) calc(100% - 80px), transparent 100%)'
          } : undefined}
          dangerouslySetInnerHTML={{ __html: experience.summary }}
        />
        
        {/* Gradient fade overlay with button when content is clamped */}
        {isClamped && !isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-40 flex items-end justify-center pb-4 pointer-events-none">
            <button
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-indigo-500/40 bg-dark/80 backdrop-blur-sm hover:bg-dark hover:border-indigo-500/60 text-indigo-400 hover:text-indigo-300 font-medium transition-all duration-200 text-sm sm:text-base group pointer-events-auto shadow-lg"
              onClick={toggleExpansion}
            >
              See More
              <svg className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
      
      {isClamped && isExpanded && (
        <div className="mt-4 flex justify-center">
          <button
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-indigo-500/30 bg-dark/40 hover:bg-dark/60 hover:border-indigo-500/50 text-indigo-400 hover:text-indigo-300 font-medium transition-all duration-200 text-sm sm:text-base group"
            onClick={toggleExpansion}
          >
            Show Less
            <svg className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Experience;
