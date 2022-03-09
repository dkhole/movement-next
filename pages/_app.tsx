import "../styles/reset.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function MyApp({ Component, pageProps }: AppProps) {
  gsap.registerPlugin(ScrollTrigger);
  return (
    <>
      <Head>
        <title>Movement-Mechanics</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
