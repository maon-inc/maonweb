import { useLocation } from 'react-router-dom';

import styles from './SiteFooter.module.css';

export function SiteFooter() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <footer className={isHome ? `${styles.footer} ${styles.footerHome}` : styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <p className={styles.title}>Built for a small React website.</p>
          <p className={styles.copy}>
            {isHome
              ? 'Shared layout, route-aware chrome, and a focused landing page.'
              : 'Shared layout, typed pages, and room to grow.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
