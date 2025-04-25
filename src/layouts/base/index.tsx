import styles from './index.module.css'
import { Outlet } from 'react-router-dom';

export default function BaseLayout() {
  return (
    <>
        <div className={styles.headerSection}>
        <h1 className={styles.header}>Layout Header</h1>
        </div>
        <div className={styles.contentSection}>
            <Outlet />
        </div>
    </>
  );
}