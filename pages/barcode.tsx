/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { QrReader } from "react-qr-reader";
import { useRouter } from "next/router";
import QRCodeInfoModal from "../components/modals/qrcodeInfo";
import {
  useDisclosure,
  useToast,
  Box,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import HeaderText from "../components/headerText";
import Footer from "../components/footer";
const Home: NextPage = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);
  const [data, setData] = useState<string | null | undefined>(undefined);

  const router = useRouter();

  useEffect(() => {
    try {
      if (data?.includes("https")) {
        router.push(data);
      } else if (data && !data?.includes("https")) {
        onOpen();
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Error Scanning QR Code",
        description: error as string,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [data]);

  return (
    <>
      <Head>
        <title>Web QR Code Scanner </title>
        <meta
          name="description"
          content="Culteva Tastings Mobile is a qr code mobile application"
        />
        <link rel="icon" href="/ProvarTastings.png" />
      </Head>
      <HeaderText />

      <>
        <Center py={3}>
          <Box
            role={"group"}
            p={9}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}>
            <QrReader
              onResult={(result, error) => {
                if (!!result) {
                  // @ts-ignore
                  setData(result?.text);
                }

                if (error?.message !== undefined) {
                  console.log(error);
                  toast({
                    title: "Error Scanning QR Code",
                    description: error.message,
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                  });
                }
              }}
              containerStyle={{
                innerWidth: "30%",
              }}
              constraints={{ facingMode: "environment" }}
            />
          </Box>
        </Center>
      </>
      <Footer />
      <QRCodeInfoModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        finalRef={finalRef}
        data={data as string | number}
      />
    </>
  );
};

export default Home;
