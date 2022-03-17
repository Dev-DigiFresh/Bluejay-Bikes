import { Center, Flex } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import { BarLoader } from 'react-spinners';
import { loading as loadingColor } from 'theme/colors';

import poweredByDigifreshImg from './digifresh.png';

const Loading = () => (
  <Flex
    justifyContent="flex-end"
    flexDir="column"
    pos="relative"
    height={window.visualViewport.height}
    w="100%">
    <Center flexDir="column" mb="50px">
      <BarLoader color={loadingColor} />
      <Image src={poweredByDigifreshImg} maxW="102px" mt="30px" />
    </Center>
  </Flex>
);

export default Loading;
