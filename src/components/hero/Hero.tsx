import { FaArrowRight } from 'react-icons/fa';
import { Button } from '../../shared/button/Button';
import line from '../../assets/img/line.png';
import styles from './Hero.module.css';
import hero from '../../assets/img/hero-removebg-preview.png';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles['hero-container']}`}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1>Get More Done with whitepace</h1>
            <p>
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </p>
            <Button className={styles.btn}>
              {' '}
              Try Whitepace free <FaArrowRight height={10} width={10} />{' '}
            </Button>
          </div>
          <div className={styles.img}>
            <img src={hero}></img>
          </div>
        </div>
      </div>
      <div className={styles['bg-img']}>
        <img src={line} alt='line' />
      </div>
    </section>
  );
};
