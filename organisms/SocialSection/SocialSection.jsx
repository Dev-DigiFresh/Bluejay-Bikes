import { faFacebookF, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Center, Flex } from '@chakra-ui/react';
import SocialIcon from '@digiwill/digifresh.social-icon';

export const icons = {
  facebook: faFacebookF,
  instagram: faInstagram,
  youtube: faYoutube,
  twitter: faTwitter
};

const SocialSection = ({ social }) => (
  <Flex justifyContent="center">
    <Flex justifyContent="space-between" gridGap="20px">
      {social.map(({ name, url }, index) => (
        <Center h="60px" w="60px" borderRadius="full" border="2px solid #234A5E" key={index}>
          <SocialIcon
            url={url}
            variant="social"
            idAnalyticsName={`Social-${name}`}
            idAnalyticsGroup="external-page"
            icon={icons[name.toLowerCase()]}
            faProps={{
              transform: 'grow-15'
            }}
          />
        </Center>
      ))}
    </Flex>
  </Flex>
);

export default SocialSection;
