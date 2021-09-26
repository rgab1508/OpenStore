export default function Itemview() {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-6 text-center">
          <img
            width="100%"
            src="iphone.png"
            alt=""
            data-toggle="modal"
            data-target=".bd-example-modal-lg"
          />
          <br />
          <br />

          <div
            className="modal bd-example-modal-lg"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="myLargeModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <img width="100%" src="iphone.png" alt="" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <button
                id="pr{{i.id}}"
                className="btn-block commonbutton5  slight-big"
              >
                BUY NOW
              </button>
            </div>
            <div className="col-6">
              <a href="/shop/products/{{i.id}}">
                <button
                  id="qv{{i.id}}"
                  className="btn-block commonbutton5    slight-big"
                >
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
