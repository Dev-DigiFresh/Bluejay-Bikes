const { Box } = require('@chakra-ui/react');

const BgImgDiv = ({ children, image, ...rest }) => (
  <Box
    h="280px"
    pos="relative"
    overflow="hidden"
    bgImage={image}
    bgSize="cover"
    bgRepeat="no-repeat"
    bgPos="center"
    {...rest}>
    {children}
  </Box>
);

export default BgImgDiv;
