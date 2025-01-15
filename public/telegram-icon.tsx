import React, { FC } from 'react';

type TelegramIconType = {
  fill?: string;
}

const TelegramIcon: FC<TelegramIconType> = ({fill}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_39_10806)">
        <path
          d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15"
          stroke={fill ? fill : "#FAF9F6"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_39_10806">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TelegramIcon;
