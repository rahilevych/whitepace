import styles from './Data.module.css';
import img from '../../assets/img/Element.png';
import { Section } from '../../shared/section/Section';
export const Data = () => {
  const title = '100% your data';
  const paragraph =
    'The app is open source and your notes are saved to an open format, so you`ll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them';
  const button = 'Read more';
  return (
    <section className={styles.data}>
      <div className={`container  `}>
        <Section
          className={styles.section}
          title={title}
          paragraph={paragraph}
          button={button}
          img={img}
        />
      </div>
    </section>
  );
};
