import Image from "next/image";

export default function Card({ data, buyNft, key }) {
  return (
    <div key={key} className="mb-5 col-md-4">
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
          <h5 className="card-title">
            {data.price} <b>ETH</b>
          </h5>
          <div className="row">
            <div className="col-6">
              <button
                onClick={() => buyNft(data)}
                id="qv{{i.id}}"
                className="commonbuttons"
              >
                Buy Now
              </button>
            </div>
          </div>
          <br />
          <p className="card-text">{data.desc}</p>
        </div>
      </div>
    </div>
  );
}
