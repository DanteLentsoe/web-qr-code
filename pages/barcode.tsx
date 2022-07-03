/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { QrReader } from "react-qr-reader";
import { useRouter } from "next/router";
import QRCodeInfoModal from "../components/modals/qrcodeInfo";
import Lottie from "react-lottie";
import * as animationData from "../assets/loader.json";
import {
  useDisclosure,
  useToast,
  Box,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import HeaderText from "../components/headerText";
import Footer from "../components/footer";
import NavigationBar from "../components/navigationBar";
const Home: NextPage = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);
  const [data, setData] = useState<string | null | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    try {
      if (data?.includes("https")) {
        setLoading(true);
        router.push(data);
      } else if (data && !data?.includes("https")) {
        setLoading(false);
        onOpen();
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);

      toast({
        title: "Error Scanning QR Code",
        description: error as string,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }

    // setLoading(false);
  }, [data]);

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
            {loading === false ? (
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
                      duration: 3000,
                      isClosable: true,
                    });
                  }
                }}
                containerStyle={{
                  innerWidth: "30%",
                }}
                constraints={{ facingMode: "environment" }}
              />
            ) : (
              <Lottie
                options={defaultOptions}
                height={500}
                width={500}
                isStopped={false}
                isPaused={false}
              />
            )}
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
