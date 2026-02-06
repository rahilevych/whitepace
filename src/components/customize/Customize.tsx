import { Section } from '../../shared/section/Section';
import styles from './Customize.module.css';
import img from '../../assets/img/bussiness.png';
export const Customize = () => {
  const title = 'Customize it to your needs';
  const paragraph =
    'Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.';
  const button = 'Let`s go';
  return (
    <section className={styles.customize}>
      <div className={`container  `}>
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
    </section>
  );
};
