import "../styles/reset.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
	gsap.registerPlugin(ScrollTrigger);
	return (
		<>
			<Head>
				<title>Movement Mechanics</title>
				<meta name="description" content="Movement Mechanics is a physiotherapy and chiropractic clinic based in Newington." />
				<link rel="canonical" href="http://www.movement-mechanics.com.au/" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
