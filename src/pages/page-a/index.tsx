import { useEffect, useState } from 'react';
import styles from './index.module.css'
import { Link } from "react-router"
import { UrlUtils } from '~/libs/url';
import { ApiClient } from '~/libs/apiClient';
import { Example } from '~/libs/schemas';
import { Path, QueryParam } from '~/libs/const';

export default function PageA() {
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
      <div className={styles.navigatorSection}>
        <Link className={styles.navigator} to={`${Path.TOP}?${params.toString()}`}>back to Top Page</Link>
      </div>
      <div className={styles.titleSection}>
        <h2 className={styles.title}>Page A</h2>
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
                  {responseData && responseData.pageA.isDisp
                    ? JSON.stringify(responseData.pageA.message)
                    : 'no data available'}
                </div>
              </div>
            </>
          )
        })()
      }
    </>
  )
}