/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
// import QrReader from "react-web-qr-reader";
import { QrReader } from "react-qr-reader";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { IQRData } from "../contants/types";
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
      }
    } catch (error) {
      console.log(error);
    }
  }, [data]);

  // console.log("REST ", data?.text && !data?.text.includes("https"));
  console.log("REST ", data);
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

            if (data?.includes("https")) {
              router.push(data);
            } else if (data && !data?.includes("https")) {
              onOpen();
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

        <p style={{ marginTop: 0 }}>{data}</p>
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
