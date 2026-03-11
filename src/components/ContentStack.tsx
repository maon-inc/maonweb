import styles from './ContentStack.module.css';

export type ContentItem = {
  title: string;
  body: string;
};

type ContentStackProps = {
  items: ContentItem[];
};

export function ContentStack({ items }: ContentStackProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.stack}>
          {items.map((item) => (
            <article className={styles.card} key={item.title}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.body}>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
