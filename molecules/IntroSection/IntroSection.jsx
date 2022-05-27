import { Flex, Text } from '@chakra-ui/react';
import BikeCard from 'molecules/BikeCard';

const IntroSection = ({ cardsData }) => (
  <Flex bgColor="#EBF0F6" flexDir="column" alignItems="center" p="25px 20px" w="100%">
    <Text variant="title" fontSize="18px">
      Hello Newport
    </Text>
    <Text variant="title" mb="65px">
      WE ARE IN YOUR CITY!
    </Text>
    <Flex justifyContent="space-between" maxW="376px" w="100%">
      {cardsData.map(({ name, description, button, image }) => (
        <BikeCard key={name} title={name} description={description} button={button} image={image} />
      ))}
    </Flex>
  </Flex>
);

export default IntroSection;
