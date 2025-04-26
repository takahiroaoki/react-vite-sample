import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { Link, useNavigate } from "react-router";
import { UrlUtils } from "~/libs/url";
import { ApiClient } from "~/libs/apiClient";
import { Example, SubPageData } from "~/libs/schemas";
import { Path, QueryParam } from "~/libs/const";
import SelectForm from "~/organisms/selectForm/selectForm";

type SubPageName = "pageA" | "pageB";
type Props = {
  title: string;
  subPageName: SubPageName;
};

export default function SubPage({ title, subPageName }: Props) {
  const [params, setParams] = useState(new URLSearchParams());
  const [pageData, setPageData] = useState<SubPageData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const params = UrlUtils.getQueryParams();
    setParams(params);

    ApiClient.callExample(params.get(QueryParam.PARAM_1) ?? "").then(
      (value: Example | null) => {
        if (!value || !value[subPageName].isDisp) {
          navigate(`${Path.TOP}?${params.toString()}`);
          return;
        }
        setPageData(value[subPageName]);
      },
    );
  }, [navigate, subPageName]);

  return (
    <>
      <div className={styles.navigatorSection}>
        <Link
          className={styles.navigator}
          to={`${Path.TOP}?${params.toString()}`}
        >
          back to Top Page
        </Link>
      </div>
      <div className={styles.titleSection}>
        <h2 className={styles.title}>{title}</h2>
      </div>
      {(() => {
        if (!pageData) {
          return <div>Loading...</div>;
        }
        return (
          <>
            <div className={styles.message}>{pageData.message}</div>
            <SelectForm groups={pageData.groups} />
          </>
        );
      })()}
    </>
  );
}
