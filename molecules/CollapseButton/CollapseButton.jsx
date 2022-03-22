import { Flex, Image, Text } from '@chakra-ui/react';
import ArrowRight from 'public/arrowRight.png';

const CollapseButton = ({ text, idAnalyticsName, url, last }) => {
  const isEmailLink = url.match(/.*@.*/g);
  const href = isEmailLink ? `mailto:${url}` : url;

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      p="0 25px"
      h="58px"
      cursor="pointer"
      borderBottom={last ? 'unset' : '2px'}
      id-analytics-group="external-page"
      id-analytics-name={idAnalyticsName}
      href={href}
      as="a"
      target="_blank"
      rel="noopener noreferrer"
      w="100%"
      fontWeight="600">
      <Text fontSize="14px" textAlign="left" variant="normal">
        {text}
      </Text>
      <Text fontSize="20px" textAlign="right">
        <Image src={ArrowRight} />
      </Text>
    </Flex>
  );
};

export default CollapseButton;
