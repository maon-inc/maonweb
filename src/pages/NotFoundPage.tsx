import { Link } from 'react-router-dom';

import styles from './NotFoundPage.module.css';

export function NotFoundPage() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <p className={styles.code}>404</p>
          <h1 className={styles.title}>Page not found</h1>
          <p className={styles.body}>The route does not exist in this project yet.</p>
          <Link className="buttonPrimary" to="/">
            Return home
          </Link>
        </div>
      </div>
    </section>
  );
}
