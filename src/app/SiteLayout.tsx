import { Outlet } from 'react-router-dom';

import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import styles from './SiteLayout.module.css';

export function SiteLayout() {
  return (
    <div className={styles.shell}>
      <SiteHeader />
      <main className={styles.main}>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
