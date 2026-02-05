import styles from './WorkTogether.module.css';
import img from '../../assets/img/imgTogether.png';
import { Section } from '../../shared/section/Section';
export const WorkTogether = () => {
  const title = 'Work together';
  const paragraph =
    'With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.';
  const button = 'Try it now';
  return (
    <section className={styles.work}>
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
