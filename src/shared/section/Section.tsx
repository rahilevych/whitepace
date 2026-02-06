import { FaArrowRight } from 'react-icons/fa';
import { Button } from '../button/Button';
import styles from './Section.module.css';
import { motion, type Variants } from 'framer-motion';

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const imgVariant: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

interface SectionProps {
  title: string;
  paragraph: string;
  button: string;
  img?: string;
  className?: string;
  licence?: React.ReactNode;
}

export const Section = ({
  title,
  button,
  paragraph,
  img,
  className,
  licence,
}: SectionProps) => {
  return (
    <motion.div
      className={`${styles.container} ${className}`}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <motion.div
        className={styles.text}
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 variants={textItem}>{title}</motion.h2>
        <motion.p variants={textItem}>{paragraph}</motion.p>
        <motion.div variants={textItem}>
          <Button className={styles.btn}>
            {button}
            <FaArrowRight height={10} width={10} />
          </Button>
        </motion.div>
      </motion.div>

      {img && (
        <motion.div className={styles.img} variants={imgVariant}>
          <img src={img} alt='img' />
          {licence}
        </motion.div>
      )}
    </motion.div>
  );
};
