import React from 'react';
import { Box, Button, Text, useClipboard } from '@chakra-ui/react';

const ClipboardButton = ({ content, variant }) => {
  const { hasCopied, onCopy } = useClipboard(content);

  return (
    <Box position="relative">
      {hasCopied && (
        <Box
          bgColor="#000"
          color="#FFF"
          position="absolute"
          top="0"
          left="50%"
          transform="translateY(-140%) translateX(-50%)"
          padding="5px 8px"
          borderRadius="5px"
          _after={{
            position: 'absolute',
            content: "''",
            width: '0',
            height: '0',
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderTop: '6px solid #000',
            transform: 'translateX(-6px) translateY(5px)'
          }}>
          <Text fontSize="14px">Copied</Text>
        </Box>
      )}
      <Button onClick={onCopy} variant={variant}>
        {content}
      </Button>
    </Box>
  );
};

export default ClipboardButton;
