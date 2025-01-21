import React from 'react';
import styles from './index.module.scss';

const LeaveRequest = () => {
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
      </div>
    </div>
  );
};

export default LeaveRequest;
