import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Stack,
} from "@chakra-ui/react";

const HeaderText = () => {
  return (
    <Center py={3}>
      <Box
        role={"group"}
        p={6}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}>
        <Stack align={"center"}>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            Scan QR Code
          </Heading>
        </Stack>
      </Box>
    </Center>
  );
};

export default HeaderText;
