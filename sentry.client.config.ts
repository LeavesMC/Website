import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://b3f5f423d5e09dd98e89111cf2fc7277@o4507329535410176.ingest.us.sentry.io/4507329636335616",
  tracesSampleRate: 1,
  debug: false,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  integrations: [
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
});
