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
      className={classnames("border-secondary text-secondary border-solid border-2 py-2 px-8 rounded", className)}
      {...props}
    >
      {children}
    </a>
  );
};

export default Button;
