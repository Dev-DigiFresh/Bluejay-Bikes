import { Box, Image } from '@chakra-ui/react';

const RoundedIcon = ({ logo }) => (
  <Box
    w="82px"
    h="82px"
    bgColor="#fff"
    borderRadius="50%"
    display="flex"
    alignItems="center"
    justifyContent="center"
    p="5px"
    border="2px solid"
    borderColor="brand.main"
    overflow="hidden">
    <Image src={logo} w="100%" maxW="72px" />
  </Box>
);

export default RoundedIcon;
