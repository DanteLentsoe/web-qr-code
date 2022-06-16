/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { QrReader } from "react-qr-reader";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const [data, setData] = useState<string | undefined | null>("No result");

  useEffect(() => {
    if (data?.includes("https")) {
      router.push(data);
    }
  }, [data]);

  return (
    <>
      <Head>
        <title>Culteva Tastings Mobile</title>
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
              setData(result.getText());
            }

            if (!!error) {
              console.info("Error", error);
              console.log("Error", error);
            }
          }}
          constraints={{ facingMode: "user" }}
          containerStyle={{ backgroundColor: "black", height: "100%" }}
        />

        <p style={{ marginTop: 0 }}>{data}</p>
      </>
      <footer className={styles.footer} style={{ bottom: 0, height: 30 }}>
        <a href="https://culteva.pro" target="_blank" rel="noopener noreferrer">
          Provided by{" "}
          <span className={styles.logo}>
            <Image
              src="/culteva_brand.png"
              alt="Culteva logo"
              width={79}
              height={18}
            />
          </span>
        </a>
      </footer>
    </>
  );
};

export default Home;
