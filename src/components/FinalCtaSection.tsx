import { Link } from 'react-router-dom';

import type { FinalCtaContent } from '../content/homePageContent';
import styles from './FinalCtaSection.module.css';

type FinalCtaSectionProps = {
  content: FinalCtaContent;
};

export function FinalCtaSection({ content }: FinalCtaSectionProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.stack}>
          <h2 className={styles.title}>{content.title}</h2>
          <p className={styles.subtitle}>{content.subtitle}</p>
          <Link className="buttonPrimary buttonPrimaryCompact" to={content.cta.to}>
            {content.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
