import { Box, Button, Center, Flex, Image, Link, Text } from '@chakra-ui/react';

import get from 'lodash.get';
import dynamic from 'next/dynamic';

import Footer from '@digiwill/digifresh.footer';

import SocialSection from 'organisms/SocialSection';
import CollapseButton from 'molecules/CollapseButton';
import { useContext } from 'react';
import { ThumbButtonContext, actions } from 'contexts/ThumbButtonContext';
import buildHomeData from 'helpers/buildHomeData';
import { getHeader } from 'helpers/buildHomeData';
import Header from 'organisms/Header';

const ThumbsUpButton = dynamic(() => import('atoms/ThumbsUpButton'), { ssr: false });

const thumbsUpAction = actions.home;

const Home = ({ data, pageIndex }) => {
  const homeData = get(data, `mainpage[${pageIndex}].fields`);

  const { collapseLinks, socialLinks, links, intro } = buildHomeData(data, pageIndex);

  const { headerTitle, headerDescription, headerImage, headerButton, pageLogo } =
    getHeader(homeData);

  const { disabled, handleThumbClick } = useContext(ThumbButtonContext);
  const thumbClick = () => handleThumbClick('home');

  const gtmCode =
    process.env.NODE_ENV === 'development' ? 'XX-FAKE' : get(data, 'gtm[0].fields.GTM');

  return (
    <Box maxW="600px" m="0 auto" textAlign="center">
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src=>"https://www.googletagmanager.com/ns.html?id=${gtmCode}"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }}></noscript>

      <Header
        title={headerTitle}
        background={headerImage}
        logo={pageLogo}
        officialSite={links.officialSite}
        description={headerDescription}
        buttonContent={headerButton}
      />

      <Box pt="21px" pb="27px">
        <Center flexDir="column">
          <Text maxW={['362px', '400px']} mb="5px" textAlign="center" variant="title">
            {intro.title}
          </Text>

          <Text maxW="230px" mb="14px" textAlign="center" variant="text">
            {intro.subtitle}
          </Text>

          <Link href={intro.videoUrl} target="_blank" rel="noopener noreferrer">
            <Image maxW="189px" w="100%" h="auto" src={intro.videoImg} />
          </Link>
        </Center>
      </Box>

      <Box p="30px 20px">
        <Flex flexDir="column">
          <Box border="2px solid #000" borderRadius="10px">
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

      <Text mb="22px" mt="10px" variant="title">
        {homeData['Thumbs Up']}
      </Text>
      <Center mb="36px">
        <Button
          variant={disabled[thumbsUpAction] ? 'disabled' : 'normal'}
          w="158px"
          h="60px"
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
