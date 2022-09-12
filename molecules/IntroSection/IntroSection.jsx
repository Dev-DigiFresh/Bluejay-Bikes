import { Flex, Text } from '@chakra-ui/react';
import BikeCard from 'molecules/BikeCard';

const IntroSection = ({
  cardsData,
  introSubtitle = 'Hello Newport',
  introMainTitle = 'WE ARE IN YOUR CITY!',
  onOpenNewsletter
}) => (
  <Flex bgColor="#EBF0F6" flexDir="column" alignItems="center" p="25px 20px" w="100%">
    <Text variant="title" fontSize="18px">
      {introSubtitle}
    </Text>
    <Text variant="title" mb="65px">
      {introMainTitle}
    </Text>
    <Flex justifyContent="center" gap="10px" w="100%">
      {cardsData.map(({ name, description, button, image }) => (
        <BikeCard
          key={name}
          title={name}
          description={description}
          button={button}
          image={image}
          onOpenNewsletter={onOpenNewsletter}
        />
      ))}
    </Flex>
  </Flex>
);

export default IntroSection;
