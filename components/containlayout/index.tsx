import { Container, Stack, Flex, Box, Heading, Text } from "@chakra-ui/react";
import AboutQRSVG from "../../assets/SVG/QRAboutSVG";

const AboutQRCode = () => {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}>
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}>
            {/* SVG Here */}
            <AboutQRSVG />
          </Box>
        </Flex>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={"500"}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "15%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "teal.400",
                zIndex: -1,
              }}>
              QR Codes
            </Text>
            <br />
            <Text
              as={"span"}
              color={"teal.600"}
              lineHeight={1.1}
              fontWeight={"500"}
              fontSize={24}>
              How do QR Codes work
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            “QR” stands for “Quick Response”, which is a reference to the
            instant access to the information hidden in the code (QR Code, the
            white and black grids). The code is a two-dimensional representation
            of the barcode, that is typically made up of black and white pixel
            patterns.
          </Text>
          <Text color={"gray.500"}>
            QR codes can store up to 4296 characters, this ranges from phone
            numbers, website links, and entire paragraphs and files. Thus, the
            QR code is a more advanced and improved version of the Barcode. The
            effectiveness of QR Codes is made possible by Machine Learning
            (Image Processing).
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
};

export default AboutQRCode;
