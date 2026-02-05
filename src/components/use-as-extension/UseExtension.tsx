import { Section } from '../../shared/section/Section';
import styles from './UseExtension.module.css';

export const UseExtension = () => {
  const title = 'Use as extension';
  const paragraph =
    'Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.';
  const button = 'Let`s go';
  return (
    <section className={styles.extension}>
      <div className={`container  `}>
        <Section
          className={styles.section}
          title={title}
          paragraph={paragraph}
          button={button}
        />
      </div>
    </section>
  );
};
