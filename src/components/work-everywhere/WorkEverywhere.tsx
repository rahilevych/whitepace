import { Section } from '../../shared/section/Section';
import styles from './WorkEverywhere.module.css';
import bg from '../../assets/img/bg2.png';

export const WorkEverywhere = () => {
  const title = 'Your work, everywhere you are';
  const paragraph =
    'Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!';
  const button = 'Try Taskey';
  return (
    <section className={styles.work}>
      <div className={`container ${styles['work-container']} `}>
        <Section
          className={styles.section}
          title={title}
          paragraph={paragraph}
          button={button}
        />
      </div>
      <div className={styles['bg-img']}>
        <img src={bg} alt='line' />
      </div>
    </section>
  );
};
