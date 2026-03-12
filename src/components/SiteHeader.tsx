import { NavLink, useLocation } from 'react-router-dom';

import { MAON_CTA_HREF } from '../content/contactLinks';
import { MaonMark } from './MaonMark';
import styles from './SiteHeader.module.css';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export function SiteHeader() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className={isHome ? `${styles.header} ${styles.headerHome}` : styles.header}>
      <div className={isHome ? `${styles.containerHome} container` : 'container'}>
        <div className={styles.inner}>
          <NavLink aria-label="MAON" className={styles.brand} to="/">
            <span className={styles.brandText}>MA</span>
            <MaonMark className={styles.brandMark} />
            <span className={styles.brandText}>N</span>
          </NavLink>
          {isHome ? null : (
            <nav aria-label="Primary">
              <ul className={styles.navList}>
                {navItems.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                      }
                      to={item.to}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          <a className={styles.headerCta} href={MAON_CTA_HREF}>
            {isHome ? 'try now' : 'save your spot'}
          </a>
        </div>
      </div>
    </header>
  );
}
