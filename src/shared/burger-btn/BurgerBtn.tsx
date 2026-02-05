import styles from './BurgerBtn.module.css';

type BurgerBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isOpened: boolean;
};

export const BurgerBtn = ({ isOpened, ...props }: BurgerBtnProps) => {
  return (
    <button
      {...props}
      className={`${styles.btn} ${isOpened ? styles.opened : ''}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};
