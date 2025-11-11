import * as React from 'react';
import classnames from 'classnames'

const Button = ({
  children,
  href,
  className,
  ...props
}: React.HTMLProps<HTMLAnchorElement>) => {
  return (
    <a
      href={href}
      className={classnames(
        "relative inline-block border-secondary text-secondary border-solid border-2 py-3 px-8 rounded-lg font-medium",
        "transition-all duration-300 hover:shadow-glow hover:bg-secondary/10",
        "button-glow overflow-hidden group",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/20 to-secondary/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
    </a>
  );
};

export default Button;
