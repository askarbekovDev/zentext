import React, { FC } from 'react';
import styles from './index.module.scss';

const OurGoals: FC = () => {
  const description = [
    {}
  ]
  return (
    <div className="container">
      <div className={styles.content}>
        <p>Наши цели и преимущества</p>
        <div className={styles.description}></div>
      </div>
    </div>
  );
};

export default OurGoals;
