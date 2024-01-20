import * as React from "react";

type props = {
  color: string;
};
const Humberger = ({ color }: props) => {
  return (
    <svg
      width="35"
      height="25"
      viewBox="0 0 35 25"
      fill="none"
    >
      <path d="M0 1.5625H35" stroke={color} strokeWidth="2" />
      <line
        x1="8.02087"
        y1="13.5833"
        x2="35"
        y2="13.5833"
        stroke={color}
        strokeWidth="2"
      />
      <line
        x1="16.0416"
        y1="24"
        x2="35"
        y2="24"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};

Humberger.defaultProps = {
  color: "#ffffff",
};

export default Humberger;
