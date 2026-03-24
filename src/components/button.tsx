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
        "relative inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium",
        "bg-gradient-to-r from-indigo-600 to-purple-600 text-white",
        "hover:from-indigo-500 hover:to-purple-500",
        "transform transition-all duration-200 hover:scale-[1.02]",
        "shadow-md shadow-indigo-500/30 hover:shadow-indigo-500/40",
        "border border-transparent",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </a>
  );
};

export default Button;
