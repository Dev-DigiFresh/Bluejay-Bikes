const { Box } = require('@chakra-ui/react');

const FloatingChildren = ({ children }) => {
  return (
    <>
      <Box
        pos="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="100%"
        h="100%"
        flexDir="column"
        pt="50px"
        pb="25px">
        {children}
      </Box>
    </>
  );
};

export default FloatingChildren;
