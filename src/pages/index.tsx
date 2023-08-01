import type { NextPage } from "next";
import Image from "next/image";

import HomeImage from "@/assets/images/home.png";
import Skeleton from "@/components/data/Skeleton";
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
        title="Home"
        description="LeavesMC is a Minecraft software organization focusing on improving
            the game’s ecosystem with faster and more secure software."
        keywords={["leavesmc", "leaves", "minecraft", "vanilla"]}
      />
      <header className="max-w-7xl flex flex-row mx-auto px-4 pt-32 pb-26 lg:(pt-48 pb-46)">
        <div className="flex-1">
          <h1 className="font-medium leading-normal lg:(text-5xl leading-normal) text-4xl">
            Pure software. <br />
            <span className="text-green-500">Born for vanilla.</span>
          </h1>
          <p className="text-xl mt-4">
            LeavesMC improves Minecraft’s ecosystem with fast, secure
            and stable software available, providing quick releases and
            helpful support as the most maverick.
          </p>
          <div className="flex flex-row gap-4 mt-8">
            <Button variant="filled" href="/downloads">
              Downloads
            </Button>
            <Button variant="outlined" href="https://docs.leavesmc.top" external>
              Documentation
            </Button>
          </div>
        </div>
        <div className="flex-1 lg:flex hidden justify-end">
          <Terminal project={project} />
        </div>
      </header>
      <section
        id="facts"
        className="flex flex-col max-w-7xl mx-auto px-4 py-8 gap-8 md:(gap-12 py-16)"
      >
        <div className="flex flex-col gap-6 md:(flex-row gap-8) xl:gap-24 items-center">
          <div className="w-full flex-1 rounded-xl bg-gray-900 aspect-video relative overflow-clip">
            <Image
              alt=""
              src={HomeImage}
              objectFit="cover"
              layout="fill"
              placeholder="blur"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-2xl md:text-4xl break-all">
              Powering&nbsp;
              {playerData ? (
                <span className="text-green-500">
                  {(playerData[0][1])}+
                </span>
              ) : (
                <Skeleton className="w-30 h-6 inline-block" />
              )}
              &nbsp;players
            </h2>
            <p className="md:(mt-6 text-xl) text-gray-900 dark:text-gray-100 mt-3">
              LeavesMC’s software is designed with utility and performance
              in mind, it can handle whatever you throw at it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

export const getStaticProps = getProjectProps("leaves");
