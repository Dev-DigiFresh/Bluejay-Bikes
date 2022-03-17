import { Radio as ChakraRadio } from '@chakra-ui/react';

const Radio = ({ children, ...rest }) => (
  <ChakraRadio
    {...rest}
    _checked={{
      bg: 'brand.main'
    }}>
    {children}
  </ChakraRadio>
);

export default Radio;
