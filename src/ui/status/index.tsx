import React, { FC } from 'react';
import styles from './index.module.scss';

type StatusProps = {
  state: 'new' | 'approved' | 'rejected';
};

const Status: FC<StatusProps> = ({ state = 'new' }) => {
  return (
    <div
      className={`${styles.status} ${state === 'approved' ? styles.approved : state === 'rejected' ? styles.rejected : styles.new}`}
    >
      {state === 'approved'
        ? 'Одобрен'
        : state === 'rejected'
          ? 'Отклонен'
          : 'Новый'}
    </div>
  );
};

export default Status;
