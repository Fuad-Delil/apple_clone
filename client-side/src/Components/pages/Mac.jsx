import React from "react";

function Mac() {
  const macProducts = [
    {
      product_name: "MacBook Air",
      product_url: "https://www.apple.com/macbook-air/",
      product_brief_description: "Power. Portability. Perfected.",
      product_description:
        "MacBook Air features a powerful Apple M1 chip with breakthrough performance, a stunning Retina display, and all-day battery life.",
      product_img:
        "https://images.unsplash.com/photo-1503292760924-54a2d8e981a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hY2Jvb2slMjBhaXJ8ZW58MHx8MHx8fDA%3D",
      product_link: "https://www.apple.com/macbook-air/",
      price_range: "From $999",
      starting_price: "$999",
    },
    {
      product_name: "MacBook Pro 13-inch",
      product_url: "https://www.apple.com/macbook-pro-13/",
      product_brief_description: "The power to do it all.",
      product_description:
        "MacBook Pro 13-inch features a powerful Apple M1 chip, stunning Retina display, and incredible performance.",
      product_img:
        "https://images.unsplash.com/photo-1606146821990-9b32534ffe8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fE1hY0Jvb2slMjBQcm8lMjAxMyUyMGluY2h8ZW58MHx8MHx8fDA%3D",
      product_link: "https://www.apple.com/macbook-pro-13/",
      price_range: "From $1,299",
      starting_price: "$1,299",
    },
    
  ];

  return (
    <>
      <h1 className="text-center mt-5 pt-5">Mac Products</h1>
      {macProducts.map((product, index) => {
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

export default Mac;
