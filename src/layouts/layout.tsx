import styles from './layout.module.css'
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
        <div className={styles.headerSection}>
        <h2 className={styles.header}>Layout Header</h2>
        </div>
        <div className={styles.contentSection}>
            <Outlet />
        </div>
    </>
  );
}