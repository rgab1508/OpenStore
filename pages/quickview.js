/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

import Navbar from "../components/Navbar";
import Display from "../components/Display";

import TopWaveFooter from "../components/TopWaveFooter";

import Card from "../components/Card";
import Team from "../components/Team";
import Itemview from "../components/ItemView";

import WaveFooter from "../components/WaveFooter";
import Footer from "../components/Footer";

export default function QuickView() {
  return (
    <div>
      <Script src="https://kit.fontawesome.com/a076d05399.js" async />
      <Head>
        <title>Blockchain Based NFT Application</title>
        <meta name="description" content="Blockchain based NFT application" />
        <link rel="icon" href="/favicon.png" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        {/* // eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;300&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
        />
        <script src="https://code.jquery.com/jquery-3.3.1.js" async></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"
          async
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"
          async
        ></script>
      </Head>
      <main>
        <Itemview />
      </main>
    </div>
  );
}
