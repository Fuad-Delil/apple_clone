import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Iphone() {
  const [iphonePage, setIphonePage] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/iphone")
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        setIphonePage(data.products);
      })
      .catch((err) => console.error("Fetch error >>>", err));
  }, []);

  return (
    <>
      <h1 className="text-center mt-5 pt-5">Iphone page</h1>
      {iphonePage?.map((products, index) => {
        let {
          product_name,
          product_url,
          product_brief_description,
          product_description,
          product_img,
          product_link,
          price_range,
          starting_price,
          product_id,
        } = products;

        return (
          <>
            <div key={product_id} className="">
              <div className="container  m-5  ">
                <h2 className="text-center mt-1">{product_name}</h2>
                <div className="row">
                  <div
                    className={`col-md  mx-4 order-${
                      index % 2 == 0 ? "1" : "2"
                    }`}
                  >
                    <div className="text-center pt-5  mt-5 fw-bold	">
                      {product_brief_description}
                    </div>
                    <div className="p-4">{product_description}</div>
                    <div className="py-2 text-center">{`Starting Price ${starting_price}`}</div>
                    <div className="text-center">
                      <Link
                        to={`/iphone/${product_name}`}
                        className="btn btn-primary p-3 text-dark bg-blue-600 rounded hover:bg-blue-700 transition"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                  <div
                    className={`col-md  mx-4 order-${
                      index % 2 == 0 ? "2" : "1"
                    }`}
                  >
                    <img
                      className="mx-auto d-block m-5"
                      src={product_img}
                      alt="iphone-images"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Iphone;
