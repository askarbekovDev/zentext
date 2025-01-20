import React, { FC } from 'react';
import styles from './index.module.scss';
import {
  SearchIconSecond,
  StarIcon,
  TagIcon,
  ThreeUsersIcon,
} from '../../../public';

const OurGoals: FC = () => {
  const description = [
    {
      title: 'Удобный поиск фабрик и размещение заказов',
      icon: <SearchIconSecond />,
    },
    {
      title: 'Прямое взаимодействие заказчиков и фабрик',
      icon: <ThreeUsersIcon />,
    },
    { title: 'Прозрачный выбор с отзывами и рейтингами', icon: <StarIcon /> },
    { title: 'Качественная продукция по доступным ценам', icon: <TagIcon /> },
  ];
  return (
    <div className="container">
      <div className={styles.content}>
        <p className={styles.headTitle}>Наши цели и преимущества</p>
        <div className={styles.description}>
          {description.map((item, idx) => (
            <div key={idx} className={styles.theItem}>
              <div
                className={`${styles.wrapper} ${idx === 0 ? styles.bgrndDark : ''}`}
              >
                {item.icon}
              </div>
              <p className={styles.title}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurGoals;
