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

const QRCodeInfoModal = ({ isOpen, onClose, finalRef, data }: IQRCodeModal) => {
  return (
    <>
      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={"sm"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader style={{ textAlign: "center" }}>
            QR Code Info
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody style={{ padding: 12, textAlign: "center", fontSize: 13 }}>
            {data}
          </ModalBody>

          <ModalFooter>
            <Button
              rounded={"full"}
              px={6}
              colorScheme={"teal"}
              bg={"teal.600"}
              onClick={onClose}>
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default QRCodeInfoModal;
