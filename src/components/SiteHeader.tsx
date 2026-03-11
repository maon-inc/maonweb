import { NavLink, useLocation } from 'react-router-dom';

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
      <div className="container">
        <div className={styles.inner}>
          <NavLink aria-label="MAON" className={styles.brand} to="/">
            <span className={styles.brandText}>MA</span>
            <span className={styles.brandRing} aria-hidden="true" />
            <span className={styles.brandText}>N</span>
          </NavLink>
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
          <NavLink className={styles.headerCta} to="/contact">
            save your spot
          </NavLink>
        </div>
      </div>
    </header>
  );
}
