import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import { Illustration } from "../assets/SVG";
import { useRouter } from "next/router";
import Footer from "../components/footer";

export default function CallToActionWithIllustration() {
  const router = useRouter();
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}>
          Web QR Code Scanner{" "}
          <Text as={"span"} color={"orange.400"}>
            scanning made easy
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Scan QR codes, using this easy to use web application, to simplify the
          scanning process
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            colorScheme={"orange"}
            bg={"orange.400"}
            onClick={() => {
              router.push("/barcode");
            }}
            _hover={{ bg: "orange.500" }}>
            Get started
          </Button>
          <Button rounded={"full"} px={6}>
            Learn more
          </Button>
        </Stack>
        <Flex w={"full"}>
          <Illustration
            height={{ sm: "24rem", lg: "28rem" }}
            mt={{ base: 12, sm: 16 }}
          />
        </Flex>
      </Stack>
      <Footer />
    </Container>
  );
}
