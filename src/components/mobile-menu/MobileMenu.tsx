import styles from './MobileMenu.module.css';
import { useEffect, useState } from 'react';
import { BurgerBtn } from '../../shared/burger-btn/BurgerBtn';
import { Nav } from '../nav/Nav';

export const MobileMenu = () => {
  const [isOpened, setIsOpened] = useState(false);
  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpened]);
  return (
    <div className={styles.menu}>
      <div className={styles.btn}>
        <BurgerBtn isOpened={isOpened} onClick={() => setIsOpened(!isOpened)} />
      </div>

      <Nav className={`${styles.nav} ${isOpened ? styles.opened : ''}`} />
    </div>
  );
};
