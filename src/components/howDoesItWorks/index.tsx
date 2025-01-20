import React from 'react';
import styles from './index.module.scss';
import {
  RadiusBottomLeft,
  RadiusBottomRight,
  RadiusTopRight,
} from '../../../public';

const HowDoesItWorks = () => {
  return (
    <div className="container">
      <div className={styles.content}>
        <div className={styles.mainText}>
          <h1>Как это работает?</h1>
          <h3>
            Наша платформа помогает заказчикам находить надежных поставщиков, а
            фабрикам — получать больше клиентов.
          </h3>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.steps}>
            <div className={styles.stepOne}>
              <p>1</p>
              <p>Зарегистрируйтесь как заказчик или поставщик</p>
            </div>
            <div className={styles.vectorBottomLeft}>
              <RadiusBottomLeft />
            </div>
            <div className={styles.lineWrapOne}>
              <div className={styles.line} />
            </div>
            <div className={styles.lineWrapTwo}>
              <div className={styles.line} />
            </div>
            <div className={styles.lineWrapThree}>
              <div className={styles.line} />
            </div>

            <div className={styles.stepTwo}>
              <div className={styles.vectorTopRight}>
                <RadiusTopRight />
              </div>
              <p>2</p>
              <p>Добавьте информацию о своей фабрике</p>
              <div className={styles.vectorBottomRight}>
                <RadiusBottomRight />
              </div>
            </div>
            <div className={styles.stepThree}>
              <p>3</p>
              <p>Найдите фабрику и отправьте заявку</p>
            </div>
            <div className={styles.stepFour}>
              <p>4</p>
              <p>Свяжитесь и обсудите детали через WhatsApp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowDoesItWorks;
