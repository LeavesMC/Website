import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

import "windi.css";
import "@/styles/globals.css";

import type { AppProps } from "next/app";

import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";

const MyApp = ({ Component, pageProps, router }: AppProps) => (
  <>
    <script async src="https://umami.skinow.skin/script.js"
      data-website-id="2b1cd1c4-1779-4bfa-841c-7106cb7733f8"
      data-do-not-track="true"
      data-domains="leavesmc.top"
    ></script>
    <script async src="https://umami.skinow.skin/script.js"
      data-website-id="09b01113-976e-444b-b10e-b3550f5184a9"
      data-do-not-track="true"
      data-domains="www.leavesmc.top"
    ></script>
    <NavBar component={Component} />
    <main className="flex-1">
      <Component {...pageProps} />
    </main>
    {router.route !== "/downloads/all" && <Footer />}
  </>
);

export default MyApp;
