import styles from './Fav.module.css';
import img from '../../assets/img/Apps.png';
import bg from '../../assets/img/bgfav.png';
import { Section } from '../../shared/section/Section';
export const Fav = () => {
  const title = 'Work with Your Favorite Apps Using whitepace';
  const paragraph =
    'Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.';
  const button = 'Read more';
  return (
    <section className={styles.fav}>
      <div className={`container ${styles['fav-container']}  `}>
        <Section
          className={styles.section}
          title={title}
          paragraph={paragraph}
          button={button}
          img={img}
        />
      </div>
      <div className={styles['bg-img']}>
        <img src={bg} alt='line' />
      </div>
    </section>
  );
};
