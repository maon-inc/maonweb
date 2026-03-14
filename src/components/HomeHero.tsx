import type { HomeHeroContent } from '../content/homePageContent';
import { MessageCta } from './MessageCta';
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
          <MessageCta
            className="buttonPrimary buttonPrimaryCompact"
            href={content.cta.href}
            label={content.cta.label}
          />
        </div>
      </div>
    </section>
  );
}
