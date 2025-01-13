'use client';

import { useState } from 'react';
import styles from './index.module.scss';
import {
  RequestIcon,
  UserIcon,
  FabricIcon,
  CommentIcon,
} from '../../../public';

const Filter = () => {
  const [active, setActive] = useState('requests');

  const filterItems = [
    { id: 'requests', label: 'Заявки', icon: (isActive: boolean) => <RequestIcon isActive={isActive} /> },
    { id: 'fabrics', label: 'Фабрики', icon: (isActive: boolean) => <FabricIcon isActive={isActive} /> },
    { id: 'users', label: 'Пользователи', icon: (isActive: boolean) => <UserIcon isActive={isActive} /> },
    { id: 'comments', label: 'Отзывы', icon: (isActive: boolean) => <CommentIcon isActive={isActive} /> },
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
