import React from "react";

function Tv() {
  const tvProducts = [
    {
      product_name: "Apple TV 4K",
      product_url: "https://www.apple.com/apple-tv-4k/",
      product_brief_description: "The best way to watch TV, with 4K HDR.",
      product_description:
        "Apple TV 4K gives you access to stunning 4K HDR video with Dolby Vision and Dolby Atmos audio. Stream the best content from Apple TV+, Netflix, Hulu, and more.",
      product_img:
        "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEFwcGxlJTIwVFYlMjA0S3xlbnwwfHwwfHx8MA%3D%3D",
      product_link: "https://www.apple.com/apple-tv-4k/",
      starting_price: "$179",
    },
    {
      product_name: "Apple TV HD",
      product_url: "https://www.apple.com/apple-tv-hd/",
      product_brief_description: "HD TV with the best of Apple.",
      product_description:
        "Apple TV HD offers access to great content with the Apple ecosystem. With Siri voice control, you can easily find your favorite movies, shows, and more.",
      product_img:
        "https://images.unsplash.com/photo-1646861039459-fd9e3aabf3fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QXBwbGUlMjBUViUyMEhEfGVufDB8fDB8fHww",
      product_link: "https://www.apple.com/apple-tv-hd/",
      starting_price: "$149",
    },
    {
      product_name: "Apple TV+ Subscription",
      product_url: "https://www.apple.com/apple-tv-plus/",
      product_brief_description: "Stream the best Apple original content.",
      product_description:
        "Apple TV+ brings you the most original and compelling content. Enjoy award-winning shows, documentaries, and movies on all your devices.",
      product_img:
        "https://images.unsplash.com/photo-1694032007593-8ead82259b11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fEFwcGxlJTIwVFYlMkIlMjBTdWJzY3JpcHRpb258ZW58MHx8MHx8fDA%3D",
      product_link: "https://www.apple.com/apple-tv-plus/",
      starting_price: "$4.99/month",
    },
  ];

  return (
    <>
      <h1 className="text-center mt-5 pt-5">Apple TV Products</h1>
      <div className="container mt-5">
        <div id="tvCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {tvProducts.map((product, index) => {
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
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <div className="d-flex justify-content-center">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
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
                          className="btn btn-dark"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#tvCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#tvCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Tv;
