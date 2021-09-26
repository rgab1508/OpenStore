import Image from "next/image";

export default function Team() {
  return (
    <div className="background-black" style={{ minHeight: "70vh" }}>
      <div className="container">
        <div className="title">
          <br />
          <br />
          <h1 className="title-main text-center">
            <b>Drop Table Teams</b>
          </h1>
          <br />
          <br />
        </div>

        <div className="row">
          <div className="col-md-4 my-3 text-center">
            <div className="top-image">
              <Image
                width="200px"
                height="200px"
                className="hover-effect-zoom"
                src="https://avatars.githubusercontent.com/u/61423235?s=460&u=7ef56fda424474b260d3f88a0a07ae6da385953b&v=4"
                alt="Aakash"
                loading="lazy"
              />
            </div>
            <div className="bottom mb-3">
              <h5 className="text-center my-4">
                <b>Aakash</b>
              </h5>
            </div>
          </div>

          <div className="col-md-4 my-3 text-center">
            <div className="top-image">
              <Image
                className="hover-effect-zoom"
                height="200px"
                width="200px"
                src="https://res.cloudinary.com/dnv3ztqf1/image/upload/v1605641201/ASA%20Blog/shreya_d3we6x.png"
                alt="Shreya"
                loading="lazy"
              />
            </div>
            <div className="bottom mb-3">
              <h5 className="text-center my-4">
                <b>Shreya</b>
              </h5>
            </div>
          </div>

          <div className="col-md-4 my-3 text-center">
            <div className="top-image">
              <Image
                width="200px"
                height="200px"
                className="hover-effect-zoom"
                src="https://media-exp1.licdn.com/dms/image/C4E03AQEIuFmsjPkuZA/profile-displayphoto-shrink_400_400/0/1604657565624?e=1637798400&v=beta&t=mm2QtE7Iftsp4T0d4LWAM2Wf_0-LQ1AbWRDGwlorSK0"
                alt="Akshata"
                loading="lazy"
              />
            </div>
            <div className="bottom mb-3">
              <h5 className="text-center my-4">
                <b>Akshata</b>
              </h5>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 my-3 text-center">
            <div className="top-image">
              <Image
                width="200px"
                height="200px"
                className="hover-effect-zoom"
                src="https://media-exp1.licdn.com/dms/image/C4E03AQHXARWEpmiy8g/profile-displayphoto-shrink_400_400/0/1613926731454?e=1637798400&v=beta&t=OBsbasB6Ft0q-ufUj_l9d9fX_k4FF4ZYXRrioVV6tTI"
                alt="Aditya"
                loading="lazy"
              />
            </div>
            <div className="bottom mb-3">
              <h5 className="text-center my-4">
                <b>Aditya</b>
              </h5>
            </div>
          </div>

          <div className="col-md-4 my-3 text-center">
            <div className="top-image">
              <Image
                width="200px"
                height="200px"
                className="hover-effect-zoom"
                src="https://media-exp1.licdn.com/dms/image/C5103AQHjdEePAfnGXg/profile-displayphoto-shrink_400_400/0/1567694882465?e=1637798400&v=beta&t=lXR2e7Rsy68k18lMFKhS83_8TcbRxakLjyOLUwPDd8o"
                alt="Abhishek"
                loading="lazy"
              />
            </div>
            <div className="bottom mb-3">
              <h5 className="text-center my-4">
                <b>Abhishek</b>
              </h5>
            </div>
          </div>

          <div className="col-md-4 my-3 text-center">
            <div className="top-image">
              <Image
                width="200px"
                height="200px"
                className="hover-effect-zoom"
                src="https://avatars.githubusercontent.com/u/29654240?v=4"
                alt="Gabriel"
                loading="lazy"
              />
            </div>
            <div className="bottom mb-3">
              <h5 className="text-center my-4">
                <b>Gabriel</b>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
