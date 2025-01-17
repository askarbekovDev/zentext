'use client';

import { FC, useState } from 'react';
import styles from './index.module.scss';
import {
  RequestIcon,
  UserIcon,
  FactoryIcon,
  CommentIcon,
} from '../../../public';

const Filter: FC = () => {
  const [active, setActive] = useState('requests');

  const filterItems = [
    {
      id: 'requests',
      label: 'Заявки',
      icon: (isActive: boolean) => <RequestIcon isActive={isActive} />,
    },
    {
      id: 'factories',
      label: 'Фабрики',
      icon: (isActive: boolean) => <FactoryIcon isActive={isActive} />,
    },
    {
      id: 'users',
      label: 'Пользователи',
      icon: (isActive: boolean) => <UserIcon isActive={isActive} />,
    },
    {
      id: 'comments',
      label: 'Отзывы',
      icon: (isActive: boolean) => <CommentIcon isActive={isActive} />,
    },
  ];

  return (
    <div className={styles.filter}>
      {filterItems.map((item) => (
        <button
          key={item.id}
          className={`${styles.btn} ${active === item.id ? styles.active : ''}`}
          onClick={() => setActive(item.id)}
        >
          {item.icon(active === item.id)}
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;
