import { t } from "i18next";
import type { GetStaticProps, NextPage } from "next";
import { useState } from "react";

import SoftwareBuildsTable from "@/components/data/SoftwareBuildsTable";
import DownloadsTree from "@/components/layout/DownloadsTree";
import SEO from "@/components/util/SEO";
import type { Project } from "@/lib/service/types";
import { useVersionBuilds, getProject, useProject } from "@/lib/service/v2";

const INITIAL_PROJECT = "leaves";

interface LegacyDownloadProps {
  initialProjectId: string;
  initialProjectVersion: string;
}

export const getStaticProps: GetStaticProps<LegacyDownloadProps> = async () => {
  const project: Project = await getProject(INITIAL_PROJECT);
  const versions = project.versions;
  return {
    props: {
      initialProjectId: project.project_id,
      initialProjectVersion: versions[versions.length - 1],
    },
  };
};

const LegacyDownloads: NextPage<LegacyDownloadProps> = ({
  initialProjectId,
  initialProjectVersion,
}) => {
  const [selectedProject, setSelectedProject] = useState(initialProjectId);
  const [selectedVersion, setSelectedVersion] = useState(initialProjectVersion);
  const { data: builds } = useVersionBuilds(selectedProject, selectedVersion);
  const { data: versions } = useProject(selectedProject);

  const latestVersion = versions?.versions[versions?.versions.length - 1];
  const legacy = selectedVersion !== latestVersion;
  const experimental =
    builds?.builds[builds?.builds.length - 1].channel === "experimental";

  return (
    <>
      <SEO
        title={t("title.downloads.all")}
        description="Build explorer for LeavesMC projects. Proceed with caution!"
        keywords={[]}
      />
      <div className="flex flex-col h-screen">
        <div className="h-16" />
        <div className="flex-1 flex flex-row min-h-0">
          <DownloadsTree
            selectedProject={selectedProject}
            selectedVersion={selectedVersion}
            onSelect={(project, version) => {
              setSelectedProject(project);
              setSelectedVersion(version);
            }}
          />
          <div className="flex-1 overflow-auto">
            {legacy && (
              <>
                <div className="text-center px-4 py-2 font-bold bg-red-400 dark:bg-red-500 shadow-md">
                  {t("downloads.all.legacy")}
                </div>
              </>
            )}
            {experimental && (
              <>
                <div className="text-center px-4 py-2 font-bold bg-orange-400 dark:bg-orange-500 shadow-md">
                  {t("downloads.all.experimental")}
                </div>
              </>
            )}
            <SoftwareBuildsTable
              project={selectedProject}
              version={selectedVersion}
              builds={builds?.builds ?? []}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LegacyDownloads;
