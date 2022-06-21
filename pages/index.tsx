import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import Head from "next/head";
import HomePage from "../assets/SVG/homePage";
import { useRouter } from "next/router";
import Footer from "../components/footer";
import NavigationBar from "../components/navigationBar";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Web QR Code Scanner </title>
        <meta
          name="description"
          content="Web Code Scanner is a qr code mobile application"
        />
        <link rel="icon" href="/" />
      </Head>
      <NavigationBar />
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
            <Text as={"span"} color={"teal.600"}>
              scanning made easy
            </Text>
          </Heading>
          <Text color={"gray.500"} maxW={"3xl"}>
            Scan QR codes, using this easy to use web application, to simplify
            the scanning process
          </Text>
          <Stack spacing={6} direction={"row"}>
            <Button
              rounded={"full"}
              px={6}
              colorScheme={"teal"}
              bg={"teal.600"}
              onClick={() => {
                router.push("/barcode");
              }}
              _hover={{ bg: "teal.500" }}>
              Get started
            </Button>
            <Button
              rounded={"full"}
              px={6}
              onClick={() => {
                router.push("/learnmore");
              }}>
              Learn more
            </Button>
          </Stack>
          <Flex w={"full"} style={{ justifyContent: "center" }}>
            <HomePage />
          </Flex>
        </Stack>
        <Footer />
      </Container>
    </>
  );
}
