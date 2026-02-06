import line from '../../assets/img/line.png';
import styles from './Hero.module.css';
import hero from '../../assets/img/hero-removebg-preview.png';
import { Section } from '../../shared/section/Section';

export const Hero = () => {
  const title = 'Get More Done with whitepace';
  const paragraph =
    'Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks';
  const button = ' Try Whitepace free';

  return (
    <section className={styles.hero}>
      <div className={`container ${styles['hero-container']}`}>
        <Section
          className={styles.section}
          title={title}
          paragraph={paragraph}
          button={button}
          img={hero}
        />
      </div>
      <div className={styles['bg-img']}>
        <img src={line} alt='line' />
      </div>
    </section>
  );
};
