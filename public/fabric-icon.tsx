import React from 'react';

type FabricIconType = {
  isActive?: boolean;
};

const FabricIcon: React.FC<FabricIconType> = ({ isActive }) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill={isActive ? 'white' : 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.25 18.7879H19.75M7.031 1.21191H13.969C14.705 1.21191 15.4108 1.50428 15.9312 2.02469C16.4516 2.54511 16.744 3.25094 16.744 3.98691V18.7869H4.256V3.98691C4.256 3.25094 4.54837 2.54511 5.06878 2.02469C5.58919 1.50428 6.29502 1.21191 7.031 1.21191Z"
        stroke={isActive ? 'white' : '#53545C'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.57461 12.3131H11.4246C11.6068 12.3131 11.7871 12.349 11.9554 12.4187C12.1237 12.4884 12.2766 12.5905 12.4054 12.7193C12.5342 12.8481 12.6363 13.001 12.706 13.1693C12.7757 13.3376 12.8116 13.5179 12.8116 13.7001V18.7881H8.18861V13.7001C8.18861 13.3322 8.33474 12.9794 8.59485 12.7193C8.85496 12.4592 9.20775 12.3131 9.57561 12.3131M7.72461 4.91309H13.2746M7.72461 8.61309H13.2746"
        stroke={isActive ? '#121A21' : '#53545C'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FabricIcon;
