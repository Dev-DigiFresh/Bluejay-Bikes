import Head from 'next/head';
import get from 'lodash.get';
import useFetch from 'use-http';
import dynamic from 'next/dynamic';
import HomeTemplate from 'templates/Newport-template';
import { Box } from '@chakra-ui/react';

const PAGE_INDEX = '1';

const Loading = dynamic(() => import('molecules/Loading'), {
  ssr: false
});

export default function Home({ homeData }) {
  const gtmCode =
    process.env.NODE_ENV === 'development' ? 'XX-FAKE' : get(homeData, 'gtm[0].fields.GTM');

  const metadata = get(homeData, `metadata[${PAGE_INDEX}].fields`);

  const metaTitle = metadata['Page Title'];
  const metaDescription = metadata['Page Description'];
  const metaCanonical = metadata['Canonical URL'];
  const metaImage = metadata?.['Share Image']?.[0].url;

  const { loading, error, data } = useFetch(process.env.NEXT_PUBLIC_API_URL_NEWPORT, {}, []);

  error && console.error('Error getting api data', error);

  return (
    <Box maxW="800px" mx="auto">
      {loading && <Loading />}

      <Head>
        <title>{metaTitle}</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function (w, d, s, l, i) { w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' }); var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f); })(window, document, 'script', 'dataLayer', '${gtmCode}');`
          }}></script>
        <meta property="og:title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index,follow" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={metaDescription} />
        <meta name="image" property="og:image" content={metaImage} />
        <meta property="og:image" content={metaImage} />
        <meta name="twitter:image" content={metaImage} />
        <link rel="canonical" href={metaCanonical} />
        <meta property="og:url" content={metaCanonical} />
      </Head>

      {data && <HomeTemplate data={data} pageIndex={PAGE_INDEX} />}
    </Box>
  );
}

export async function getStaticProps() {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL_NEWPORT);

  const homeData = await response.json();

  return {
    props: {
      homeData
    }
  };
}
