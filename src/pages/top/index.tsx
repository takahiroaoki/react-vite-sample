import styles from './index.module.css'
import { Link } from 'react-router'
import { ApiClient } from '~/api/client'
import { Example } from '~/api/schemas'

export default function Top() {
  ApiClient.callExample().then((value: Example) => {
    console.log(value)
  })

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