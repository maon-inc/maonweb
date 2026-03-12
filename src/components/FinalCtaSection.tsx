import type { FinalCtaContent } from '../content/homePageContent';
import styles from './FinalCtaSection.module.css';

type FinalCtaSectionProps = {
  content: FinalCtaContent;
};

export function FinalCtaSection({ content }: FinalCtaSectionProps) {
  return (
    <section className={styles.section}>
      <div className="homeContainer">
        <div className={styles.stack}>
          <h2 className={styles.title}>{content.title}</h2>
          <p className={styles.subtitle}>{content.subtitle}</p>
          <a className="buttonPrimary buttonPrimaryCompact" href={content.cta.href}>
            {content.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
