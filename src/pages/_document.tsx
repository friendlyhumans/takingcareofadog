/* eslint-disable */

import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script
            data-ad-client="ca-pub-2187261285282853"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
          <script>
          // @ts-ignore
          !function(t,h,e,j,s,n){t.hj=t.hj||function(){(t.hj.q=t.hj.q||[]).push(arguments)},t._hjSettings={hjid:2187656,hjsv:6},s=h.getElementsByTagName("head")[0],(n=h.createElement("script")).async=1,n.src="https://static.hotjar.com/c/hotjar-"+t._hjSettings.hjid+".js?sv="+t._hjSettings.hjsv,s.appendChild(n)}(window,document);
          </script>
        </body>
      </Html>
    );
  }
}
