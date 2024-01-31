import { t } from "i18next";
import type { NextPage } from "next";
import Image from "next/image";

import teams from "@/assets/data/team.json";
import DiscordIcon from "@/assets/icons/fontawesome/discord-brands.svg";
import GitHubIcon from "@/assets/icons/fontawesome/github-brands.svg";
import Button from "@/components/input/Button";
import SEO from "@/components/util/SEO";
import { useGitHubContributors } from "@/lib/service/github";

const HIDDEN_USERS = [49699333]; // dependabot

const Team: NextPage = () => {
  const { data: contributors } = useGitHubContributors();

  return (
    <>
      <SEO
        title={t("title.team")}
        description="Meet the team behind LeavesMC, a Minecraft software organization focusing on improving
            the game’s ecosystem with faster and more secure software."
        keywords={["leavesmc", "leaves", "minecraft", "team"]}
      />
      <header className="max-w-7xl flex flex-row mx-auto px-4 pt-32 pb-26 lg:(pt-48 pb-46) gap-16">
        <div className="flex-1">
          <h1 className="font-medium leading-normal lg:(text-5xl leading-normal) text-4xl">
            {t("team.title")}
          </h1>
          <p className="text-xl mt-4">{t("team.description")}</p>
          <div className="flex flex-row gap-4 mt-8">
            <Button variant="filled" href="/sponsor">
              {t("team.button.sponsor")}
            </Button>
            <Button
              variant="outlined"
              href="https://github.com/LeavesMC"
              external
            >
              GitHub
            </Button>
          </div>
        </div>
        <div className="flex-1 lg:flex hidden justify-end"></div>
      </header>
      {teams.map((team) => (
        <section
          id={team.id}
          key={team.id}
          className="px-4 py-8 max-w-7xl mx-auto"
        >
          <h2 className="text-2xl font-medium mb-2">
            {t(`team.${team.id}.title`)}
          </h2>
          <p>{t(`team.${team.id}.description`)}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {team.members.map((member) => (
              <article
                key={member.name}
                className="border border-gray-300 dark:border-gray-700 rounded-md hover:shadow-md transition-shadow p-4"
              >
                <div className="flex flex-row gap-6">
                  <div className="w-20 h-20 relative bg-gray-600 rounded-md overflow-clip ">
                    {member.avatar && (
                      <Image
                        alt={`${member.name}${t("team.avatar")}`}
                        src={member.avatar}
                        unoptimized
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="min-w-0 flex-1 break-all">
                    <span className="font-semibold">{member.name}</span>
                    {member.github && (
                      <a
                        href={`https://github.com/${member.github}`}
                        className="flex flex-row items-center gap-2 mt-2 text-green-800 dark:text-green-300 text-sm font-medium"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <GitHubIcon className="w-4 h-4 fill-gray-700 dark:fill-gray-300" />
                        {member.github}
                      </a>
                    )}
                    {member.discord && (
                      <div className="flex flex-row items-center gap-2 mt-1 text-green-800 dark:text-green-300 text-sm font-medium">
                        <DiscordIcon className="w-4 h-4 fill-gray-700 dark:fill-gray-300" />
                        {member.discord}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
      <section id="contributors" className="px-4 py-8 max-w-7xl mx-auto">
        <h2 className="text-2xl font-medium mb-2">
          {t("team.contributors.title")}
        </h2>
        <p>{t("team.contributors.description")}</p>
        <div className="grid grid-cols-8 md:grid-cols-16 lg:grid-cols-18 xl:grid-cols-20 mt-8 gap-2">
          {contributors?.map((page) =>
            page
              .filter((contributor) => !HIDDEN_USERS.includes(contributor.id))
              .map((contributor) => (
                <a
                  role="button"
                  className="relative rounded-full aspect-square bg-gray-600 flex items-center justify-center text-white font-bold uppercase overflow-auto transition-transform transform hover:(scale-120 shadow-lg)"
                  href={`https://github.com/${contributor.login}`}
                  rel="noreferrer"
                  target="_blank"
                  key={contributor.id}
                >
                  {contributor.login[0]}
                  <Image
                    alt={`${contributor.login}${t("team.avatar")}`}
                    src={contributor.avatar_url}
                    onError={(e) => (e.currentTarget.style.display = "none")}
                    onLoad={(e) => {
                      e.currentTarget.style.backgroundColor = "white";
                    }}
                    unoptimized
                    fill
                    className="object-cover"
                  />
                </a>
              )),
          )}
        </div>
      </section>
    </>
  );
};

export default Team;
