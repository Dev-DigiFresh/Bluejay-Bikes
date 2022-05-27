const { Box } = require('@chakra-ui/react');

const FloatingChildren = ({ children, ...rest }) => {
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
        pb="25px"
        {...rest}>
        {children}
      </Box>
    </>
  );
};

export default FloatingChildren;
