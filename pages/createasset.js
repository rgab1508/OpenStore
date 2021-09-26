/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

import Navbar from "../components/navbar.js";
import Display from "../components/display.js";

import TopWaveFooter from "../components/topwavefooter.js";

import Card from "../components/card.js";
import Team from "../components/team.js";
import ItemView from "../components/itemview.js";

import WaveFooter from "../components/wavefooter.js";
import Footer from "../components/footer.js";

export default function Createasset() {
  return (
    <div>
      <Script src="https://kit.fontawesome.com/a076d05399.js" />
      <Head>
        <title>Create Asset</title>
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
          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossOrigin="anonymous"
        />
      </Head>

      <main>
        <h1 className="text-center my-5 header display-4">Create Asset</h1>

        <div style={{ marginBottom: "50px" }} className="container ">
          <div className="row ">
            <div className="col-sm-6 block-to-disappear-in-mobile">
              <Image
                src="https://res.cloudinary.com/dnv3ztqf1/image/upload/v1632635884/devathon/create-asset_nvz7xi.svg"
                layout="fill"
                alt="image htmlFor add doctor"
              />
            </div>
            <div className="col-sm-6">
              <for action="/adddoctor" method="POST" className="form-group">
                <input
                  type="hidden"
                  name="csrfmiddlewaretoken"
                  value="fIwiR9rbZTmvxfmW8gC8CiS93Zx36iAh0kdWjuhKGglTMld96xGITqBEbdBR4EkY"
                />
                <ul className="unordered-list">
                  <li>
                    <label htmlFor="id_name">Asset Name:</label>{" "}
                    <input
                      type="text"
                      name="name"
                      maxLength="500"
                      required
                      id="id_name"
                    />
                  </li>
                  <li>
                    <label htmlFor="id_description">Asset Description</label>{" "}
                    <input
                      type="text"
                      name="phone"
                      maxLength="500"
                      required
                      id="id_description"
                    />
                  </li>
                  <li>
                    <label htmlFor="id_price_in_eth">Asset price in ETH:</label>{" "}
                    <input
                      type="number"
                      name="id_price_in_eth"
                      value="0"
                      required
                      id="id_price_in_eth"
                    />
                  </li>
                  <input type="file" name="Asset" classNameName="my-4" />
                </ul>

                <input className="btn btn-block commonbuttons" type="submit" />
              </for>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <WaveFooter />
        <Footer />
        <Script
          src="https://code.jquery.com/jquery-3.3.1.js"
          integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
          crossOrigin="anonymous"
        ></Script>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"
          integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut"
          crossOrigin="anonymous"
        ></Script>
        <Script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"
          integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k"
          crossOrigin="anonymous"
        ></Script>
      </footer>
    </div>
  );
}
