import { plansData } from '../../data/plansData';
import { PlanCard } from '../plan-card/PlanCard';
import styles from './PlanSection.module.css';

export const PlansSection = () => {
  return (
    <section>
      <div className={`container ${styles['plans-container']}`}>
        <h2>Choose your plan</h2>
        <p>
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>
        <div className={styles.plans}>
          {plansData.map((card) => (
            <PlanCard card={card} key={card.id} className={styles.card} />
          ))}
        </div>
      </div>
    </section>
  );
};
