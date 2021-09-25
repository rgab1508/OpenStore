import Image from "next/image";

export default function Itemview() {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-6 text-center">
          <Image id="myImg" width="100%" src="/iphone.png" alt="" />
          <br />
          <br />

          <div id="myModal" className="modal">
            <span className="close">&times;</span>

            <Image alt="" className="modal-content" id="img01" />

            <div id="caption"></div>
          </div>

          <div className="row">
            <div className="col-6">
              <button id="pr{{i.id}}" className="commonbuttons  slight-big">
                BUY NOW
              </button>
            </div>
            <div className="col-6">
              <a href="/shop/products/{{i.id}}">
                <button id="qv{{i.id}}" className="commonbuttons    slight-big">
                  ADD TO CART
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 item-info">
          <h1 className="display-4 ">IPhone</h1>
          <span className="big-text">5.000</span>
          <span className="small-text"> ETH</span>

          <h5 className="display-6" text-justify>
            <b>Created by :</b> XYZ
          </h5>
          <h5 className="display-6  text-justify">
            <b>Description:</b>
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, hationem fuga. Possimus quis earum veniam quasi aliquam
            eligendi, placeat qui corporis!
          </h5>
        </div>
      </div>
    </div>
  );
}
