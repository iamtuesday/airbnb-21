import { Layout } from "@/components/layouts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Electrical Services in southeastern Wisconsin | Incan Electric.
        </title>
        {/* <Favicon /> */}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
