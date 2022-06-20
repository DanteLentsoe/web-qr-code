import { useRouter } from "next/router";
import Footer from "../components/footer";
import Head from "next/head";
import AboutQRCode from "../components/containlayout";
import ContentQRCode from "../components/containInfoAbout";

export default function LearnMore() {
  const route = useRouter();
  return (
    <>
      <Head>
        <title>Web QR Code Scanner | Learn More </title>
        <meta
          name="description"
          content="Web Code Scanner is a qr code mobile application"
        />
        <link rel="icon" href="/" />
      </Head>

      <AboutQRCode />

      <ContentQRCode />

      <Footer />
    </>
  );
}
