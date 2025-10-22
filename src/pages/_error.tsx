import * as Sentry from "@sentry/nextjs";
import { t } from "i18next";
import type { NextPage, NextPageContext } from "next";
import Error from "next/error";

import Button from "@/components/input/Button";

const ErrorPage: NextPage = () => {
  const eventId = Sentry.lastEventId();

  return (
    <>
      <header className="max-w-7xl flex flex-row mx-auto px-4 pt-32 pb-16 lg:(pt-48 pb-32) gap-16">
        <div className="flex-1">
          <h1 className="font-medium leading-normal lg:(text-5xl leading-normal) text-4xl">
            {t("error.500.title")}
          </h1>
          <p className="text-xl mt-4">{t("error.500.description")}</p>
          <div className="flex flex-row gap-4 mt-8">
            <Button variant="filled" href="">
              <button
                onClick={() =>
                  Sentry.showReportDialog({ eventId, lang: t("error.lang") })
                }
              >
                {t("error.500.report")}
              </button>
            </Button>
            <Button variant="outlined" href="">
              <button onClick={() => self.location.reload()}>
                {t("error.500.refresh")}
              </button>
            </Button>
          </div>
        </div>
        <div className="flex-1 lg:flex hidden justify-end"></div>
      </header>
    </>
  );
};

export default ErrorPage;

ErrorPage.getInitialProps = async (contextData: NextPageContext) => {
  await Sentry.captureUnderscoreErrorException(contextData);
  return Error.getInitialProps(contextData);
};
