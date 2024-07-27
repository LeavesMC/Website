import { t } from "i18next";
import type { NextPage } from "next";
import Image from "next/image";
import { Trans } from "react-i18next";

import LeavesIcon from "@/assets/brand/leaves.svg";
import LuminaIcon from "@/assets/brand/lumina.svg";
import HomeImage from "@/assets/images/home.png";
import Skeleton from "@/components/data/Skeleton";
import SoftwarePreview from "@/components/data/SoftwarePreview";
import { Terminal } from "@/components/data/Terminal";
import Button from "@/components/input/Button";
import SEO from "@/components/util/SEO";
import { getProjectProps, type ProjectProps } from "@/lib/context/downloads";
import { useBstatsPlayers } from "@/lib/service/bstats";

const Home: NextPage<ProjectProps> = ({ project }) => {
  const { data: playerData } = useBstatsPlayers();

  return (
    <>
      <SEO
        title={t("title.index")}
        description="LeavesMC is a Minecraft software organization focusing on improving
          the game’s ecosystem with faster and more secure software."
        keywords={["leavesmc", "leaves", "minecraft", "vanilla"]}
      />
      <header className="max-w-7xl flex flex-row mx-auto px-4 pt-32 pb-26 lg:(pt-48 pb-46)">
        <div className="flex-1">
          <h1 className="font-medium leading-normal lg:(text-5xl leading-normal) text-4xl">
            {t("index.title.line1")}
            <br />
            <span className="text-green-500">{t("index.title.line2")}</span>
          </h1>
          <p className="text-xl mt-4">{t("index.description")}</p>
          <div className="flex flex-row gap-4 mt-8">
            <Button variant="filled" href="/downloads">
              {t("index.downloads")}
            </Button>
            <Button
              variant="outlined"
              href="https://docs.leavesmc.org"
              external
            >
              {t("index.documentation")}
            </Button>
          </div>
        </div>
        <div className="flex-1 lg:flex hidden justify-end">
          <Terminal project={project} />
        </div>
      </header>
      <section
        id="software"
        className="w-full pt-12 pb-8 bg-green-100 dark:bg-background-dark-80"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="font-semibold text-xl md:text-2xl px-6 lg:px-4 mb-4">
            <Trans i18nKey="index.software.title">
              <span className="text-green-500" />
            </Trans>
          </h2>
          <div className="grid md:(grid-cols-3 -ml-4) gap-2 px-2 xl:gap-4">
            <SoftwarePreview
              id="leaves"
              name="Leaves"
              icon={LeavesIcon}
              description={t("downloads.index.softwares.leaves.description")}
            />
            <SoftwarePreview
              id="lumina"
              name="Lumina"
              icon={LuminaIcon}
              description={t("downloads.index.softwares.lumina.description")}
            />
          </div>
        </div>
      </section>
      <section
        id="facts"
        className="flex flex-col max-w-7xl mx-auto px-4 py-8 gap-8 md:(gap-12 py-16)"
      >
        <div className="flex flex-col gap-6 md:(flex-row gap-8) xl:gap-24 items-center">
          <div className="w-full flex-1 rounded-xl bg-gray-900 aspect-video relative overflow-clip">
            <Image
              alt=""
              src={HomeImage}
              placeholder="blur"
              fill
              sizes="(min-width: 80rem) 40rem, (min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-2xl md:text-4xl break-all">
              {t("index.image.1.title.powering")}&nbsp;
              {playerData ? (
                <span className="text-green-500">{playerData[0][1]}+</span>
              ) : (
                <Skeleton className="w-30 h-6 inline-block" />
              )}
              &nbsp;{t("index.image.1.title.players")}
            </h2>
            <p className="md:(mt-6 text-xl) text-gray-900 dark:text-gray-100 mt-3">
              {t("index.image.1.description")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

export const getStaticProps = getProjectProps("leaves");
