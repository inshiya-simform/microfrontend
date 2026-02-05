import React from "react";

interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const WishlistIcon: React.FC<IconProps> = ({ width = 24, height = 24, fill = "none" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.1 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54l-1.35 1.31z"
      stroke={fill === "none" ? "#d32f2f" : fill}
      strokeWidth="2"
      fill={fill !== "none" ? fill : "none"}
    />
  </svg>
);

export default WishlistIcon;
