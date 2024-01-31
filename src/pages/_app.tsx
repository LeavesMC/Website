import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "misans/lib/Normal/MiSans-Regular.min.css";

import "windi.css";
import "@/styles/globals.css";

import type { AppProps } from "next/app";

import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import i18n from "i18n";
i18n;

const MyApp = ({ Component, pageProps, router }: AppProps) => (
  <>
    <script
      async
      type="text/javascript"
      src="https://cdn.jsdelivr.net/gh/sf-yuzifu/eat-fish-together@master/main.js"
    />
    <NavBar component={Component} />
    <main className="flex-1">
      <Component {...pageProps} />
    </main>
    {router.route !== "/downloads/all" && <Footer />}
  </>
);

export default MyApp;
