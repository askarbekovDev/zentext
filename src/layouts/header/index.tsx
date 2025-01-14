import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {/* Sleduiushie 2 div prosto placeholdery */}
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
      <div className={styles.navLinks}>
        <Link href="/factories" className={styles.link}>
          Фабрики
        </Link>
        <Link href="/products" className={styles.link}>
          Товары
        </Link>
      </div>
      <div className={styles.authBlock}>
        <Link href="/signIn" className={styles.signUpLink}>
          Регистрация
        </Link>
        <button
          style={{
            width: 122,
            height: 56,
            backgroundColor: 'black',
            borderRadius: 16,
          }}
        >
          Войти UI!
        </button>
      </div>
    </header>
  );
};

export default Header;
