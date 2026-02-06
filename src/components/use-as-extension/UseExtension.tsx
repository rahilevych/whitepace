import { Section } from '../../shared/section/Section';
import styles from './UseExtension.module.css';
import line from '../../assets/img/line.png';
import img from '../../assets/img/extension.png';

export const UseExtension = () => {
  const title = 'Use as extension';
  const paragraph =
    'Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.';
  const button = 'Let`s go';
  return (
    <section className={styles.extension}>
      <div className={`container ${styles['extension-container']}  `}>
        <Section
          className={styles.section}
          title={title}
          paragraph={paragraph}
          button={button}
          img={img}
          licence={
            <a href='http://www.freepik.com'>
              Designed by katemangostar / Freepik
            </a>
          }
        />
      </div>
      <div className={styles['bg-img']}>
        <img src={line} alt='line' />
      </div>
    </section>
  );
};
