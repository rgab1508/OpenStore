/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

import Navbar from "../components/navbar.js";
import Display from "../components/display.js";

import TopWaveFooter from "../components/topwavefooter.js";

import Card from "../components/card.js";
import Team from "../components/team.js";
import Itemview from "../components/itemview.js";



import WaveFooter from "../components/wavefooter.js";
import Footer from "../components/footer.js";

export default function QuickView() {
    return (
        <div>
            <Script src="https://kit.fontawesome.com/a076d05399.js" />
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
                    integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                    crossOrigin="anonymous"
                />
            </Head>

            <Navbar />
            <Itemview/>
          
            <main>
            </main>
            <footer>
                <WaveFooter />
                <Footer />

                <script
                    src="https://code.jquery.com/jquery-3.3.1.js"
                    integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
                    crossorigin="anonymous"
                ></script>
                <script
                    src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"
                    integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut"
                    crossorigin="anonymous"
                ></script>
                <script
                    src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"
                    integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k"
                    crossorigin="anonymous"
                ></script>
            </footer>
        </div>
    );
}
