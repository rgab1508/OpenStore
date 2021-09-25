// import styles from "../styles/navbar.module.css";
// import { Image } from "@chakra-ui/image";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top ">
            <div className="container">
                <a className="navbar-brand" href="/shop">
                    <div id="leftlogo">
                        <Image
                            src="/navbarlogo.svg"
                            alt="Navbar Logo"
                            className="d-inline-block align-top"
                            loading="lazy"
                        />
                    </div>
                </a>
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
                            <a href="/shop/contact" className="nav-link left">
                                Contact Us
                            </a>
                        </li>
                        <li className="link-background">
                            <a href="/shop/about" className="nav-link left">
                                About Us
                            </a>
                        </li>
                        <li className="link-background">
                            <a href="/shop/tracker" className="nav-link left">
                                Tracker
                            </a>
                        </li>
                        <li className="link-background">
                            <a href="/blog" className="nav-link left">
                                Blog
                            </a>
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
