import Script from "next/script";
import Head from "next/head";
import Display from "../components/Display";
import TopWaveFooter from "../components/TopWaveFooter";
import ItemList from "../components/ItemList";
import WaveFooter from "../components/WaveFooter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Script src="https://kit.fontawesome.com/a076d05399.js" />
      <Head>
        <title>OpenStore Marketplace</title>
        <meta name="description" content="Blockchain based NFT application" />
      </Head>
      <Display />
      <TopWaveFooter />
      <main
        style={{ marginTop: "30px", marginBottom: "50px", minHeight: "50vh" }}
      >
        <div className="container">
          <h1
            className="title-main text-center"
            style={{ marginBottom: "30px", fontWeight: "bold" }}
          >
            Products
          </h1>
          <ItemList />
        </div>
      </main>
    </div>
  );
}
