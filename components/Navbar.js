import Image from "next/image";
import Link from "next/link";
import Web3Modal from "web3modal";
import Web3 from "web3";
import { projAddress } from "../config";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    checkConnection();
  }, []);

  async function checkConnection() {
    let web3;
    if (window.ethereum) {
      web3 = new Web3(window.ethereum);
    } else if (window.web3) {
      web3 = new Web3(window.web3.currentProvider);
    }
    web3.eth.getAccounts().then((accounts) => {
      if (accounts.length > 0) {
        setConnected(true);
      }
    });
  }

  async function connectWallet() {
    const web3Modal = new Web3Modal(projAddress);
    const provider = await web3Modal.connect();
    checkConnection();
  }

  return (
    <nav className="navbar navbar-expand-lg sticky-top ">
      <div className="container">
        <Link passHref={true} href="/" className="navbar-brand">
          <div id="leftlogo">
            <Image
              src="/assets/navbar-logo-new.svg"
              alt="Navbar Logo"
              className="d-inline-block align-top"
              loading="lazy"
              width="100"
              height="100"
            />
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span id="navbar-toggler-icon">≡</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="link-background">
              <Link passHref={true} href="/create" className="nav-link left">
                <a className="nav-link left">Create NFT</a>
              </Link>
            </li>
            <li className="link-background">
              <Link
                passHref={true}
                href="/viewassets"
                className="nav-link left"
              >
                <a className={"nav-link left"}>View your assets</a>
              </Link>
            </li>
            <li className="link-background">
              <Link passHref={true} href="/creator-dashboard">
                <a className="nav-link left">Dashboard</a>
              </Link>
            </li>
            <li className="link-background">
              <Link passHref={true} href="/about" className="nav-link left">
                <a className={"nav-link left"}> About Us</a>
              </Link>
            </li>
            {!connected && (
              <li
                style={{
                  borderRadius: "5px",
                  color: "purple",
                  backgroundColor: "purple",
                }}
              >
                <a onClick={connectWallet} className={"nav-link left"}>
                  Connect wallet
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
