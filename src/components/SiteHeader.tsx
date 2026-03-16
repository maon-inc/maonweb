import { NavLink, useLocation } from 'react-router-dom';

import { MAON_CTA_HREF } from '../content/contactLinks';
import { MaonMark } from './MaonMark';
import { MessageCta } from './MessageCta';
import styles from './SiteHeader.module.css';

export function SiteHeader() {
  const location = useLocation();
  const isHomeLike =
    location.pathname === '/' ||
    location.pathname === '/privacy' ||
    location.pathname === '/tos' ||
    location.pathname === '/ai-transparency';

  return (
    <header className={isHomeLike ? `${styles.header} ${styles.headerHome}` : styles.header}>
      <div className={isHomeLike ? `${styles.containerHome} container` : 'container'}>
        <div className={styles.inner}>
          <NavLink aria-label="MAON" className={styles.brand} to="/">
            <MaonMark className={styles.brandMark} />
          </NavLink>
          <MessageCta
            className={styles.headerCta}
            href={MAON_CTA_HREF}
            label={isHomeLike ? 'try now' : 'save your spot'}
          />
        </div>
      </div>
    </header>
  );
}
