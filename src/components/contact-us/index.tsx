import Image from 'next/image';
import React, { FC } from 'react';
import styles from './index.module.scss';

const ContactUs: FC = () => {
  return (
    <div className="container">
      <div className={styles.content}>
        <div className={styles.contactUs}>
          <h1>Готовы начать?</h1>
          <h3>
            Свяжитесь с нами и найдите идеальную фабрику для вашего бизнеса!
          </h3>
          <button>from UI</button>
        </div>
        <div className={styles.imgWrapper}>
          <Image
            className={styles.backgroundImg}
            alt="bgr"
            src="/images/background.jpeg"
            width={1280}
            height={853}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
