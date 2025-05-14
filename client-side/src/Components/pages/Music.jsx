import React from "react";

function Music() {
  const musicProducts = [
    {
      product_name: "AirPods Pro",
      product_url: "https://www.apple.com/airpods-pro/",
      product_brief_description: "Active noise cancellation.",
      product_description:
        "AirPods Pro offers a superior listening experience with Active Noise Cancellation and Transparency mode. Enjoy rich audio and better comfort.",
      product_img:
        "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QWlyUG9kcyUyMFByb3xlbnwwfHwwfHx8MA%3D%3D",
      product_link: "https://www.apple.com/airpods-pro/",
      starting_price: "$249",
    },
    {
      product_name: "HomePod mini",
      product_url: "https://www.apple.com/homepod-mini/",
      product_brief_description: "Mini smart speaker with amazing sound.",
      product_description:
        "HomePod mini delivers amazing sound and smart capabilities in a compact design. Ask Siri to play music, control your smart home, and more.",
      product_img:
        "https://images.unsplash.com/photo-1655634428631-cfda6f644b37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEhvbWVQb2QlMjBtaW5pfGVufDB8fDB8fHww",
      product_link: "https://www.apple.com/homepod-mini/",
      starting_price: "$99",
    },
  ];

  return (
    <>
      <h1 className="text-center mt-5 pt-5">Music Products</h1>
      <div className="container mt-5">
        <div className="row">
          {musicProducts.map((product, index) => {
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
              <div className="col-md-6 mb-4" key={index}>
                <div className="card">
                  <img
                    style={{ height: "250px", objectFit: "cover" }}
                    src={product_img}
                    alt={product_name}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product_name}</h5>
                    <p className="card-text">{product_brief_description}</p>
                    <p className="card-text">{product_description}</p>
                    <p className="card-text">
                      <strong>Starting Price: {starting_price}</strong>
                    </p>
                    <a
                      href={product_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-dark"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Music;
