import React, { FC } from 'react';
import styles from './index.module.scss';

const Factories: FC = () => {
  const factories = [
    {
      name: 'Very Long Name Company Test To Test',
      description: 'Изготовление лекал',
      phoneNumber: '999 999 999 999',
      adress: 'г.Бишкек, Токтогула 1а',
      rating: '4,7',
    },
    {
      name: 'Solart',
      description: 'Мужские, женские, детские вещи',
      phoneNumber: '999 999 999 999',
      adress: 'г.Бишкек, Токтогула 1а',
      rating: '4,7',
    },
    {
      name: 'Solart',
      description: 'Обувь ручной работы',
      phoneNumber: '999 999 999 999',
      adress: 'г.Бишкек, Токтогула 1а',
      rating: '4,7',
    },
    {
      name: 'Solart',
      description: 'Женская одежда',
      phoneNumber: '999 999 999 999',
      adress: 'г.Бишкек, Токтогула 1а',
      rating: '4,7',
    },
  ];
  return (
    <div className="container">
      <div className={styles.content}>
        <div>
          <div className={styles.title}>Фабрики</div>
          <div className={styles.cardWrapper}>
            {factories.map((factory, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.imgWrap}>
                  <img
                    className={styles.img}
                    alt="factory"
                    src="./images/background.jpeg"
                  ></img>
                </div>
                <div className={styles.companyDescription}>
                  <div className={styles.companyInfo}>
                    <div className={styles.company}>
                      <div className={styles.companyLogo}></div>
                      <h5>{factory.name}</h5>
                    </div>
                    <div className={styles.companyRating}>
                      <span>⭐️</span>
                      {factory.rating}
                    </div>
                  </div>
                  <div className={styles.description}>
                    {factory.description}
                  </div>
                  <div className={styles.phoneNumber}>
                    {factory.phoneNumber}
                  </div>
                  <div className={styles.adress}>{factory.adress}</div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.btnWrap}>
            <button>Все фабрики →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Factories;
