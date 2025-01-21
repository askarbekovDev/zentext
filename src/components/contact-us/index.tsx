import Image from 'next/image';
import React, { FC } from 'react';
import styles from './index.module.scss';

const ContactUs: FC = () => {
  return (
    <div className="container">
      <div className={styles.content}>
        <Image
          className={styles.backgroundImg}
          alt="bgr"
          src="/images/background.jpeg"
          width={1280}
          height={853}
        />
      </div>
    </div>
  );
};

export default ContactUs;
