import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';

const Intro = () => {
  return (
    <div className={styles.intro}>
      <div>
        <p>Найдите швейную фабрику легко</p>
        <h3>
          Платформа для размещения заказов на швейное производство и оптовые
          покупки одежды с прямым доступом к фабрикам
        </h3>
        <button>ot Aidany</button>
      </div>
      <div className={styles.inTrust}>
         <h5>Мы пользуемся доверием у</h5>
         <div className={styles.companies}>
bwqfbqejhkwhbjqnkslajxfelfhe  wf
         </div>
      </div>
      <Image
        style={{ position: 'absolute', left: 330, top: 60 }}
        alt="img"
        src="/images/introImg1.png"
        width={126}
        height={126}
      />
      <Image
        style={{ position: 'absolute', right: 106, top: 153 }}
        alt="img"
        src="/images/introImg2.png"
        width={162}
        height={162}
      />
      <Image
        style={{ position: 'absolute', left: 106, top: 288 }}
        alt="img"
        src="/images/introImg3.png"
        width={194}
        height={194}
      />
      <Image
        style={{ position: 'absolute', right: 106, top: 435 }}
        alt="img"
        src="/images/introImg4.png"
        width={294}
        height={294}
      />
      <Image
        style={{ position: 'absolute', left: 285, top: 527 }}
        alt="img"
        src="/images/introImg5.png"
        width={226}
        height={226}
      />
    </div>
  );
};

export default Intro;
