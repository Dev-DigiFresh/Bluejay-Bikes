import { Box, Button, Image, Text } from '@chakra-ui/react';
const popUp = "LET'S GO";

const BikeCard = ({ title, description, button, image, onOpenNewsletter }) => {
  const buttonProps =
    button.text === popUp ? { onClick: onOpenNewsletter } : { href: button.link, target: '_blank' };

  return (
    <Box w="183px" h="215px" bg="#fff" pos="relative" pt="45px" pb="21px">
      <Image
        src={image}
        w="144px"
        h="79px"
        pos="absolute"
        left="50%"
        top="0"
        transform="translate(-50%, -50px)"
      />
      <Text variant="title" fontSize="18px">
        {title}
      </Text>
      <Text variant="text" fontSize="14px" lineHeight="18.3px" mb="27px">
        {description}
      </Text>
      <Button as="a" variant="normal" width="140px" height="54px" cursor="pointer" {...buttonProps}>
        {button.text}
      </Button>
    </Box>
  );
};

export default BikeCard;
