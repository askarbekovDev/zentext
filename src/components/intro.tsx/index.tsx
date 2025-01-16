import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';

const Intro = () => {
  const images = [
    { src: '/images/introImg1.png', value: 186, class: 'imageFirst' },
    { src: '/images/introImg2.png', value: 222, class: 'imageSecond' },
    { src: '/images/introImg3.png', value: 254, class: 'imageThird' },
    { src: '/images/introImg4.png', value: 334, class: 'imageFourth' },
    { src: '/images/introImg5.png', value: 274, class: 'imageFifth' },
  ];
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
  console.log(styles);

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
      {images.map((img) => (
        <Image
          key={img.src}
          className={styles[img.class]}
          alt="img"
          src={img.src}
          width={img.value}
          height={img.value}
        />
      ))}
    </div>
  );
};

export default Intro;
