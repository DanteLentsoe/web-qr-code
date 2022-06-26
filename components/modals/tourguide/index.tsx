import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface ITakeTour {
  setIsOpen: Dispatch<SetStateAction<Boolean>>;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  setTourSeen: (active: boolean) => void;
}
const TourGuideModal = ({
  setIsOpen,
  isOpen,
  onOpen,
  onClose,
  setTourSeen,
}: ITakeTour) => {
  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size={"sm"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Take Tour Guide</ModalHeader>
          <hr />
          <ModalCloseButton />
          <ModalBody pb={6}>
            Would you like to see the onboarding of generating QR Codes
          </ModalBody>

          <ModalFooter justifyContent={"space-evenly"}>
            <Button
              color={"white"}
              bg={"teal.600"}
              _hover={{
                bg: "teal.400",
              }}
              mr={3}
              onClick={() => {
                setIsOpen(true);
                setTourSeen(true);
                onClose();
              }}>
              Take Tour
            </Button>
            <Button
              onClick={() => {
                onClose();
                setTourSeen(true);
              }}>
              No, Thanks
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TourGuideModal;
