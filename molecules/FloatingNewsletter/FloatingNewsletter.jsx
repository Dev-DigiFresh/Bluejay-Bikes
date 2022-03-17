import { Box } from '@chakra-ui/react';
import Newsletter from 'molecules/Newsletter';

const FloatingNewsletter = ({
  title,
  description,
  idAnalyticsName,
  idAnalyticsGroup,
  newsletterAction,
  newsletterId
}) => (
  <Box>
    <Newsletter
      variant="newsletter"
      idAnalyticsName={idAnalyticsName}
      idAnalyticsGroup={idAnalyticsGroup}
      title={title}
      newsletterAction={newsletterAction}
      newsletterId={newsletterId}
      description={description}
    />
  </Box>
);

export default FloatingNewsletter;
