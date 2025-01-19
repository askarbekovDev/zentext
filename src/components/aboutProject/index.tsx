import React, { FC } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';

const AboutProject: FC = () => {
  return (
    <div className={styles.abt}>
      <Image
        className={styles.turned}
        alt="img"
        src="./images/turned-img.svg"
        width={1000}
        height={1000}
      />
      <div className={styles.description}>
        <h2>О проекте</h2>
        <h4>
          Наша платформа соединяет швейные фабрики и заказчиков, предлагая
          удобный способ для поиска фабрик, размещения заказов и оптовых покупок
          одежды. Мы предоставляем простой и надежный инструмент для
          эффективного взаимодействия между производителями и покупателями,
          ускоряя процессы и упрощая коммуникацию.
        </h4>
      </div>
    </div>
  );
};

export default AboutProject;
