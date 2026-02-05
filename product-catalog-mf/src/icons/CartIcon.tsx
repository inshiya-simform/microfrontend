import React from "react";

interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const CartIcon: React.FC<IconProps> = ({ width = 24, height = 24, fill = "none" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="9" cy="21" r="1" fill={fill !== "none" ? fill : "#1677ff"} />
    <circle cx="20" cy="21" r="1" fill={fill !== "none" ? fill : "#1677ff"} />
    <path
      d="M1 1h2l2.68 13.39A2 2 0 0 0 7.62 17h9.76a2 2 0 0 0 1.94-1.61L21 6H6"
      stroke={fill === "none" ? "#1677ff" : fill}
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CartIcon;
