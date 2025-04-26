import { useEffect, useState } from 'react'
import styles from './index.module.css'
import { Link } from 'react-router'
import { ApiClient } from '~/libs/apiClient'
import { Example } from '~/libs/schemas'
import { UrlUtils } from '~/libs/url'
import { Path, QueryParam } from '~/libs/const'

export default function Top() {
  const [params, setParams] = useState(new URLSearchParams())
  const [responseData, setResponseData] = useState<Example|null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const params = UrlUtils.getQueryParams()
    setParams(params)

    ApiClient.callExample(params.get(QueryParam.PARAM_1) ?? '').then((value: Example|null) => {
      setResponseData(value)
      setIsLoading(false)
    })
  }, [])

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
                  {responseData ? JSON.stringify(responseData.message) : 'no data available'}
                </div>
              </div>
              <div className={styles.navigatorSection}>
                {responseData?.pageA.isDisp && (
                  <div className={styles.navigatorWrapper}>
                    <Link className={styles.navigator} to={`${Path.PAGE_A}?${params.toString()}`}>to PageA</Link>
                  </div>
                )}
                {responseData?.pageB.isDisp && (
                  <div className={styles.navigatorWrapper}>
                    <Link className={styles.navigator} to={`${Path.PAGE_B}?${params.toString()}`}>to PageB</Link>
                  </div>
                )}
              </div>
            </>
          )
        })()
      }
    </>
  )
}