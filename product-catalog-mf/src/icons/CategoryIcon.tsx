import React from "react";

interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const CategoryIcon: React.FC<IconProps> = ({ width = 20, height = 20, fill = "#1677ff" }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="7" height="7" rx="2" fill={fill} />
    <rect x="14" y="3" width="7" height="7" rx="2" fill={fill} fillOpacity="0.7" />
    <rect x="14" y="14" width="7" height="7" rx="2" fill={fill} fillOpacity="0.5" />
    <rect x="3" y="14" width="7" height="7" rx="2" fill={fill} fillOpacity="0.3" />
  </svg>
);

export default CategoryIcon;
