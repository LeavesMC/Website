import Giscus from "@giscus/react";
import { t } from "i18next";
import type { NextPage } from "next";

import Button from "@/components/input/Button";
import SEO from "@/components/util/SEO";

const CommunityIndex: NextPage = () => (
  <>
    <SEO
      title={t("title.community")}
      description="We're happy to have you as a part of the LeavesMC community!"
      keywords={["leavesmc", "leaves", "minecraft", "sponsor", "community"]}
    />
    <header className="max-w-7xl flex flex-row mx-auto px-4 pt-32 pb-16 lg:(pt-48 pb-32) gap-16">
      <div className="flex-1">
        <h1 className="font-medium leading-normal lg:(text-5xl leading-normal) text-4xl">
          {t("community.title")}
        </h1>
        <p className="text-xl mt-4">{t("community.description")}</p>
        <div className="flex flex-row gap-4 mt-8">
          <Button
            variant="filled"
            href="https://discord.com/channels/1028563196040200272/1028563196782596118/1047082992666955867"
            dense
          >
            {t("community.button.guidelines")}
          </Button>
        </div>
      </div>
      <div className="flex-1 lg:flex hidden justify-end"></div>
    </header>
    <section
      id="discord"
      className="px-4 py-4 max-w-7xl mx-auto flex flex-col-reverse gap-8 lg:flex-row"
    >
      <div className="flex-1">
        <h2 className="font-medium text-2xl md:text-4xl">Discord</h2>
        <p className="md:(mt-6 text-lg) text-gray-900 dark:text-gray-100 mt-3">
          {t("community.discord.description")}
        </p>
        <div className="flex flex-row gap-4 mt-8">
          <Button
            variant="filled"
            href="https://discord.gg/5hgtU72w33"
            external
            dense
          >
            {t("community.button.discord")}
          </Button>
        </div>
      </div>
      <div className="justify-start flex w-full lg:(flex-1 justify-end)"></div>
    </section>
    <section
      id="qq-group"
      className="px-4 py-4 max-w-7xl mx-auto flex flex-col-reverse mt-12 gap-8 lg:flex-row"
    >
      <div className="flex-1">
        <h2 className="font-medium text-2xl md:text-4xl">
          {t("community.qq-group.title")}
        </h2>
        <p className="md:(mt-6 text-lg) text-gray-900 dark:text-gray-100 mt-3">
          {t("community.qq-group.description")}
        </p>
        <div className="flex flex-row gap-4 mt-8">
          <Button variant="filled" href="" dense>
            <button
              onClick={() => {
                self.location.href =
                  "tencent://groupwpa/?param=7b2267726f757055696e223a3831353835373731332c2274696d655374616d70223a313732313734363039312c22617574684b6579223a223157355442357454674d31362b6174466b68725278555463586e76767079513265532b704151665a713837684a633661385530657a2b63324b6c673434414d61222c2261757468223a22227d";
                self.location.href =
                  "mqqopensdkapi://bizAgent/qm/qr?url=https%3A%2F%2Fqm.qq.com%2Fcgi-bin%2Fqm%2Fqr%3Fk%3DIs52_cq1YV2oRj9QwBcspH_KgVIbnzhg";
              }}
            >
              {t("community.button.qq-group")}
            </button>
          </Button>
        </div>
      </div>
      <div className="justify-start flex w-full lg:(flex-1 justify-end)"></div>
    </section>
    <section
      id="giscus"
      className="px-4 py-4 max-w-7xl mx-auto flex flex-col-reverse mt-12 gap-8 lg:flex-row"
    >
      <div className="flex-1">
        <h2 className="font-medium text-2xl md:text-4xl">GitHub Discussions</h2>
        <p className="md:(mt-6 text-lg) text-gray-900 dark:text-gray-100 mt-3">
          {t("community.giscus.description")}
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
            lang={t("community.giscus.lang")}
          />
        </div>
      </div>
      <div className="justify-start flex w-full lg:(flex-1 justify-end)"></div>
    </section>
  </>
);

export default CommunityIndex;
