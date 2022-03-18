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
import SlideSection from 'organisms/SlideSection';
import getGettingStarted from 'helpers/buildHomeData/getGettingStarted';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const ThumbsUpButton = dynamic(() => import('atoms/ThumbsUpButton'), { ssr: false });

const thumbsUpAction = actions.home;

const Home = ({ data, pageIndex }) => {
  const homeData = get(data, `mainpage[${pageIndex}].fields`);

  const { collapseLinks, socialLinks, links, intro, registration, win } = buildHomeData(
    data,
    pageIndex
  );

  const { headerTitle, headerDescription, headerImage, headerButton, pageLogo } =
    getHeader(homeData);

  const { gettingStarted } = getGettingStarted(homeData, data?.videos);

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

      <Box pt={['21px', '50px']} pb={['27px', '50px']}>
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

      <SlideSection {...gettingStarted} cardAnalyticsName="GettingStarted" />

      <Box pt={['34px', '60px']} pb={['53px', '60px']}>
        <Center flexDir="column">
          <Image src={registration.icon} width="84.5px" />

          <Text maxW={['362px', '400px']} mb="5px" my="25px" textAlign="center" variant="title">
            {registration.title}
          </Text>

          <Text maxW="230px" mb="25px" textAlign="center" variant="text">
            {registration.description}
          </Text>

          <Button
            as={Link}
            target="_blank"
            variant="normal"
            minW="232px"
            h="54px"
            rel="noopener noreferrer"
            href={registration.button.url}>
            {registration.button.text}
          </Button>
        </Center>
      </Box>

      <Box bgColor="#EBF0F6" pb={['34px', '50px']} pt={['39px', '50px']} px="22px">
        <Center flexDir="column">
          <Text maxW={['296px', '360px']} textAlign="center" variant="title">
            {win.title}
          </Text>

          <Text my="20px" textAlign="center" variant="text">
            {win.subTitle}
          </Text>

          <Image src={win.image} maxW="100%" mb="23px" />

          <Button
            as={Link}
            target="_blank"
            variant="normal"
            minW="232px"
            h="54px"
            rel="noopener noreferrer"
            href={win.button.url}>
            <Box mr="12px">
              <FontAwesomeIcon icon={faInstagram} transform="grow-15" />
            </Box>
            {win.button.text}
          </Button>
        </Center>
      </Box>

      <Box p="30px 20px">
        <SocialSection social={socialLinks} />

        <Flex flexDir="column" mt="31px">
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
      </Box>

      <Text mb="22px" mt="10px" variant="title" fontSize={['24px', '26px']}>
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
