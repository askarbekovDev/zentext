import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 16,
            backgroundColor: 'black',
          }}
        ></div>
        <div
          style={{
            width: 186,
            height: 56,
            borderRadius: 16,
            backgroundColor: '#FAF9F6',
            marginLeft: 12,
          }}
        ></div>
      </div>
      <div className={styles.links}>
        <Link href='/factories'>Фабрики</Link>
        <Link href='/products'>Товары</Link>
      </div>
    </header>
  );
};

export default Header;
