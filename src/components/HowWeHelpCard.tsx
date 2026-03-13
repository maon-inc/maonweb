import styles from './HowWeHelpCard.module.css';
import type { CSSProperties } from 'react';

type HowWeHelpCardProps = {
  id: string;
  title: string;
  summary: string;
  details: string[];
  accentColor: string;
  previewImage: {
    alt: string;
    src: string;
  };
  expanded: boolean;
  onToggle: (id: string) => void;
};

export function HowWeHelpCard({
  id,
  title,
  summary,
  details,
  accentColor,
  previewImage,
  expanded,
  onToggle,
}: HowWeHelpCardProps) {
  const detailsId = `${id}-details`;
  const canExpand = details.length > 0;
  const isExpanded = expanded && canExpand;

  return (
    <article
      className={isExpanded ? `${styles.card} ${styles.expanded}` : styles.card}
      data-card-id={id}
      style={{ '--how-we-help-accent': accentColor } as CSSProperties}
    >
      <button
        aria-controls={detailsId}
        aria-expanded={isExpanded}
        className={styles.trigger}
        onClick={() => onToggle(id)}
        type="button"
      >
        <span className={styles.rail} aria-hidden="true" />
        <span className={styles.content}>
          <span className={styles.title}>{title}</span>
          <span className={styles.summary}>{summary}</span>
          <span className={styles.previewFrame}>
            <img
              alt={previewImage.alt}
              className={id === 'adaptive-over-time' ? `${styles.previewImage} ${styles.previewImageAdaptive}` : styles.previewImage}
              src={previewImage.src}
            />
          </span>
          <span className={styles.chevron} aria-hidden="true">
            <span className={styles.chevronGlyph}>{isExpanded ? '−' : '⌄'}</span>
          </span>
        </span>
      </button>

      {canExpand ? (
        <div
          aria-hidden={isExpanded ? undefined : 'true'}
          className={isExpanded ? `${styles.details} ${styles.detailsExpanded}` : styles.details}
          id={detailsId}
        >
          <ul className={styles.list}>
            {details.map((detail) => (
              <li className={styles.listItem} key={detail}>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}
