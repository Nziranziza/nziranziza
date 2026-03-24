import React, { useState, useEffect } from "react";
import classNames from "classnames";
import moment from "moment";

import Title from "./title";
import { experiences } from "../data";
import Experience from "./Experience";

const Expriences = () => {
  const [activeExperience, setActiveExperience] = useState(experiences[0]);
  
  return (
    <section id="experience" className="py-12 sm:py-20 md:py-32 section-fade">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title>Experience</Title>
        
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-8 mt-8 sm:mt-12">
          {/* Company list */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="lg:sticky lg:top-24">
              <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-2 lg:pb-0 scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0">
                {experiences.map((experience, index) => (
                  <button
                    key={experience.id}
                    onClick={() => setActiveExperience(experience)}
                    className={classNames(
                      "px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-left whitespace-nowrap transition-all duration-300 transform flex-shrink-0",
                      {
                        "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105":
                          experience.id === activeExperience.id,
                        "glass text-light/70 hover:text-light hover:bg-dark-lighter/50 hover:scale-105":
                          experience.id !== activeExperience.id,
                      }
                    )}
                  >
                    <div className="font-semibold text-xs sm:text-sm md:text-base">{experience.company}</div>
                    <div className="text-xs mt-1 opacity-80">
                      {moment(experience.startDate).format("MMM YYYY")} -{" "}
                      {experience.endDate
                        ? moment(experience.endDate).format("MMM YYYY")
                        : "Present"}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Experience details */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <Experience key={activeExperience.id} experience={activeExperience} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expriences;
