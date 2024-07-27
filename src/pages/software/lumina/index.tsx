import { t } from "i18next";
import Image from "next/image";
import type { ReactElement } from "react";

import LuminaIcon from "@/assets/brand/lumina.svg";
import BoltIcon from "@/assets/icons/heroicons/bolt.svg";
import ChatBubbleLeftRightIcon from "@/assets/icons/heroicons/chat-bubble-left-right.svg";
import CodeBracketIcon from "@/assets/icons/heroicons/code-bracket.svg";
import LuminaMeme from "@/assets/images/luminameme.png";
import FeatureCard from "@/components/data/FeatureCard";
import SoftwareHeader from "@/components/layout/SoftwareHeader";
import SEO from "@/components/util/SEO";

const LuminaHome = (): ReactElement => {
  return (
    <>
      <SEO
        title="Lumina"
        description="Lumina is a new fork of Leaves that adds regionized multithreading to the server."
        keywords={[
          "leavesmc",
          "lumina",
          "server",
          "minecraft",
          "vanilla",
          "performance",
          "regionized",
          "multithreading",
          "fork",
        ]}
      />
      <SoftwareHeader
        id="lumina"
        name="Lumina"
        icon={LuminaIcon}
        header={<>{t("software.lumina.index.title")}</>}
        description={t("software.lumina.index.description")}
        github="https://github.com/LeavesMC/Lumina"
      />
      <section
        id="why"
        className="w-full pt-10 pb-5 bg-green-100 dark:bg-background-dark-80"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="font-semibold text-xl md:text-2xl px-6 lg:px-4">
            {t("software.lumina.index.why.title")}
          </h2>
          <div className="grid md:grid-cols-3 mt-6 gap-2 px-2 xl:gap-4">
            <FeatureCard
              icon={BoltIcon}
              label={t("software.lumina.index.why.reason.1.label")}
              description={t("software.lumina.index.why.reason.1.description")}
            />
            <FeatureCard
              icon={ChatBubbleLeftRightIcon}
              label={t("software.lumina.index.why.reason.2.label")}
              description={t("software.lumina.index.why.reason.2.description")}
            />
            <FeatureCard
              icon={CodeBracketIcon}
              label={t("software.lumina.index.why.reason.3.label")}
              description={t("software.lumina.index.why.reason.3.description")}
            />
          </div>
        </div>
      </section>
      <section
        id="facts"
        className="flex flex-col max-w-7xl mx-auto px-4 py-8 gap-8 md:(gap-12 py-16)"
      >
        <div className="flex flex-col gap-6 md:(flex-row-reverse gap-8) xl:gap-24 items-center">
          <div className="w-full flex-1 rounded-xl bg-gray-900 aspect-video relative overflow-clip">
            <Image
              alt=""
              src={LuminaMeme}
              placeholder="blur"
              fill
              sizes="(min-width: 80rem) 40rem, (min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-2xl md:text-4xl break-all">
              {t("software.lumina.index.image.1.title")}
            </h2>
            <p className="md:(mt-6 text-xl) text-gray-900 dark:text-gray-100 mt-3">
              {t("software.lumina.index.image.1.description")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

LuminaHome.softwareProps = {
  github: "https://github.com/LeavesMC/Lumina",
};

export default LuminaHome;
