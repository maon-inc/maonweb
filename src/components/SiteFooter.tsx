import styles from './SiteFooter.module.css';

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <p className={styles.title}>Built for a small React website.</p>
          <p className={styles.copy}>Shared layout, typed pages, and room to grow.</p>
        </div>
      </div>
    </footer>
  );
}
