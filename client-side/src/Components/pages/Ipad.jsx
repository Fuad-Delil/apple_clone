import React from "react";

function Ipad() {
  const ipadProducts = [
    {
      product_name: "iPad Air",
      product_url: "https://www.apple.com/ipad-air/",
      product_brief_description:
        "The power of a computer. The ease of an iPad.",
      product_description:
        "iPad Air features the powerful Apple M1 chip, stunning Liquid Retina display, and all-day battery life.",
      product_img:
        "https://images.unsplash.com/photo-1630042461973-179ca2cfa7bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGlwYWQlMjBhaXJ8ZW58MHx8MHx8fDA%3D",
      product_link: "https://www.apple.com/ipad-air/",
      price_range: "From $599",
      starting_price: "$599",
    },
    {
      product_name: "iPad Pro",
      product_url: "https://www.apple.com/ipad-pro/",
      product_brief_description: "Your next computer is not a computer.",
      product_description:
        "iPad Pro with the powerful M1 chip and stunning Liquid Retina XDR display is designed to power through any task.",
      product_img:
        "https://images.unsplash.com/photo-1621750291306-c9afba316115?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGlwYWQlMjBtaW5pfGVufDB8fDB8fHww",
      product_link: "https://www.apple.com/ipad-pro/",
      price_range: "From $799",
      starting_price: "$799",
    },
    
  ];

  return (
    <>
      <h1 className="text-center mt-5 pt-5">iPad Products</h1>
      {ipadProducts.map((product, index) => {
        const {
          product_name,
          product_url,
          product_brief_description,
          product_description,
          product_img,
          product_link,
          starting_price,
        } = product;

        return (
          <div className="" key={index}>
            <div className="container m-5">
              <h2 className="text-center mt-1">{product_name}</h2>
              <div className="row">
                <div
                  className={`col-md mx-4 order-${index % 2 === 0 ? "1" : "2"}`}
                >
                  <div className="text-center pt-5 mt-5 fw-bold">
                    {product_brief_description}
                  </div>
                  <div className="p-4">{product_description}</div>
                  <div className="py-2 text-center">{`Starting Price ${starting_price}`}</div>
                  <div className="text-center">
                    <a
                      href={product_link}
                      className="btn btn-primary p-3 text-dark bg-blue-600 rounded hover:bg-blue-700 transition"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
                <div
                  className={`col-md mx-4 order-${index % 2 === 0 ? "2" : "1"}`}
                >
                  <img
                    className="mx-auto d-block m-5"
                    src={product_img}
                    alt={product_name}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Ipad;
