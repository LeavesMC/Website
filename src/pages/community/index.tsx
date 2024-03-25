import Giscus from "@giscus/react";
import { t } from "i18next";
import type { NextPage } from "next";

import Button from "@/components/input/Button";
import SEO from "@/components/util/SEO";

const CommunityIndex: NextPage = () => (
  <>
    <SEO
      title={t("title.community.index")}
      description="We're happy to have you as a part of the LeavesMC community!"
      keywords={["leavesmc", "leaves", "minecraft", "sponsor", "community"]}
    />
    <header className="max-w-7xl flex flex-row mx-auto px-4 pt-32 pb-16 lg:(pt-48 pb-32) gap-16">
      <div className="flex-1">
        <h1 className="font-medium leading-normal lg:(text-5xl leading-normal) text-4xl">
          {t("community.index.title")}
        </h1>
        <p className="text-xl mt-4">{t("community.index.description")}</p>
        <div className="flex flex-row gap-4 mt-8">
          <Button variant="filled" href="/community/guidelines" dense>
            {t("community.index.button.guidelines")}
          </Button>
        </div>
      </div>
      <div className="flex-1 lg:flex hidden justify-end"></div>
    </header>
    <section
      id="discord"
      className="px-4 py-4 max-w-7xl mx-auto flex flex-col-reverse items-center gap-8 lg:flex-row"
    >
      <div className="flex-1">
        <h2 className="font-medium text-2xl md:text-4xl">Discord</h2>
        <p className="md:(mt-6 text-lg) text-gray-900 dark:text-gray-100 mt-3">
          {t("community.index.discord.description")}
        </p>
        <div className="flex flex-row gap-4 mt-8">
          <Button
            variant="filled"
            href="https://discord.gg/5hgtU72w33"
            external
            dense
          >
            {t("community.index.button.discord")}
          </Button>
        </div>
      </div>
      <div className="justify-start flex w-full lg:(flex-1 justify-end)"></div>
    </section>
    <section
      id="qq-group"
      className="px-4 py-4 max-w-7xl mx-auto flex flex-col-reverse items-center mt-12 gap-8 lg:flex-row"
    >
      <div className="flex-1">
        <h2 className="font-medium text-2xl md:text-4xl">
          {t("community.index.qq-group.title")}
        </h2>
        <p className="md:(mt-6 text-lg) text-gray-900 dark:text-gray-100 mt-3">
          {t("community.index.qq-group.description")}
        </p>
        <div className="flex flex-row gap-4 mt-8">
          <Button
            variant="filled"
            href="https://qm.qq.com/cgi-bin/qm/qr?k=nisbmnCFeEJCcYWBQ10th4Fu99XWklH4&group_code=815857713"
            external
            dense
          >
            {t("community.index.button.qq-group")}
          </Button>
        </div>
      </div>
      <div className="justify-start flex w-full lg:(flex-1 justify-end)"></div>
    </section>
    <section
      id="giscus"
      className="px-4 py-4 max-w-7xl mx-auto flex flex-col-reverse items-center mt-12 gap-8 lg:flex-row"
    >
      <div className="flex-1">
        <h2 className="font-medium text-2xl md:text-4xl">GitHub Discussions</h2>
        <p className="md:(mt-6 text-lg) text-gray-900 dark:text-gray-100 mt-3">
          {t("community.index.giscus.description")}
        </p>
        <div className="flex flex-row gap-4 mt-8">
          <Giscus
            repo="LeavesMC/Website"
            repoId="R_kgDOKAcRiw"
            mapping="number"
            term="8"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="preferred_color_scheme"
            lang={t("community.index.giscus.lang")}
          />
        </div>
      </div>
      <div className="justify-start flex w-full lg:(flex-1 justify-end)"></div>
    </section>
  </>
);

export default CommunityIndex;
