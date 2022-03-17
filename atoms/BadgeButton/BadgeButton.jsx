import { Button } from '@chakra-ui/react';

const BadgeButton = ({ content, onClick, idAnalyticsName, idAnalyticsGroup }) => {
  if (!content) {
    return null;
  }

  return (
    <Button
      variant="badge"
      w="100%"
      display="flex"
      justifyContent="center"
      pl="30px"
      h="54px"
      mb="15px"
      fontWeight="700"
      onClick={onClick}
      id-analytics-name={idAnalyticsName}
      id-analytics-group={idAnalyticsGroup}>
      {content}
    </Button>
  );
};

export default BadgeButton;
