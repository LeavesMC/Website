import { t } from "i18next";
import type { NextPage } from "next";
import { Trans } from "react-i18next";

import BYIcon from "@/assets/icons/cc/by.svg";
import CCIcon from "@/assets/icons/cc/cc.svg";
import SAIcon from "@/assets/icons/cc/sa.svg";
import SEO from "@/components/util/SEO";
const CommunityGuidelines: NextPage = () => (
  <>
    <SEO
      title={t("title.community.guidelines")}
      description="Community Guidelines for the LeavesMC community."
      keywords={["leavesmc", "leaves", "minecraft", "community", "guidelines"]}
    />
    <header className="max-w-7xl mx-auto px-4 pt-32 pb-16">
      <h1 className="font-medium leading-normal lg:(text-5xl leading-normal) text-4xl">
        {t("community.guidelines.title")}
      </h1>
    </header>
    <section id="overview" className="px-4 py-4 max-w-7xl mx-auto leading-7">
      <h2 className="text-2xl font-medium mb-4">
        {t("guidelines:overview.title")}
      </h2>
      <p>{t("guidelines:overview.text")}</p>
    </section>
    <section
      id="the-leaves-community"
      className="px-4 py-4 max-w-7xl mx-auto leading-7"
    >
      <h2 className="text-2xl font-medium mb-4">
        {t("guidelines:the-leaves-community.title")}
      </h2>
      <p>{t("guidelines:the-leaves-community.text")}</p>
      <ul className="list-disc list-inside my-4">
        <li>{t("guidelines:the-leaves-community.list.1")}</li>
        <li>{t("guidelines:the-leaves-community.list.2")}</li>
        <li>{t("guidelines:the-leaves-community.list.3")}</li>
        <li>{t("guidelines:the-leaves-community.list.4")}</li>
      </ul>
    </section>
    <section
      id="the-leaves-community"
      className="px-4 py-4 max-w-7xl mx-auto leading-7 "
    >
      <h2 className="text-2xl font-medium mb-4">
        {t("guidelines:guidelines.title")}
      </h2>
      <p>{t("guidelines:guidelines.text.1")}</p>
      <ol className="list-decimal list-inside my-4 ml-4">
        <li>{t("guidelines:guidelines.rules.1")}</li>
        <li>{t("guidelines:guidelines.rules.2")}</li>
      </ol>
      <p>
        {t("guidelines:guidelines.text.2")}
        <br />
        <br />
        {t("guidelines:guidelines.text.3")}
      </p>
      <ol className="list-decimal list-inside my-4 ml-4 space-y-2 py-1">
        <li>
          {t("guidelines:guidelines.guidelines.1.text")}
          <ol className="list-alpha list-inside ml-6 space-y-2 py-1">
            <li>
              <Trans i18nKey="guidelines:guidelines.guidelines.1.a">
                <a
                  href="#zero-tolerance-items"
                  className="text-green-800 dark:text-green-300"
                />
              </Trans>
            </li>
          </ol>
        </li>
        <li>
          {t("guidelines:guidelines.guidelines.2.text")}
          <ol className="list-alpha list-inside ml-6 space-y-2 py-1">
            <li>{t("guidelines:guidelines.guidelines.2.a")}</li>
          </ol>
        </li>
        <li>
          {t("guidelines:guidelines.guidelines.3.text")}
          <ol className="list-alpha list-inside ml-6 space-y-2 py-1">
            <li>{t("guidelines:guidelines.guidelines.3.a")}</li>
            <li>
              {t("guidelines:guidelines.guidelines.3.b.text")}
              <ol className="list-roman list-inside ml-6 space-y-2 py-1">
                <li>{t("guidelines:guidelines.guidelines.3.b.i")}</li>
                <li>{t("guidelines:guidelines.guidelines.3.b.ii")}</li>
              </ol>
            </li>
          </ol>
        </li>
        <li>{t("guidelines:guidelines.guidelines.4")}</li>
        <li>
          {t("guidelines:guidelines.guidelines.5.text")}
          <ol className="list-alpha list-inside ml-6 space-y-2 py-1">
            <li>{t("guidelines:guidelines.guidelines.5.a")}</li>
            <li>{t("guidelines:guidelines.guidelines.5.b")}</li>
            <li>{t("guidelines:guidelines.guidelines.5.c")}</li>
            <li>{t("guidelines:guidelines.guidelines.5.d")}</li>
          </ol>
        </li>
        <li>
          {t("guidelines:guidelines.guidelines.6.text")}
          <ol className="list-alpha list-inside ml-6 space-y-2 py-1">
            <li>{t("guidelines:guidelines.guidelines.6.a")}</li>
            <li>{t("guidelines:guidelines.guidelines.6.b")}</li>
            <li>{t("guidelines:guidelines.guidelines.6.c")}</li>
          </ol>
        </li>
        <li>
          {t("guidelines:guidelines.guidelines.7.text")}
          <ol className="list-alpha list-inside ml-6 space-y-2 py-1">
            <li>{t("guidelines:guidelines.guidelines.7.a")}</li>
          </ol>
        </li>
        <li>
          {t("guidelines:guidelines.guidelines.8.text")}
          <ol className="list-alpha list-inside ml-6 space-y-2 py-1">
            <li>{t("guidelines:guidelines.guidelines.8.a")}</li>
          </ol>
        </li>
        <li>
          {t("guidelines:guidelines.guidelines.9.text")}
          <ol className="list-alpha list-inside ml-6 space-y-2 py-1">
            <li>{t("guidelines:guidelines.guidelines.9.a")}</li>
          </ol>
        </li>
      </ol>
      <p>
        <Trans i18nKey="guidelines:guidelines.text.4">
          <code />
        </Trans>
      </p>
    </section>
    <section
      id="zero-tolerance-items"
      className="px-4 py-4 max-w-7xl mx-auto leading-7"
    >
      <h2 className="text-2xl font-medium mb-4">
        {t("guidelines:zero-tolerance-items.title")}
      </h2>
      <p>{t("guidelines:zero-tolerance-items.text.1")}</p>
      <ul className="list-disc list-inside my-4 ml-4">
        <li>{t("guidelines:zero-tolerance-items.list.1")}</li>
        <li>{t("guidelines:zero-tolerance-items.list.2")}</li>
        <li>{t("guidelines:zero-tolerance-items.list.3")}</li>
        <li>
          {t("guidelines:zero-tolerance-items.list.4.text")}
          <ul className="list-disc list-inside ml-6 py-1">
            <li>{t("guidelines:zero-tolerance-items.list.4.1")}</li>
            <li>{t("guidelines:zero-tolerance-items.list.4.2")}</li>
          </ul>
        </li>
        <li>{t("guidelines:zero-tolerance-items.list.5")}</li>
        <li>{t("guidelines:zero-tolerance-items.list.6")}</li>
        <li>{t("guidelines:zero-tolerance-items.list.7")}</li>
      </ul>
      <p>
        {t("guidelines:zero-tolerance-items.text.2")}
        <br />
        <br />
        {t("guidelines:zero-tolerance-items.text.3")}
      </p>
    </section>
    <section
      id="topic-specific-channels-in-discord"
      className="px-4 py-4 max-w-7xl mx-auto leading-7 "
    >
      <h2 className="text-2xl font-medium mb-4">
        {t("guidelines:topic-specific-channels-in-discord.title")}
      </h2>
      <p>{t("guidelines:topic-specific-channels-in-discord.text.line1")}</p>
      <Trans i18nKey="guidelines:topic-specific-channels-in-discord.text.line2">
        <code />
      </Trans>
      <ul className="list-disc list-inside my-4 ml-4">
        <li>
          <code>#support</code>
        </li>
        <li>
          <code>#feature-suggestions</code>
        </li>
      </ul>
    </section>
    <section
      id="support-channels"
      className="px-4 py-4 max-w-7xl mx-auto leading-7 "
    >
      <h2 className="text-2xl font-medium mb-4">
        {t("guidelines:support-channels.title")}
      </h2>
      <p>
        <Trans i18nKey="guidelines:support-channels.text">
          <code />
        </Trans>
      </p>
      <ol className="list-decimal list-inside my-4 ml-4 space-y-2">
        <li>{t("guidelines:support-channels.list.1")}</li>
        <li>{t("guidelines:support-channels.list.2")}</li>
      </ol>
    </section>
    <section
      id="last-updated"
      className="px-4 py-4 max-w-7xl mx-auto leading-7"
    >
      <h2 className="text-2xl font-medium mb-4">
        {t("community.guidelines.last-updated")} <code>2024-01-25</code>
      </h2>
      <p>
        <Trans
          i18nKey="community.guidelines.license"
          values={{ license: "<0>CC BY-SA 4.0</0>", icons: "<0></0>" }}
        >
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1"
            target="_blank"
            rel="noreferrer"
            className="text-green-800 dark:text-green-300"
          >
            <CCIcon className="ml-2 w-6 align-sub" />
            <BYIcon className="w-6 align-sub" />
            <SAIcon className="w-6 align-sub" />
          </a>
        </Trans>
      </p>
    </section>
  </>
);

export default CommunityGuidelines;
