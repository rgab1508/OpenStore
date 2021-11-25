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
                <a href="/create">Create NFT</a>
              </li>
              <li>
                <a href="/viewassets">View Your Assets</a>
              </li>
              <li>
                <a href="/creator-dashboard">Creator Dashboard</a>
              </li>
              <li>
                <a href="/about">About Us</a>
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
              <li>
                <a href="https://github.com/rgab1508/OpenStore">
                  <i className="fa fa-2x fa-github" aria-hidden="true"></i> Github Repository
                </a>
              </li>
            </ul>
            <br />

          </div>
        </div>
        <br />
        <br />
      </div>
      );
}
