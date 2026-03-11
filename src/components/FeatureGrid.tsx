import styles from './FeatureGrid.module.css';

export type Feature = {
  title: string;
  description: string;
};

type FeatureGridProps = {
  heading: string;
  intro: string;
  features: Feature[];
};

export function FeatureGrid({ heading, intro, features }: FeatureGridProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.headingBlock}>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.intro}>{intro}</p>
        </div>
        <div className={styles.grid}>
          {features.map((feature) => (
            <article className={styles.card} key={feature.title}>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardBody}>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
