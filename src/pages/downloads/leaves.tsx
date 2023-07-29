import type { ReactElement } from "react";

import LeavesIcon from "@/assets/brand/leaves.svg";
import SoftwareDownload from "@/components/layout/SoftwareDownload";
import SEO from "@/components/util/SEO";
import type { ProjectProps } from "@/lib/context/downloads";
import { getProjectProps } from "@/lib/context/downloads";

const LeavesDownloads = ({ project }: ProjectProps): ReactElement => {
  return (
    <>
      <SEO
        title="Leaves Downloads"
        description="Download Leaves, our Minecraft server software offering unrivaled performance and stability."
        keywords={[
          "leavesmc",
          "minecraft",
          "vanilla",
          "leaves",
          "downloads",
          "jar",
        ]}
      />
      <SoftwareDownload
        id="leaves"
        project={project}
        icon={LeavesIcon}
        description="Download Leaves, our Minecraft server software offering unrivaled performance and stability."
        experimentalWarning="Download experimental builds of Leaves, our Minecraft server software offering unrivaled performance and stability. Proceed with caution!"
      />
    </>
  );
};

export default LeavesDownloads;

export const getStaticProps = getProjectProps("leaves");
