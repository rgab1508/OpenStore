import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <div className="footer_bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-5 footer_about_section">
            <h3>
              <b>About Us</b>
            </h3>
            <p className="text-justify about_footer">
              Blockchain NFT Marketplace
            </p>
            <a href="/shop/about/">
              <button id="commonbuttons">
                <b>Know More</b>
              </button>
            </a>
          </div>
          <div className="col-md-3 footer_quicklinks_section">
            <h3>
              <b>Quick Links</b>
            </h3>
            <ul className="footer-links">
              <li>
                <a href="shop">Contact Us</a>
              </li>
              <li>
                <a href="/shop/about/">About Us</a>
              </li>
              <li>
                <a href="/shop/tracker">Tracker</a>
              </li>
              <li>
                <a href="/blog/">Blog</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 footer_contact_section">
            <h3>
              <b>Contact Me</b>
            </h3>
            <ul className="footer-links">
              <li>
                <a href="mailto:aakashcoder1210@gmail.com?subject =Hello Aakash = Message">
                  <i className="fa fa-2x fa-envelope" aria-hidden="true"></i>{" "}
                  droptableteam@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+91 1234567891">
                  <i className="fa fa-2x fa-phone" aria-hidden="true"></i> DROP
                  TABLE
                </a>
              </li>
            </ul>
            <br />
            <div className="container">
              <div className="row">
                <div className="col-sm-3">
                  <a href="https://github.com/AakashCode12" target="blank">
                    <i
                      id="github"
                      className="fa fa-3x fa-github"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
                <div className="col-sm-3">
                  <a
                    href="https://www.linkedin.com/in/aakash-yadav-a30627190/"
                    target="blank"
                  >
                    <i
                      id="linkedin"
                      className="fa fa-3x fa-linkedin"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
                <div className="col-sm-3">
                  <a
                    href="https://www.instagram.com/aakash_igram/"
                    target="blank"
                  >
                    <i
                      id="instagram"
                      className="fa fa-3x fa-instagram"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
                <div className="col-sm-3">
                  <a href="https://twitter.com/Aakashv0007" target="blank">
                    <i
                      id="twitter"
                      className="fa fa-3x fa-twitter"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
