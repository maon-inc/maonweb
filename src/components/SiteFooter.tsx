import footerScene from '../assets/footer-scene.svg';
import styles from './SiteFooter.module.css';

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.band}>
        <img alt="" aria-hidden="true" className={styles.image} src={footerScene} />
      </div>
    </footer>
  );
}
