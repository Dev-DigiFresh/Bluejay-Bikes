import Head from 'next/head';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';

import theme from 'theme';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ThumbButtonProvider } from 'contexts/ThumbButtonContext';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="/fonts/stylesheet.css" rel="stylesheet" />

        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.webp" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>

      <ChakraProvider theme={theme}>
        <CSSReset />
        <ThumbButtonProvider>
          <Component {...pageProps} />
        </ThumbButtonProvider>
      </ChakraProvider>

      <script
        type="text/javascript"
        charSet="UTF-8"
        src="//cdn.cookie-script.com/s/ed84446b6fb8937dc46ac3c3289c55fa.js"></script>
    </>
  );
}

export default App;
