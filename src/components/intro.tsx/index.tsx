import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';

const Intro = () => {
  // const images = [{src: "/images/introImg1.png", value: 186}]
  const companies = [
    'LongNameCompany',
    'Solart',
    'Solart',
    'Solart',
    'Solart',
    'Solart',
    'Solart',
    'Solart',
    'Solart',
    'Solart',
  ];
  return (
    <div className={styles.intro}>
      <div className={styles.content}>
        <p className={styles.mainTitle}>Найдите швейную фабрику легко</p>
        <h3 className={styles.subTitle}>
          Платформа для размещения заказов на швейное производство и оптовые
          покупки одежды с прямым доступом к фабрикам
        </h3>
        <button className={styles.btn}>from UI!</button>
      </div>
      <div className={styles.inTrustWrapper}>
        <div className={styles.inTrust}>
          <h5 className={styles.text}>Мы пользуемся доверием у</h5>
          <div className={styles.companies}>
            {companies.map((company, idx) => (
              <div key={idx} className={styles.company}>
                <div
                  style={{
                    minWidth: 48,
                    minHeight: 48,
                    borderRadius: 24,
                    backgroundColor: 'white',
                    marginRight: 12,
                  }}
                />
                <span title={company}>{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Image
        className={styles.imageFirst}
        alt="img"
        src="/images/introImg1.png"
        width={186}
        height={186}
      />
      <Image
        className={styles.imageSecond}
        alt="img"
        src="/images/introImg2.png"
        width={222}
        height={222}
      />
      <Image
        className={styles.imageThird}
        alt="img"
        src="/images/introImg3.png"
        width={254}
        height={254}
      />
      <Image
        className={styles.imageFourth}
        alt="img"
        src="/images/introImg4.png"
        width={334}
        height={334}
      />
      <Image
        className={styles.imageFifth}
        alt="img"
        src="/images/introImg5.png"
        width={274}
        height={274}
      />
    </div>
  );
};

export default Intro;
