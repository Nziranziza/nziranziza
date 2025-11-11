import * as React from "react";

type props = {
  children: string;
};

const Title = ({ children }: props) => {
  return (
    <h2 className="mb-10 lg:-ml-10 pl-10 relative">
      <span className="gradient-text font-bold leading-tight text-3xl sm:text-4xl lg:text-5xl capitalize block mb-2">
        {children}
      </span>
      <span className="block w-28 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full"></span>
    </h2>
  );
};
export default Title;
