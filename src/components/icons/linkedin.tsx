import * as React from 'react';

type props = {
	color: string;
	className?: string
};

const LinkedIn = ({ color, className }: props) => {
	return (
		<svg
			className={className}
			width="19"
			height="20"
			viewBox="0 0 19 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clip-path="url(#clip0_43_60)">
				<path
					d="M4.58384 17.5001H0.955719V5.81647H4.58384V17.5001ZM2.76783 4.22272C1.60767 4.22272 0.666656 3.26178 0.666656 2.10163C0.666657 1.54436 0.888029 1.00992 1.28208 0.615876C1.67612 0.22183 2.21056 0.000457764 2.76783 0.000457764C3.32509 0.000457764 3.85953 0.22183 4.25358 0.615876C4.64763 1.00992 4.869 1.54436 4.869 2.10163C4.869 3.26178 3.92759 4.22272 2.76783 4.22272ZM18.1628 17.5001H14.5424V11.8126C14.5424 10.4571 14.5151 8.71881 12.6561 8.71881C10.7698 8.71881 10.4807 10.1915 10.4807 11.7149V17.5001H6.8565V5.81647H10.3362V7.41022H10.387C10.8713 6.49225 12.0545 5.5235 13.8198 5.5235C17.4917 5.5235 18.1667 7.94147 18.1667 11.0821V17.5001H18.1628Z"
					fill={color}
				/>
			</g>
			<defs>
				<clipPath id="clip0_43_60">
					<rect
						width="17.5"
						height="20"
						fill="white"
						transform="translate(0.666656)"
					/>
				</clipPath>
			</defs>
		</svg>
	);
};

LinkedIn.defaultProps = {
  color: '#ffffff'
}

export default LinkedIn;
