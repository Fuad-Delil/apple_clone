import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Four04 from "./Four04";

function SinglePage() {
  const [product, setproduct] = useState([]);

  const { productID } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/iphone")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const productList = data.products;
        const singleProduct = productList.filter(
          (product) => product.product_name == productID
        );
        setproduct(singleProduct);
    })
    .catch((err) => {
        console.log(err);
    });
    }, [productID]);

    console.log(product);

  if (product.length) {
    return (
      <>
        {product?.map((products, index) => {
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
              <h1 className="text-center mt-5 pt-5">{`${product_name} for You`}</h1>
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
  } else {
    return <Four04 />
  }
}

export default SinglePage;
