import styles from './ProjectManagement.module.css';
import bg from '../../assets/img/bgManagment.png';
import { Section } from '../../shared/section/Section';
export const ProjectManagment = () => {
  const title = 'Project Managment';
  const paragraph =
    ' Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.';
  const button = 'Get Started';

  return (
    <section className={styles.management}>
      <div className={`container ${styles['managment-container']} `}>
        <Section title={title} paragraph={paragraph} button={button} />
      </div>
      <div className={styles['bg-img']}>
        <img src={bg} alt='line' />
      </div>
    </section>
  );
};
