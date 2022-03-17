import React from 'react';
import {
  Box,
  ModalCloseButton,
  ModalContent,
  Modal as ChakraModal,
  ModalOverlay
} from '@chakra-ui/react';

const Modal = ({
  children,
  onClose,
  isOpen,
  disableCloseButton,
  bgColor = '#fff',
  size = 'full'
}) => {
  return (
    <>
      <ChakraModal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        blockScrollOnMount={true}
        motionPreset="slideInBottom"
        size={size}>
        <ModalOverlay />
        <ModalContent borderRadius="simple" overflow="hidden">
          <Box pt="80px" bgColor={bgColor} zIndex="20" w="100%" maxW="600px" px="20px" m="auto">
            {!disableCloseButton && (
              <ModalCloseButton top="25px" ml="auto" mb="30px" fontSize="20px" />
            )}
            {children}
          </Box>
        </ModalContent>
      </ChakraModal>
    </>
  );
};

export default Modal;
