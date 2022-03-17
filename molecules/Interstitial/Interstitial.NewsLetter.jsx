import { Box, Flex } from '@chakra-ui/react';
import Newsletter from 'molecules/Newsletter';

const InterstitialNewsletter = ({ config }) => (
  <Flex justifyContent="flex-end" flexDir="column" pos="relative" height="100vh">
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      flex="1"
      backgroundImage={`url(${config.emailCaptureImg})`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    />

    <Box bgColor="#fff">
      <Newsletter
        slideVersion={true}
        title={config.newsletterData['Title']}
        description={config.newsletterData['Description']}
        idAnalyticsName="Email-Capture-Footer"
        idAnalyticsGroup="email-signup"
        newsletterAction={config.newsletterAction}
        newsletterId={config.newsletterId}
      />
    </Box>
  </Flex>
);

export default InterstitialNewsletter;
