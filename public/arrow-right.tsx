import React, { FC } from 'react';

type ArrowProps = {
  disabled?: boolean;
};

const ArrowRight: FC<ArrowProps> = ({ disabled }) => {
  return (
    <svg
      width="40"
      height="24"
      viewBox="0 0 40 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.2485 13.2499H8.75362C8.05378 13.2499 7.50391 12.7 7.50391 12.0002C7.50391 11.3004 8.05378 10.7505 8.75362 10.7505H31.2485C31.9484 10.7505 32.4982 11.3004 32.4982 12.0002C32.4982 12.7 31.9484 13.2499 31.2485 13.2499Z"
        fill={disabled ? '#969696' : '#0A0A0A'}
      />
      <path
        d="M24.9997 21.9971C24.8358 21.9991 24.6733 21.9668 24.5226 21.9022C24.372 21.8376 24.2365 21.7423 24.1249 21.6222C23.625 21.1223 23.625 20.3475 24.1249 19.8476L31.9981 11.9744L24.1249 4.10117C23.625 3.60129 23.625 2.82646 24.1249 2.32657C24.6248 1.82669 25.3996 1.82669 25.8995 2.32657L34.6475 11.0746C35.1474 11.5745 35.1474 12.3493 34.6475 12.8492L25.8995 21.5972C25.6496 21.8471 25.3246 21.9721 25.0247 21.9721L24.9997 21.9971Z"
        fill={disabled ? '#969696' : '#0A0A0A'}
      />
    </svg>
  );
};

export default ArrowRight;
