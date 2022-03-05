import * as React from 'react';

type props = {
  children: string;
};

const Title = ({ children }: props) => {
  return (
    <h2 className="text-secondary after:bg-primary mb-10 lg:-ml-10 border border-solid border-secondary pl-10 rounded font-medium leading-tight text-3xl sm:text-4xl lg:text-5xl title relative h-[30px] lg:h-[40px]">
      <span className="bg-primary text-secondary inline-block w-[calc(100%-1rem)] lg:w-full absolute h-[30px] lg:h-[40px] pt-[5px] lg:pt-[15px] pl-2 -ml-2">
        {children}
      </span>
    </h2>
  );
};
export default Title;
