import { Section } from '../../shared/section/Section';
import styles from './Customize.module.css';

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
        />
      </div>
    </section>
  );
};
