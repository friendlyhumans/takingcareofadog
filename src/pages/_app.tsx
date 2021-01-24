import { useState } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { Footer } from "components";
import theme from "styles/theme";

import { GlobalStyles } from "styles/global";

function App({ Component, pageProps }: AppProps) {
  const [mode, setThemeMode] = useState("dark");
  const [isBanner, setBanner] = useState(true);

  const toggleThemeMode = () => {
    setThemeMode(mode === "light" ? "dark" : "light");
  };

  return (
    <>
      <Head>
        <title>Taking care of a dog. 🐶</title>
        <link rel="shortcut icon" href="/img/icon.png" />
        <link rel="apple-touch-icon" href="/img/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Your guide to pet and animal care." />
      </Head>
      <ThemeProvider theme={theme[mode]}>
        <GlobalStyles />
        {isBanner && (
          <div className="banner">
            <div />
            <p className="banner-text">
              ✨ Hooray, there&apos;s alpha testing. ✨
            </p>
            <div className="close" onClick={() => setBanner(false)}>
              x
            </div>
          </div>
        )}
        <Component {...pageProps} toggleThemeMode={toggleThemeMode} />
      </ThemeProvider>
      <Footer />
    </>
  );
}

export default App;
