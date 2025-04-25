import styles from './index.module.css'
import { Link } from "react-router";

export default function Top() {
  return (
    <>
      <div className={styles.titleSection}>
        <h2 className={styles.title}>TOP Screen</h2>
      </div>
      <div className={styles.navigatorSection}>
        <div className={styles.navigatorWrapper}>
          <Link className={styles.navigator} to={"/pageA"}>to PageA</Link>
        </div>
        <div className={styles.navigatorWrapper}>
          <Link className={styles.navigator} to={"/pageB"}>to PageB</Link>
        </div>
      </div>
    </>
  )
}