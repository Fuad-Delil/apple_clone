import React from "react";

function Watch() {
  const watchProducts = [
    {
      product_name: "Apple Watch Series 7",
      product_url: "https://www.apple.com/apple-watch-series-7/",
      product_brief_description: "The future of health is on your wrist.",
      product_description:
        "Apple Watch Series 7 is our most advanced smartwatch, with a larger, more durable display and powerful health features.",
      product_img:
        "https://images.unsplash.com/photo-1672893037476-c0e9f01eb0e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXBwbGUlMjBXYXRjaCUyMFNlcmllcyUyMDd8ZW58MHx8MHx8fDA%3D",
      product_link: "https://www.apple.com/apple-watch-series-7/",
      starting_price: "$399",
    },
    {
      product_name: "Apple Watch SE",
      product_url: "https://www.apple.com/apple-watch-se/",
      product_brief_description: "The essential Apple Watch.",
      product_description:
        "Apple Watch SE combines the features you want with the power you need at an even more affordable price.",
      product_img:
        "https://images.unsplash.com/photo-1649030612175-703cfd093907?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXBwbGUlMjBXYXRjaCUyMFNFfGVufDB8fDB8fHww",
      product_link: "https://www.apple.com/apple-watch-se/",
      starting_price: "$279",
    },
    {
      product_name: "Apple Watch Series 3",
      product_url: "https://www.apple.com/apple-watch-series-3/",
      product_brief_description: "Still great. Still powerful.",
      product_description:
        "Apple Watch Series 3 is the perfect way to get started with Apple Watch. Track your fitness, stay connected, and more.",
      product_img:
        "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=600&auto=format&fit=crop&q=60",
      product_link: "https://www.apple.com/apple-watch-series-3/",
      starting_price: "$199",
    },
  ];

  return (
    <>
      <h1 className="text-center mt-5 pt-5">Apple Watch Products</h1>
      <div className="container mt-5">
        <div className="row">
          {watchProducts.map((product, index) => {
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
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 shadow-lg border-0">
                  <img
                    style={{ height: "250px", objectFit: "cover" }}
                    src={product_img}
                    alt={product_name}
                    className="card-img-top rounded"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product_name}</h5>
                    <p className="card-text">{product_brief_description}</p>
                    <p className="card-text">{product_description}</p>
                    <p className="card-text">
                      <strong>Starting Price: {starting_price}</strong>
                    </p>
                  </div>
                  <div className="card-footer text-center">
                    <a
                      href={product_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-dark w-100"
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

export default Watch;
