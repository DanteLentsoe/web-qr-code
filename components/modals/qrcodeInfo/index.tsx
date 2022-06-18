import {
  ModalBody,
  ModalHeader,
  ModalOverlay,
  Modal,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
  Box,
  Button,
} from "@chakra-ui/react";

interface IQRCodeModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  finalRef: any;
  data: string | number;
}

const QRCodeInfoModal = ({
  isOpen,
  onOpen,
  onClose,
  finalRef,
  data,
}: IQRCodeModal) => {
  return (
    <>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{data}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default QRCodeInfoModal;
