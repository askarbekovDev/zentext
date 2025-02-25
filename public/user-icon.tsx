import React, { FC } from 'react';

type UserIconProps = {
  isActive?: boolean;
};

const UserIcon: FC<UserIconProps> = ({ isActive }) => {
  return (
    <svg
      width="17"
      height="20"
      viewBox="0 0 17 20"
      fill={isActive ? 'white' : 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.48493 13.3462C4.61731 13.3462 1.31445 13.931 1.31445 16.2729C1.31445 18.6148 4.59636 19.2205 8.48493 19.2205C12.3525 19.2205 15.6545 18.6348 15.6545 16.2938C15.6545 13.9529 12.3735 13.3462 8.48493 13.3462Z"
        stroke={isActive ? 'white' : '#53545C'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.48489 10.0059C11.023 10.0059 13.0801 7.94779 13.0801 5.40969C13.0801 2.8716 11.023 0.814453 8.48489 0.814453C5.94679 0.814453 3.8887 2.8716 3.8887 5.40969C3.88013 7.93922 5.92394 9.99731 8.45251 10.0059H8.48489Z"
        stroke={isActive ? 'white' : '#53545C'}
        strokeWidth="1.42857"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UserIcon;
