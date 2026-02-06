import { sponsors } from '../../data/sponsors';
import styles from './SponsorMarquee.module.css';

export const SponsorsMarquee = () => {
  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const itemWidth = 50 + 80;
  const repeatCount = Math.ceil(
    (screenWidth * 2) / (sponsors.length * itemWidth),
  );

  const repeatedSponsors = Array.from({ length: repeatCount }).flatMap(
    () => sponsors,
  );

  return (
    <div className={styles.marquee}>
      <div className={styles.marquee__track}>
        {repeatedSponsors.map((sponsor, index) => (
          <img
            key={index}
            src={sponsor.logo}
            alt={sponsor.name}
            className={styles.marquee__item}
          />
        ))}
      </div>
    </div>
  );
};
