import type { NextPage } from "next";

import BoltIcon from "@/assets/icons/heroicons/bolt.svg";
import GlobeAmericasIcon from "@/assets/icons/heroicons/globe-americas.svg";
import HeartIcon from "@/assets/icons/heroicons/heart.svg";
import FeatureCard from "@/components/data/FeatureCard";
import Button from "@/components/input/Button";
import SEO from "@/components/util/SEO";

const Sponsors: NextPage = () => {

  return (
    <>
      <SEO
        title="Sponsors"
        description="Without contributors our projects wouldn't be possible. Find out how you can help."
        keywords={["leavesmc", "leaves", "minecraft", "sponsor", "contributing"]}
      />
      <header className="max-w-7xl flex flex-row mx-auto px-4 pt-32 pb-16 lg:(pt-48 pb-32) gap-16">
        <div className="flex-1">
          <h1 className="font-medium leading-normal lg:(text-5xl leading-normal) text-4xl">
            Sponsors
          </h1>
          <p className="text-xl mt-4">
            LeavesMC is an open community, and part of managing the community
            involves paying for services, servers, and infrastructure. We do
            what we can to keep our costs reasonable and sustainable, but still
            some costs are unavoidable.
          </p>
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
              href="https://afdian.net/a/s-yh-china"
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
            Why You Should Donate
          </h2>
          <div className="grid md:grid-cols-3 mt-6 gap-2 px-2 xl:gap-4">
            <FeatureCard
              icon={GlobeAmericasIcon}
              label="Sustainability"
              description="Donations help keep LeavesMC sustainable and open to all. Only those who can afford to donate should do so, and no one should feel bad if they can't."
            />
            <FeatureCard
              icon={BoltIcon}
              label="Future plans"
              description="We need to upgrade our hosting to meet the growing demand for our services and APIs. This will increase costs, which we hope to offset with donations through Patreon and Afdian."
            />
            <FeatureCard
              icon={HeartIcon}
              label="Giving back"
              description="If we receive more in donations than our monthly costs, we may consider distributing funds to contributors in a fair and transparent way."
            />
          </div>
        </div>
      </section>
    </>
  );
};

// TODO: Add 爱发电 sponsors & Patreon sponsors
export default Sponsors;
