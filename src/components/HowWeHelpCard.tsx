import styles from './HowWeHelpCard.module.css';

type HowWeHelpCardProps = {
  id: string;
  title: string;
  summary: string;
  details: string[];
  expanded: boolean;
  onToggle: (id: string) => void;
};

export function HowWeHelpCard({
  id,
  title,
  summary,
  details,
  expanded,
  onToggle,
}: HowWeHelpCardProps) {
  const detailsId = `${id}-details`;
  const canExpand = details.length > 0;

  return (
    <article className={expanded ? `${styles.card} ${styles.expanded}` : styles.card}>
      <button
        aria-controls={detailsId}
        aria-expanded={expanded}
        className={styles.trigger}
        onClick={() => onToggle(id)}
        type="button"
      >
        <span className={styles.rail} aria-hidden="true" />
        <span className={styles.content}>
          <span className={styles.title}>{title}</span>
          <span className={styles.summary}>{summary}</span>
          <span className={styles.chevron} aria-hidden="true">
            <span className={styles.chevronGlyph}>{expanded ? '−' : '⌄'}</span>
          </span>
        </span>
      </button>

      {expanded && canExpand ? (
        <div className={styles.details} id={detailsId}>
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
