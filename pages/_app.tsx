import type { AppProps } from "next/app";
import { MoralisProvider } from "react-moralis";
import "../src/styles/global.css";
import "tailwindcss/tailwind.css";
import "../src/styles/additional-styles/range-slider.scss";
import "../src/styles/additional-styles/theme.scss";
import "../src/styles/additional-styles/toggle-switch.scss";
import "../src/styles/additional-styles/utility-patterns.scss";

function MyApp({ Component, pageProps }: AppProps) {
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
