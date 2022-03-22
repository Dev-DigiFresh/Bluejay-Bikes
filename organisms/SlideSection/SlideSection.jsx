import { Box, Flex, Text } from '@chakra-ui/layout';
import { useKeenSlider } from 'keen-slider/react';

import { smallSliderSettings } from 'consts/sliderConfig';
import SliderCard from 'atoms/SliderCard';

const SlideSection = ({ title, videos, cardAnalyticsName = '' }) => {
  const [ref] = useKeenSlider(smallSliderSettings);

  return (
    <Box bgColor="#EBF0F6" py={['25px', '50px']}>
      <Text mx="auto" maxW={['362px', '400px']} mb="25px" textAlign="center" variant="title">
        {title}
      </Text>

      <Flex className="keen-slider" ref={ref} pl="30px" overflow="hidden" position="relative">
        {videos.map(({ img, title, url }, index) => {
          return (
            <SliderCard
              key={index}
              description={title}
              img={img}
              url={url}
              analyticsName={`${cardAnalyticsName}-${index + 1}`}
              analyticsGroup="carousel-0"
            />
          );
        })}
      </Flex>
    </Box>
  );
};

export default SlideSection;
