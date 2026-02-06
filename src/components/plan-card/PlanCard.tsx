import { FiCheck } from 'react-icons/fi';
import type { Plan } from '../../data/plansData';
import { Button } from '../../shared/button/Button';
import styles from './PlanCard.module.css';

export const PlanCard = ({
  card,
  className,
}: {
  card: Plan;
  className?: string;
}) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <h4>{card.title}</h4>
      <p>{card.price}</p>
      <ul className={styles.list}>
        {card.features.map((feature, index) => (
          <li key={index}>
            <FiCheck className={styles.icon} />
            {feature}
          </li>
        ))}
      </ul>
      <Button className={styles.btn}>Get Started</Button>
    </div>
  );
};
