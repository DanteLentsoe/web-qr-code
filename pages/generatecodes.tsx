import Head from "next/head";
import React from "react";
import Footer from "../components/footer";
import NavigationBar from "../components/navigationBar";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const Generatecodes = () => {
  const [qrCodeData, setQRCodeData] = useState<undefined | string>();
  const qrCodeHandler = (event: { target: any }) => {
    // event.target.prevent();
    setQRCodeData(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Web QR Code Scanner| Scan Code </title>
        <meta
          name="description"
          content="Web Code Scanner is a qr code mobile application"
        />
        <link rel="icon" href="/" />
      </Head>
      <NavigationBar />

      <Center py={12}>
        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}>
          <Heading
            fontFamily={"body"}
            fontSize={28}
            textAlign="center"
            fontWeight={500}>
            QR Code Data
          </Heading>
          <Box
            rounded={"lg"}
            mt={12}
            pos={"relative"}
            width="100%"
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}>
            <Center>
              <QRCodeSVG
                value={qrCodeData as string}
                allowReorder="yes"
                size={120}
              />
            </Center>
          </Box>
          <Stack pt={2} align={"center"}>
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              fontStyle={"italic"}
              mb={10}>
              QR Code Data, numbers, websites..etc
            </Text>

            <FormControl>
              <FormLabel htmlFor="name"> QR Code Input </FormLabel>
              <Input
                id="name"
                placeholder="QR Code Data  "
                value={qrCodeData}
                onChange={qrCodeHandler}
              />
            </FormControl>

            <Stack direction={"row"} align={"center"}>
              <Text fontWeight={800} fontSize={"xl"}></Text>
              <Text textDecoration={"line-through"} color={"gray.600"}></Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
      <Footer />
    </>
  );
};

export default Generatecodes;
