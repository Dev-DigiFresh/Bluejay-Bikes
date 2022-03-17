import { Box, Button, Center, Flex, Image, Text } from '@chakra-ui/react';

import get from 'lodash.get';
import dynamic from 'next/dynamic';

import Footer from 'digifresh.footer';

import SocialSection from 'organisms/SocialSection';
import CollapseButton from 'molecules/CollapseButton';
import { useContext } from 'react';
import { ThumbButtonContext, actions } from 'contexts/ThumbButtonContext';
import buildHomeData from 'helpers/buildHomeData';
import { getHeader } from 'helpers/buildHomeData';
import HeaderContainer from 'organisms/HeaderContainer';
import BgImgDiv from 'atoms/BgImgDiv';

const ThumbsUpButton = dynamic(() => import('atoms/ThumbsUpButton'), { ssr: false });

const thumbsUpAction = actions.home;

const Home = ({ data, pageIndex }) => {
  const homeData = get(data, `mainpage[${pageIndex}].fields`);

  const {
    pageLogo,
    collapseLinks,
    socialLinks,
    companyTitle,
    videoTitle,
    videoUrl,
    links,
    companies,
    newsletterData,
    introImage,
    introTitle,
    introDescription
  } = buildHomeData(data, pageIndex);

  const { headerTitle, headerDescription, headerImage, headerButton } = getHeader(homeData);

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

      <HeaderContainer
        title={headerTitle}
        bgImage={headerImage}
        logo={pageLogo}
        officialSite={links.officialSite}
        description={headerDescription}
        buttonContent={headerButton}
        newsletterData={newsletterData}
      />

      <BgImgDiv image={introImage} py="37px">
        <Center h="100%" flexDir="column" color="#fff">
          <Text maxW={['295px', '340px']} mb="18px" textAlign="center" variant="subtitle">
            {introTitle}
          </Text>
          <Text maxW="350px" textAlign="center" variant="text">
            {introDescription}
          </Text>
        </Center>
      </BgImgDiv>

      <Box bgColor="#E0E0DB" py={['27px', '40px']} px="24px">
        <Center>
          <Text mb={['24px', '30px']} variant="subtitle">
            {companyTitle}
          </Text>
        </Center>

        <Flex flexWrap="wrap" gap="15px" justifyContent="space-between">
          {companies.map(({ img, url, lastItem }, index) => (
            <Box w="calc(50% - 8px)" key={index}>
              {img && (
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <Image src={img} borderRadius="simple" />
                </a>
              )}
              {lastItem && <Box bgColor="#fff" opacity="0.4" borderRadius="simple" h="100%" />}
            </Box>
          ))}
        </Flex>
      </Box>

      <Box py="30px">
        <Text mb={['14px', '20px']} variant="subtitle">
          {videoTitle}
        </Text>
        <Box h={['210px', '310px']} overflow="hidden" borderRadius="simple" mx="20px">
          <iframe
            id-analytics-name="YouTube-Video"
            id-analytics-group="youtube-video"
            width="100%"
            height="100%"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </Box>
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

      <Footer buttonLink="https://www.digifresh.io/" />
    </Box>
  );
};

export default Home;
