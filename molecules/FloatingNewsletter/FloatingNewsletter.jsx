import { Box, useOutsideClick } from '@chakra-ui/react';
import Newsletter from 'molecules/Newsletter';
import { useRef } from 'react';

const FloatingNewsletter = ({ idAnalyticsName, idAnalyticsGroup, newsletterData, onClose }) => {
  const ref = useRef();
  useOutsideClick({
    ref,
    handler: onClose
  });

  return (
    <Box ref={ref}>
      <Newsletter
        variant="newsletter"
        idAnalyticsName={idAnalyticsName}
        idAnalyticsGroup={idAnalyticsGroup}
        newsletterData={newsletterData}
      />
    </Box>
  );
};

export default FloatingNewsletter;
