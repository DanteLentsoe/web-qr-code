import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import PageNotFoundSVG from "../assets/SVG/404SVG";
import Footer from "../components/footer";
import Head from "next/head";

export default function NotFound() {
  const route = useRouter();
  return (
    <>
      <Head>
        <title>Web QR Code Scanner | Not Found </title>
        <meta
          name="description"
          content="Web Code Scanner is a qr code mobile application"
        />
        <link rel="icon" href="/" />
      </Head>
      <Box textAlign="center" py={10} px={6}>
        <Flex w={"full"} style={{ justifyContent: "center" }}>
          <PageNotFoundSVG />
        </Flex>

        <Text color={"gray.500"} mb={6} mt={6}>
          The page you are looking for does not seem to exist
        </Text>

        <Button
          colorScheme="teal"
          bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
          color="white"
          onClick={() => {
            route.push("/");
          }}
          variant="solid">
          Go to Home
        </Button>
      </Box>
      <Footer />
    </>
  );
}
