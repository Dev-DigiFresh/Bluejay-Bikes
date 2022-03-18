import { Flex, Box, Text, Link, Image } from '@chakra-ui/react';

const maxLength = 25;

const SliderCard = ({ img, analyticsName, analyticsGroup, url, description }) => {
  const truncateTitle =
    description.length > maxLength ? `${description.slice(0, maxLength)}...` : description;

  return (
    <Box
      className="keen-slider__slide"
      id-analytics-name={analyticsName}
      id-analytics-group={analyticsGroup}>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <Flex alignContent="center" flexDirection="column">
          <Box position="relative" width="100%">
            <Image objectFit="cover" h={['136px', '245px']} w="100%" src={img} />
          </Box>

          <Box h="59px" py="10px" px="12px" bgColor="#fff">
            <Text variant="small">{truncateTitle}</Text>
          </Box>
        </Flex>
      </Link>
    </Box>
  );
};

export default SliderCard;
