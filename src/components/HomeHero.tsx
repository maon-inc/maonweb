import { Link } from 'react-router-dom';

import type { HomeHeroContent } from '../content/homePageContent';
import styles from './HomeHero.module.css';

type HomeHeroProps = {
  content: HomeHeroContent;
};

export function HomeHero({ content }: HomeHeroProps) {
  return (
    <section className={styles.section}>
      <div className="homeContainer">
        <div className={styles.frame}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h1 className={styles.title}>
            {content.titlePrefix}{' '}
            <span className={styles.emphasis}>{content.titleEmphasis}</span>{' '}
            {content.titleSuffix}
          </h1>
          <p className={styles.supportingText}>{content.supportingText}</p>
          <Link className="buttonPrimary buttonPrimaryCompact" to={content.cta.to}>
            {content.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
