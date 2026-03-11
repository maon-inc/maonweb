import type { NarrativeContent } from '../content/homePageContent';
import styles from './NarrativeSection.module.css';

type NarrativeSectionProps = {
  content: NarrativeContent;
};

export function NarrativeSection({ content }: NarrativeSectionProps) {
  return (
    <section className={styles.section} aria-labelledby="understand-title">
      <div className="homeContainer">
        <div className={styles.stack}>
          <p className={styles.intro} id="understand-title">
            {content.intro}
          </p>
          {content.statements.map((statement) => (
            <p
              className={
                statement.tone === 'default'
                  ? styles.statement
                  : statement.tone === 'muted'
                    ? `${styles.statement} ${styles.statementMuted}`
                    : `${styles.statement} ${styles.statementSerifMuted}`
              }
              key={statement.text}
            >
              {statement.text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
