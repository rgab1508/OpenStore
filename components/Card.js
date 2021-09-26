import Image from "next/image";

export default function Card({ data, key }) {
  return (
    <div key={key} className=" col-md-4">
      <div className="card shadow margin-56">
        <Image
          className="card-img-top"
          src={data.image}
          alt="Card image cap"
          width={200}
          height={250}
        />
        <div className="card-body">
          <h5 className="card-title" id="namepr{{i.id}}">
            {data.name}
          </h5>
          {/* <h5 className="card-title">
            <b>ETH</b> 500
          </h5> */}
          <div className="row">
            <div className="col-6">
              <span id="divpr{{i.id}}" className="divpr">
                <button id="pr{{i.id}}" className="commonbuttons cart">
                  Add To Cart
                </button>
              </span>
            </div>
            <div className="col-6">
              <a href="/shop/products/{{i.id}}">
                <button id="qv{{i.id}}" className="commonbuttons">
                  Quick View
                </button>
              </a>
            </div>
          </div>
          <br />
          <br />
          <p className="card-text">{data.desc}</p>
        </div>
      </div>
    </div>
  );
}
