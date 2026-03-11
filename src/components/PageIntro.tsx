import styles from './PageIntro.module.css';

type PageIntroProps = {
  title: string;
  description: string;
};

export function PageIntro({ title, description }: PageIntroProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.block}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </section>
  );
}
