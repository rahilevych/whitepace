import { Button } from '../../shared/button/Button';
import styles from './Nav.module.css';

export const Nav = ({ className }: { className?: string }) => {
  return (
    <nav className={`${styles.nav} ${className}`}>
      <ul className={styles.list}>
        <li>products</li>
        <li>solutions</li>
        <li>resourse</li>
        <li>pricing</li>
      </ul>
      <Button className={styles.btn}>Login</Button>
    </nav>
  );
};
