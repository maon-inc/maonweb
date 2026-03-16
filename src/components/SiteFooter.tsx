import { Link } from 'react-router-dom';

import footerScene from '../assets/footer-scene.svg';
import styles from './SiteFooter.module.css';

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.band}>
        <div className={styles.legalRow}>
          <span className={styles.legalText}>© 2025 MAON INTELLIGENCE</span>
          <Link className={styles.footerLink} to="/privacy">
            Privacy
          </Link>
          <Link className={styles.footerLink} to="/tos">
            Terms of Service
          </Link>
          <Link className={styles.footerLink} to="/ai-transparency">
            AI Transparency
          </Link>
        </div>
        <img alt="" aria-hidden="true" className={styles.image} src={footerScene} />
      </div>
    </footer>
  );
}
