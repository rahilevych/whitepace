import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { footerMenu } from '../../data/footerData';
import { Logo } from '../../shared/logo/Logo';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles['footer-container']}`}>
        <ul className={styles.list}>
          {footerMenu.map((item) => (
            <li key={item.id}>{item.label}</li>
          ))}
        </ul>
        <div className={styles['sub-footer']}>
          {' '}
          <Logo />{' '}
          <ul className={styles.icons}>
            <li>
              <FaFacebook className={styles.icon} />
            </li>
            <li>
              <FaTwitter className={styles.icon} />
            </li>
            <li>
              <FaLinkedin className={styles.icon} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
