import { faFacebookF, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Flex } from '@chakra-ui/react';
import SocialIcon from '@digiwill/digifresh.social-icon';

export const icons = {
  facebook: faFacebookF,
  instagram: faInstagram,
  youtube: faYoutube,
  twitter: faTwitter
};

const SocialSection = ({ social }) => (
  <Flex justifyContent="center" mt="30px">
    <Flex justifyContent="space-between" gridGap="20px">
      {social.map(({ name, url }, index) => (
        <SocialIcon
          key={index}
          url={url}
          variant="social"
          idAnalyticsName={`Social-${name}`}
          idAnalyticsGroup="external-page"
          icon={icons[name.toLowerCase()]}
          faProps={{
            transform: 'grow-15'
          }}
        />
      ))}
    </Flex>
  </Flex>
);

export default SocialSection;
