import { Link } from 'react-router-dom';

import styles from './HeroSection.module.css';

type HeroSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    to: string;
  };
  secondaryCta: {
    label: string;
    to: string;
  };
};

export function HeroSection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.panel}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          <div className={styles.actions}>
            <Link className="buttonPrimary" to={primaryCta.to}>
              {primaryCta.label}
            </Link>
            <Link className="buttonGhost" to={secondaryCta.to}>
              {secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
