import Image from "next/image";

export default function Display() {
  return (
    <div className="below-navbar-container">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center vanish-mobile">
            <section id="right_below_navbar_svg">
              <Image
                src="/assets/marketplace.svg"
                loading="eager"
                layout="fill"
                alt="Iphone icon"
              />
            </section>
          </div>
          <div className="col-md-6">
            <div className="box-for-names" id="hello-world">
              <h1 className="title-main">
                <b>Open Store</b>
              </h1>
              <h4 className="mt-2">
                An Online Blockchain NFT Marketplace which prevents duplicate
                assets.
              </h4>
              <a href="" target="blank">
                <button
                  className=" flex-row-reverse mt-3 px-5 text-center"
                  id="commonbuttons"
                >
                  <b>View Demo</b>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
