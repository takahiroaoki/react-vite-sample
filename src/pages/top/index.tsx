import { useEffect, useState } from 'react'
import styles from './index.module.css'
import { Link } from 'react-router'
import { ApiClient } from '~/libs/apiClient'
import { Example } from '~/libs/schemas'
import { UrlUtils } from '~/libs/url'

export default function Top() {
  const [params, setParams] = useState(new URLSearchParams())
  const [responseData, setResponseData] = useState<Example|null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const params = UrlUtils.getQueryParams();
    setParams(params)

    ApiClient.callExample(params.get('param1') ?? '').then((value: Example|null) => {
      setResponseData(value)
      setIsLoading(false)
    })
  }, []);

  return (
    <>
      <div className={styles.titleSection}>
        <h2 className={styles.title}>TOP Screen</h2>
      </div>
      {
        (() => {
          if (isLoading) {
            return <div>Loading...</div>
          }
          return (
            <>
              <div>
                <div>
                  {responseData ? JSON.stringify(responseData) : 'no data available'}
                </div>
              </div>
              <div className={styles.navigatorSection}>
                <div className={styles.navigatorWrapper}>
                  <Link className={styles.navigator} to={`/pageA?${params.toString()}`}>to PageA</Link>
                </div>
                <div className={styles.navigatorWrapper}>
                  <Link className={styles.navigator} to={`/pageB?${params.toString()}`}>to PageB</Link>
                </div>
              </div>
            </>
          )
        })()
      }
    </>
  )
}