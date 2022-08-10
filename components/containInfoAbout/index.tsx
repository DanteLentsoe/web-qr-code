import { Container, Stack, Flex, Box, Heading, Text } from "@chakra-ui/react";
import ContentSVG from "../../assets/SVG/ContentLayoutSVG";

const ContentQRCode = () => {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}>
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
              How Does it Work
            </Text>
            <br />
            <Text
              as={"span"}
              color={"teal.600"}
              lineHeight={1.1}
              fontWeight={"500"}
              fontSize={24}>
              How to use QR Codes
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Ideally, you can simply use this web application 😅. Given that some
            smartphones do not have native support for QR Code scanning. On
            Samsung devices there is Bixby (AI assistant) and the iOS 11
            operating system for Apple (Accessing the native camera and simply
            scanning QR Codes). Alternatively, you can utilize Play Store/App
            Store QR code Scanning Applications, although advertisements and
            background trackers may be present.
          </Text>
        </Stack>
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
            <ContentSVG />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

export default ContentQRCode;
