import { Button, Flex, Text, useDisclosure } from '@chakra-ui/react';
import ThumbsUpButton from 'atoms/ThumbsUpButton';
import { ThumbButtonContext, actions } from 'contexts/ThumbButtonContext';
import { useContext } from 'react';

const thumbsUpAction = actions.interstitial;

const buttonTextStyle = {
  '.remove-text': {
    transition: 'all .2s ease',
    width: 0,
    overflow: 'hidden'
  }
};

const InterstitialSurvey = ({ data, close }) => {
  const { disabled, handleThumbClick } = useContext(ThumbButtonContext);

  const { onOpen: onAnimate, isOpen: isAnimated } = useDisclosure();
  const thumbsUpClick = () => {
    onAnimate();

    setTimeout(() => handleThumbClick(thumbsUpAction), 1000);
  };

  return (
    <Flex
      bgColor="#fff"
      flexDir="column"
      py="27px"
      px="20px"
      boxShadow="0px -4px 10px rgba(0, 0, 0, 0.1)">
      <Button
        id="thumbsup-button-slider"
        variant={disabled[thumbsUpAction] ? 'sliderDisabled' : 'slider'}
        h="55px"
        mb="13px"
        onClick={thumbsUpClick}
        pos="relative"
        sx={buttonTextStyle}>
        <Text
          className={(isAnimated || disabled[thumbsUpAction]) && 'remove-text'}
          w="100%"
          id-analytics-name="Helpful-Storyboard"
          id-analytics-group="feedback">
          {data.btn1Text}
        </Text>
        <ThumbsUpButton
          target="#thumbsup-button-slider"
          pos="absolute"
          right={isAnimated || disabled[thumbsUpAction] ? 'calc(50% - 20px)' : '25px'}
        />
      </Button>

      <Button
        onClick={close}
        bgColor="brand.main"
        variant="slider"
        h="55px"
        id-analytics-name="Learn-More"
        id-analytics-group="internal-page">
        {data.btn2Text}
      </Button>
    </Flex>
  );
};

export default InterstitialSurvey;
