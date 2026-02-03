import React from 'react';

const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="24" cy="24" r="22" fill="#3B82F6" />
    <path
      d="M24 8L32 16H28V24H32L24 32L16 24H20V16H16L24 8Z"
      fill="white"
    />
    <path
      d="M14 28H34V36C34 37.1046 33.1046 38 32 38H16C14.8954 38 14 37.1046 14 36V28Z"
      fill="white"
    />
  </svg>
);

export default Logo;
