import { NavLink, useLocation } from 'react-router-dom';

import { MAON_CTA_HREF } from '../content/contactLinks';
import { MaonMark } from './MaonMark';
import styles from './SiteHeader.module.css';

export function SiteHeader() {
  const location = useLocation();
  const isHomeLike = location.pathname === '/' || location.pathname === '/privacy';

  return (
    <header className={isHomeLike ? `${styles.header} ${styles.headerHome}` : styles.header}>
      <div className={isHomeLike ? `${styles.containerHome} container` : 'container'}>
        <div className={styles.inner}>
          <NavLink aria-label="MAON" className={styles.brand} to="/">
            <MaonMark className={styles.brandMark} />
          </NavLink>
          <a className={styles.headerCta} href={MAON_CTA_HREF}>
            {isHomeLike ? 'try now' : 'save your spot'}
          </a>
        </div>
      </div>
    </header>
  );
}
