import { Box } from '@chakra-ui/react';

const Overlay = ({ show, onClick }) => {
  if (!show) {
    return null;
  }

  return (
    <Box
      bgColor="rgba(0,0,0,0.5)"
      h="calc(100vh)"
      zIndex="1"
      w="100%"
      pos="fixed"
      inset="0"
      bottom="50px"
      onClick={onClick}
    />
  );
};

export default Overlay;
