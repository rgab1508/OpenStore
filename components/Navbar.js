// import styles from "../styles/navbar.module.css";
// import { Image } from "@chakra-ui/image";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top ">
      <div className="container">
        <Link passHref={true} href="/" className="navbar-brand">
          <div id="leftlogo">
            <Image
              src="/assets/navbarlogo.svg"
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
              <Link href="/create" className="nav-link left">
                Create NFT
              </Link>
            </li>
            <li className="link-background">
              <Link href="/about" className="nav-link left">
                About Us
              </Link>
            </li>
            <li className="link-background">
              <Link href="/" className="nav-link left">
                View your assets
              </Link>
            </li>

            <li className="link-background">
              <a
                className="nav-link"
                id="popcart"
                data-html="true"
                data-container="body"
                data-toggle="popover"
                data-placement="bottom"
                data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
              >
                <i className="fa fa-shopping-cart"></i> <span id="cart">0</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
