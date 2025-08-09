import { t } from "i18next";
import type { NextPage } from "next";

import ChattingIllustration from "@/assets/illustrations/undraw/chatting.svg";
import CodeReviewIllustration from "@/assets/illustrations/undraw/code-review.svg";
import KnowledgeIllustration from "@/assets/illustrations/undraw/knowledge.svg";
import SavingsIllustration from "@/assets/illustrations/undraw/savings.svg";
import Button from "@/components/input/Button";
import SEO from "@/components/util/SEO";

const Contribute: NextPage = () => (
  <>
    <SEO
      title={t("title.contribute")}
      description="Without contributors our projects wouldn't be possible. Find out how you can help."
      keywords={["leavesmc", "leaves", "minecraft", "sponsor", "contributing"]}
      canonical="/contribute"
    />
    <header className="max-w-7xl flex flex-row mx-auto px-4 pt-32 pb-16 lg:(pt-48 pb-32) gap-16">
      <div className="flex-1">
        <h1 className="font-medium leading-normal lg:(text-5xl leading-normal) text-4xl">
          {t("contribute.title")}
        </h1>
        <p className="text-xl mt-4">{t("contribute.description")}</p>
        <div className="flex flex-row gap-4 mt-8"></div>
      </div>
      <div className="flex-1 lg:flex hidden justify-end"></div>
    </header>
    <section
      id="donate"
      className="px-4 py-4 max-w-7xl mx-auto flex flex-col-reverse items-center gap-8 lg:flex-row"
    >
      <div className="flex-1">
        <h2 className="font-medium text-2xl md:text-4xl">
          {t("contribute.donate.title")}
        </h2>
        <p className="md:(mt-6 text-lg) text-gray-900 dark:text-gray-100 mt-3">
          {t("contribute.donate.description")}
        </p>
        <div className="flex flex-row gap-4 mt-8">
          <Button variant="filled" href="/sponsor" dense>
            {t("contribute.button.more")}
          </Button>
        </div>
      </div>
      <div className="justify-start flex w-full lg:(flex-1 justify-end)">
        <SavingsIllustration className="max-h-32 lg:(max-w-72 max-h-none)" />
      </div>
    </section>
    <section
      id="code"
      className="px-4 py-4 max-w-7xl mx-auto flex flex-col-reverse items-center mt-12 gap-8 lg:flex-row"
    >
      <div className="flex-1">
        <h2 className="font-medium text-2xl md:text-4xl">
          {t("contribute.code.title")}
        </h2>
        <p className="md:(mt-6 text-lg) text-gray-900 dark:text-gray-100 mt-3">
          {t("contribute.code.description")}
        </p>
        <div className="flex flex-row gap-4 mt-8">
          <Button
            variant="filled"
            href="https://github.com/LeavesMC/Leaves/blob/master/docs/CONTRIBUTING.md"
            external
            dense
          >
            {t("contribute.button.more")}
          </Button>
        </div>
      </div>
      <div className="justify-start flex w-full lg:(flex-1 justify-end)">
        <CodeReviewIllustration className="max-h-32 lg:(max-w-72 max-h-none)" />
      </div>
    </section>
    <section
      id="support"
      className="px-4 py-4 max-w-7xl mx-auto flex flex-col-reverse items-center mt-12 gap-8 lg:flex-row"
    >
      <div className="lg:flex-1">
        <h2 className="font-medium text-2xl md:text-4xl">
          {t("contribute.support.title")}
        </h2>
        <p className="md:(mt-6 text-lg) text-gray-900 dark:text-gray-100 mt-3">
          {t("contribute.support.description")}
        </p>
        <div className="flex flex-row gap-4 mt-8">
          <Button variant="filled" href="/community" dense>
            {t("contribute.button.support")}
          </Button>
        </div>
      </div>
      <div className="justify-start flex w-full lg:(flex-1 justify-end)">
        <ChattingIllustration className="max-h-32 lg:(max-w-72 max-h-none)" />
      </div>
    </section>
    <section
      id="documentation"
      className="px-4 py-4 max-w-7xl mx-auto flex flex-col-reverse items-center mt-12 gap-8 lg:flex-row"
    >
      <div className="flex-1">
        <h2 className="font-medium text-2xl md:text-4xl">
          {t("contribute.documentation.title")}
        </h2>
        <p className="md:(mt-6 text-lg) text-gray-900 dark:text-gray-100 mt-3">
          {t("contribute.documentation.description")}
        </p>
        <div className="flex flex-row gap-4 mt-8">
          <Button
            variant="filled"
            href="https://github.com/LeavesMC/docs"
            external
            dense
          >
            {t("contribute.button.documentation")}
          </Button>
        </div>
      </div>
      <div className="justify-start flex w-full lg:(flex-1 justify-end)">
        <KnowledgeIllustration className="max-h-32 lg:(max-w-72 max-h-none)" />
      </div>
    </section>
  </>
);

export default Contribute;
