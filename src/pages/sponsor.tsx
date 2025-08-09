import { t } from "i18next";
import type { NextPage } from "next";

import BoltIcon from "@/assets/icons/heroicons/bolt.svg";
import GlobeAmericasIcon from "@/assets/icons/heroicons/globe-americas.svg";
import HeartIcon from "@/assets/icons/heroicons/heart.svg";
import FeatureCard from "@/components/data/FeatureCard";
import Button from "@/components/input/Button";
import SEO from "@/components/util/SEO";

const Sponsor: NextPage = () => {
  return (
    <>
      <SEO
        title={t("title.sponsor")}
        description="Without contributors our projects wouldn't be possible. Find out how you can help."
        keywords={[
          "leavesmc",
          "leaves",
          "minecraft",
          "sponsor",
          "contributing",
        ]}
        canonical="/sponsor"
      />
      <header className="max-w-7xl flex flex-row mx-auto px-4 pt-32 pb-16 lg:(pt-48 pb-32) gap-16">
        <div className="flex-1">
          <h1 className="font-medium leading-normal lg:(text-5xl leading-normal) text-4xl">
            {t("sponsor.title")}
          </h1>
          <p className="text-xl mt-4">{t("sponsor.description")}</p>
          <div className="flex flex-row gap-4 mt-8">
            <Button
              variant="filled"
              href="https://patreon.com/violetc422"
              external
            >
              Patreon
            </Button>
            <Button
              variant="outlined"
              href="https://afdian.com/a/s-yh-china"
              external
            >
              爱发电
            </Button>
          </div>
        </div>
        <div className="flex-1 lg:flex hidden justify-end"></div>
      </header>
      <section
        id="why"
        className="w-full pt-10 pb-5 bg-green-100 dark:bg-background-dark-80"
      >
        <div className="max-w-7xl mx-auto py-2">
          <h2 className="font-semibold text-xl md:text-2xl px-6 lg:px-4">
            {t("sponsor.why.title")}
          </h2>
          <div className="grid md:grid-cols-3 mt-6 gap-2 px-2 xl:gap-4">
            <FeatureCard
              icon={GlobeAmericasIcon}
              label={t("sponsor.why.reason.1.label")}
              description={t("sponsor.why.reason.1.description")}
            />
            <FeatureCard
              icon={BoltIcon}
              label={t("sponsor.why.reason.2.label")}
              description={t("sponsor.why.reason.2.description")}
            />
            <FeatureCard
              icon={HeartIcon}
              label={t("sponsor.why.reason.3.label")}
              description={t("sponsor.why.reason.3.description")}
            />
          </div>
        </div>
      </section>
      <section id="sponsors" className="px-4 py-8 max-w-7xl mx-auto">
        <h2 className="font-semibold text-xl md:text-2xl">
          {t("sponsor.sponsors.title")}
        </h2>
        <div className="mt-8 flex justify-center pointer-events-none select-none">
          <img
            src="https://api.leavesmc.org/afdian/sponsor.svg"
            alt={t("sponsor.sponsors.afdian")}
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>
    </>
  );
};

// TODO: Add Patreon sponsors
export default Sponsor;
