import { useWindowWidth } from '../../hooks/useWindowWidth';
import { Logo } from '../../shared/logo/Logo';
import { MobileMenu } from '../mobile-menu/MobileMenu';
import { Nav } from '../nav/Nav';
import styles from './Header.module.css';

export const Header = () => {
  const width = useWindowWidth();
  const isMobile = width < 768;
  return (
    <header className={styles.header}>
      <div className={` container ${styles['header-container']}`}>
        <Logo />

        {isMobile ? <MobileMenu /> : <Nav />}
      </div>
    </header>
  );
};
