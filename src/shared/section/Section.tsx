import { FaArrowRight } from 'react-icons/fa';
import { Button } from '../button/Button';
import styles from './Section.module.css';
interface SectionProps {
  title: string;
  paragraph: string;
  button: string;
  img?: string;
  className?: string;
}

export const Section = ({
  title,
  button,
  paragraph,
  img,
  className,
}: SectionProps) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.text}>
        <h2>{title}</h2>
        <p>{paragraph}</p>
        <Button className={styles.btn}>
          {button}
          <FaArrowRight height={10} width={10} />
        </Button>
      </div>
      <div className={styles.img}>
        <img src={img} alt='img' />
      </div>
    </div>
  );
};
