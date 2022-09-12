import { Center, Text } from '@chakra-ui/react';
import ClipboardButton from 'atoms/ClipboardButton';

const Newsletter = ({ newsletterData, idAnalyticsName, idAnalyticsGroup }) => {
  const { title, description, email } = newsletterData;

  return (
    <Center
      p={['60px', 'auto']}
      color="#fff"
      id-analytics-name={idAnalyticsName}
      id-analytics-group={idAnalyticsGroup}
      flexDirection="column">
      <Text variant="newsletter.title">{title}</Text>
      <Text variant="newsletter.description">{description}</Text>
      <ClipboardButton variant="newsletter.button" content={email} />
    </Center>
  );
};

export default Newsletter;
