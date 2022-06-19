/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { QrReader } from "react-qr-reader";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useDisclosure } from "@chakra-ui/react";
import QRCodeInfoModal from "../components/modals/qrcodeInfo";
import { useToast } from "@chakra-ui/react";

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
        <title>QR Code Scanner </title>
        <meta
          name="description"
          content="Culteva Tastings Mobile is a qr code mobile application"
        />
        <link rel="icon" href="/ProvarTastings.png" />
      </Head>
      <h1 style={{ fontSize: 24, textAlign: "center" }}>Scan Sample QR Code</h1>

      <>
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
      </>
      <footer className={styles.footer} style={{ bottom: 0, height: 30 }}>
        <a
          href="https://dantelentsoe.com"
          target="_blank"
          rel="noopener noreferrer">
          Developed By{" "}
          <span>
            {/* <Image src="" alt="Dante Lentsoe Website" width={79} height={18} /> */}
            {"   "}
            Dante Lentsoe
          </span>
        </a>
      </footer>
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
