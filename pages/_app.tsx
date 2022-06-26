import type { AppProps } from "next/app";
import { ChakraProvider, color } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import { TourProvider } from "@reactour/tour";
import { steps } from "../contants/data";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <TourProvider
        steps={steps}
        styles={{
          badge: (base) => ({ ...base, backgroundColor: "#2C7A7B" }),
        }}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </TourProvider>
    </RecoilRoot>
  );
}

export default MyApp;
