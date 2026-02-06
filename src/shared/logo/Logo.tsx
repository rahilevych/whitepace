import styles from './Logo.module.css';
import logo from '../../assets/icons/Logo.svg';
export const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt='' />
    </div>
  );
};
