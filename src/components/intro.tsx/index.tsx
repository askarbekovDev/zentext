import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';

const Intro = () => {
  const companies = ['Solart', 'Solart', 'Solart', 'Solart', 'Solart'];
  return (
    <div className="container">
      <div className={styles.intro}>
        <div className={styles.content}>
          <p className={styles.mainTitle}>Найдите швейную фабрику легко</p>
          <h3 className={styles.subTitle}>
            Платформа для размещения заказов на швейное производство и оптовые
            покупки одежды с прямым доступом к фабрикам
          </h3>
          <button className={styles.btn}>from UI!</button>
        </div>
        <div className={styles.inTrust}>
          <h5 className={styles.text}>Мы пользуемся доверием у</h5>
          <div className={styles.companies}>
            {companies.map((company, idx) => (
              <div key={idx} className={styles.company}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    backgroundColor: 'white',
                    marginRight: 12,
                  }}
                />
                {company}
              </div>
            ))}
          </div>
        </div>
        <Image
          style={{ position: 'absolute', left: 230, top: 40 }}
          alt="img"
          src="/images/introImg1.png"
          width={166}
          height={166}
        />
        <Image
          style={{ position: 'absolute', right: 0, top: 105 }}
          alt="img"
          src="/images/introImg2.png"
          width={202}
          height={202}
        />
        <Image
          style={{ position: 'absolute', left: 50, top: 230 }}
          alt="img"
          src="/images/introImg3.png"
          width={234}
          height={234}
        />
        <Image
          style={{ position: 'absolute', right: 0, top: 425 }}
          alt="img"
          src="/images/introImg4.png"
          width={304}
          height={304}
        />
        <Image
          style={{ position: 'absolute', left: 200, top: 490 }}
          alt="img"
          src="/images/introImg5.png"
          width={244}
          height={244}
        />
      </div>
    </div>
  );
};

export default Intro;
