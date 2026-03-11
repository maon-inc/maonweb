import { NavLink } from 'react-router-dom';

import styles from './SiteHeader.module.css';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <NavLink className={styles.brand} to="/">
            MAON
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
        </div>
      </div>
    </header>
  );
}
