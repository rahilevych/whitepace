import styles from './Button.module.css';
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children: React.ReactNode;
};

export const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button {...props} className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
};
