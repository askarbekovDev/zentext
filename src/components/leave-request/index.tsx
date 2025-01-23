import React, { FC } from 'react';
import styles from './index.module.scss';
import SendRequest from '../send-request';

const LeaveRequest: FC = () => {
  return (
    <div className="container">
      <div className={styles.content}>
        <div className={styles.description}>
          <h1>Оставьте заявку прямо сейчас</h1>
          <h3>
            Заполните форму, чтобы мы помогли вам найти подходящую фабрику или
            продукцию. Укажите детали, и мы свяжемся с вами в ближайшее время.
          </h3>
        </div>
        <SendRequest />
      </div>
    </div>
  );
};

export default LeaveRequest;
