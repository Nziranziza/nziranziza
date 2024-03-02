import * as React from "react";

type props = {
  children: string;
};

const Title = ({ children }: props) => {
  return (
    <h2 className="text-secondary mb-10 lg:-ml-10  pl-10 rounded font-medium leading-tight text-3xl sm:text-4xl lg:text-5xl title relative h-[30px] lg:h-[40px] after:content-[''] after:bg-secondary after:w-28 after:h-1 after:block after:absolute after:left-0 after:top-11 lg:after:top-16">
      <span className="text-secondary inline-block w-[calc(100%-1rem)] lg:w-full absolute h-[30px] lg:h-[40px] pt-[5px] lg:pt-[15px] pl-2 -ml-2 capitalize">
        {children}
      </span>
    </h2>
  );
};
export default Title;
