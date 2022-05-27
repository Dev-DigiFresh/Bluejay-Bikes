import { Box, Button, Center, Flex, Text } from '@chakra-ui/react';

import get from 'lodash.get';
import dynamic from 'next/dynamic';

import Footer from 'digifresh.default-footer';

import { useContext } from 'react';
import { ThumbButtonContext, actions } from 'contexts/ThumbButtonContext';
import { getHeader, buildNewportData } from 'helpers/buildHomeData';
import NewportHeader from 'organisms/Header/NewportHeader';
import SocialSection from 'organisms/SocialSection';
import CollapseButton from 'molecules/CollapseButton';
import IntroSection from 'molecules/IntroSection';
import NewportVideo from 'atoms/NewportVideo';

const ThumbsUpButton = dynamic(() => import('atoms/ThumbsUpButton'), { ssr: false });

const thumbsUpAction = actions.home;

const Home = ({ data, pageIndex }) => {
  const homeData = get(data, `mainpage[${pageIndex}].fields`);
  const { socialLinks, collapseLinks, links, cardsData, videoData } = buildNewportData(
    data,
    pageIndex
  );

  const { headerTitle, headerDescription, headerImage, headerButton, pageLogo } =
    getHeader(homeData);

  const { disabled, handleThumbClick } = useContext(ThumbButtonContext);
  const thumbClick = () => handleThumbClick('home');

  console.log(videoData);

  const gtmCode =
    process.env.NODE_ENV === 'development' ? 'XX-FAKE' : get(data, 'gtm[0].fields.GTM');

  return (
    <Box maxW="600px" m="0 auto" textAlign="center">
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src=>"https://www.googletagmanager.com/ns.html?id=${gtmCode}"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }}></noscript>

      <NewportHeader
        title={headerTitle}
        background={headerImage}
        logo={pageLogo}
        officialSite={links?.ourWebsite}
        description={headerDescription}
        buttonContent={headerButton}
      />

      <IntroSection cardsData={cardsData} />

      <Box p="15px 30px">
        <Text variant="title" mb="14px" fontSize="18px">
          {videoData.title}
        </Text>
        <NewportVideo url={videoData.url} />
      </Box>

      <Box p="30px 20px">
        <Flex flexDir="column" mb="30px">
          <Box border="2px solid #234A5E" borderRadius="10px">
            {collapseLinks.map((item, index) => {
              // TODO: export it
              const last = index === collapseLinks.length - 1;
              const analyticsName = item['Name'].replaceAll(' ', '-');
              return (
                <CollapseButton
                  url={item['URL']}
                  text={item['Name']}
                  key={index}
                  last={last}
                  idAnalyticsName={analyticsName}
                />
              );
            })}
          </Box>
        </Flex>

        <SocialSection social={socialLinks} />
      </Box>

      <Text mb="22px" mt="10px" variant="title" fontSize={['24px', '26px']}>
        {homeData['Thumbs Up'] ?? 'Was this helpful?'}
      </Text>
      <Center mb="36px">
        <Button
          variant="normal"
          w="158px"
          h="60px"
          disabled={disabled[thumbsUpAction]}
          id="thumbsup-button-home"
          onClick={thumbClick}
          id-analytics-name="Helpful-Page"
          id-analytics-group="feedback">
          <ThumbsUpButton target="#thumbsup-button-home" w="100%" />
        </Button>
      </Center>

      <Footer />
    </Box>
  );
};

export default Home;
