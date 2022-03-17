import { Box, Center, Flex, Image, Text } from '@chakra-ui/react';
import Survey from './Interstitial.Survey';

const Interstitial = ({ data, close, idAnalyticsName }) => {
  const { description, image, title, secondImage } = data;
  const withText = title && description;
  const withImgInside = secondImage;

  return (
    <Flex
      alignContent="flex-end"
      justifyContent="flex-end"
      flexDir="column"
      backgroundImage={image}
      backgroundSize="cover"
      backgroundPosition={['center', 'bottom']}
      backgroundRepeat="no-repeat"
      height={window.visualViewport.height}
      id-analytics-name={idAnalyticsName}
      id-analytics-group="storyboard-1">
      {/* // TODO: create a mapper here */}
      {data.survey ? (
        <Survey data={data.survey} close={close} />
      ) : withText ? (
        <Box
          p="30px"
          bgColor="#fff"
          m="15px 12px"
          borderRadius="simple"
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1);">
          <Text textAlign="center" variant="title">
            {title}
          </Text>

          <Center>
            <Text mt="18px" textAlign="center" variant="text">
              {description}
            </Text>
          </Center>
        </Box>
      ) : withImgInside ? (
        <Flex flexDirection="column" m="auto 12px">
          <Image borderRadius="simple" mb="50px" src={secondImage} />
          <Text maxW="323px" m="auto" textAlign="center" variant="title">
            {title}
          </Text>
        </Flex>
      ) : null}
    </Flex>
  );
};

export default Interstitial;
