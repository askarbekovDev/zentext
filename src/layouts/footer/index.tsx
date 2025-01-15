import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TelegramIcon,
  WhatsAppIcon,
} from '../../../public/index';

const Footer = () => {
  const socialMedia = [
    { icon: <WhatsAppIcon />, href: '/' },
    { icon: <InstagramIcon />, href: '/' },
    { icon: <TelegramIcon />, href: '/' },
    { icon: <FacebookIcon />, href: '/' },
  ];
  const navLinks = [
    { title: 'Главная', href: '/' },
    { title: 'Партнеры', href: '/partners' },
    { title: 'О проекте', href: '/about' },
    { title: 'Услуги', href: '/services' },
    { title: 'Фабрики', href: '/factories' },
    { title: 'Отзывы', href: '/feedback' },
  ];
  return (
    <footer className={styles.footer}>
      <div className={styles.socialBlock}>
        <div>
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
          <div className={styles.socialMedia}>
            {socialMedia.map((media, idx) => {
              return (
                <Link href={media.href} className={styles.wrapper} key={idx}>
                  {media.icon}
                </Link>
              );
            })}
          </div>
        </div>
        <p className={styles.rights}>© 2024 Все права защищены.</p>
      </div>
      <div className={styles.parent}>
        <div className={styles.navLinks}>
          {navLinks.map((link, idx) => (
            <Link className={styles.link} key={idx} href={link.href}>
              {link.title}
            </Link>
          ))}
        </div>
        <div className={styles.contacts}>
          <Link href="/" className={styles.inTouch}>
            <TelegramIcon fill={'black'} />
            <span>Написать нам 24/7</span>
          </Link>
          <div className={styles.numMailLocatBlock}>
            <Link href="/" className={styles.link}>
              <PhoneIcon />
              <span>+999 999 999 999</span>
            </Link>
            <Link href="/" className={styles.link}>
              <MailIcon />
              <span>info@example.com</span>
            </Link>
            <Link href="/" className={styles.link}>
              <MapPinIcon />
              <span>г.Бишкек, Токтогула 1а</span>
            </Link>
          </div>
          <div className={styles.socialMediaMob}>
            {socialMedia.map((media, idx) => {
              return (
                <Link href={media.href} className={styles.wrapper} key={idx}>
                  {media.icon}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Link href="/" className={styles.inTouchMob}>
        <TelegramIcon fill={'black'} />
        <span>Написать нам 24/7</span>
      </Link>
      <p className={styles.rightsMob}>© 2024 Все права защищены.</p>
    </footer>
  );
};

export default Footer;
