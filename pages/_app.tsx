import type { AppProps } from "next/app";
import { MoralisProvider } from "react-moralis";
import { useEffect } from "react";
import "tailwindcss/tailwind.css";
import "../src/styles/additional-styles/range-slider.scss";
import "../src/styles/additional-styles/theme.scss";
import "../src/styles/additional-styles/toggle-switch.scss";
import "../src/styles/additional-styles/utility-patterns.scss";
import AOS from "aos";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  // useEffect(() => {
  //   document.querySelector("html").style.scrollBehavior = "auto";
  //   window.scroll({ top: 0 });
  //   document.querySelector("html").style.scrollBehavior = "";
  //   focusHandling("outline");
  // }, [location.pathname]);

  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID!}
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL!}
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
