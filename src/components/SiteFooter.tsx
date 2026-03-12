import styles from './SiteFooter.module.css';

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div aria-hidden="true" className={styles.band} />
    </footer>
  );
}
