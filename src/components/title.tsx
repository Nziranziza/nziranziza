import * as React from "react";

type props = {
  children: string;
};

const Title = ({ children }: props) => {
  return (
    <div className="relative inline-block mb-12">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text capitalize">
        {children}
      </h2>
      <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
    </div>
  );
};

export default Title;
