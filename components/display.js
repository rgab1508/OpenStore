// import { Image } from "@chakra-ui/image";

export default function Display() {
  return (
    <div className="below-navbar-container">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center vanish-mobile">
            <section id="right_below_navbar_svg">
              <img src="iphone.png" alt="Iphone icon" />
            </section>
          </div>
          <div className="col-md-6">
            <div className="box-for-names" id="hello-world">
              <h1 className="title-main">
                <b>IPhone</b>
              </h1>
              <h4 className="mt-2">DEDSO rupya dega</h4>
              <a
                href="https://drive.google.com/file/d/1s0fR01gzzSZWUYPv0AUNO_x1s8xRQ6Es/view?usp=sharing"
                target="blank"
              >
                <button
                  className=" flex-row-reverse mt-3 px-5 text-center"
                  id="commonbuttons"
                >
                  <b>Buy</b>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
