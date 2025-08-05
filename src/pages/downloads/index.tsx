import { t } from "i18next";
import type { NextPage } from "next";

import LeavesIcon from "@/assets/brand/leaves.svg";
import LuminaIcon from "@/assets/brand/lumina.svg";
import SoftwarePreview from "@/components/data/SoftwarePreview";
import SEO from "@/components/util/SEO";

const Downloads: NextPage = () => {
  return (
    <>
      <SEO
        title={t("title.downloads.index")}
        description="Find downloads for our software – including Leaves."
        keywords={["leavesmc", "minecraft", "vanilla", "leaves", "downloads"]}
      />
      <header className="max-w-4xl flex flex-col items-center mx-auto px-4 pt-32 pb-16 lg:(pt-48 pb-26) gap-2">
        <h1 className="font-medium leading-normal lg:(text-5xl leading-normal) text-4xl">
          {t("downloads.index.title")}
        </h1>
        <p className="text-xl text-center mb-6">
          {t("downloads.index.description")}
        </p>
        <div className="grid md:grid-cols-2 gap-2 px-2 xl:gap-4">
          <SoftwarePreview
            id="leaves"
            name="Leaves"
            icon={LeavesIcon}
            description={t("downloads.index.softwares.leaves.description")}
            download
          />
          <SoftwarePreview
            id="lumina"
            name="Lumina"
            icon={LuminaIcon}
            description={t("downloads.index.softwares.lumina.disabled")}
            disabled
          />
        </div>
      </header>
    </>
  );
};

export default Downloads;
