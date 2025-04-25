import styles from './index.module.css'
import { Link } from "react-router"

export default function PageB() {
  return (
    <>
      <div className={styles.navigatorSection}>
        <Link className={styles.navigator} to={"/"}>back to Top Page</Link>
      </div>
      <div className={styles.titleSection}>
        <h2 className={styles.title}>Page B</h2>
      </div>
    </>
  )
}