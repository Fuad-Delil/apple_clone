import React from "react";

function Support() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Apple Support</h1>
      <p className="text-center mb-5 text-muted">
        We’re here to help. Find answers to your questions or get in touch with
        us.
      </p>

      {/* Search bar */}
      <div className="row justify-content-center mb-5">
        <div className="col-md-8">
          <input
            type="text"
            placeholder="Search support..."
            className="form-control form-control-lg"
          />
        </div>
      </div>

      {/* Support Categories */}
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">iPhone Support</h5>
              <p className="card-text text-muted">
                Get help with setup, updates, and troubleshooting your iPhone.
              </p>
              <a href="#" className="btn btn-outline-primary btn-sm">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Mac Support</h5>
              <p className="card-text text-muted">
                Explore articles for Mac setup, performance, and software help.
              </p>
              <a href="#" className="btn btn-outline-primary btn-sm">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title">Apple Services</h5>
              <p className="card-text text-muted">
                Need help with iCloud, Apple ID, or subscriptions?
              </p>
              <a href="#" className="btn btn-outline-primary btn-sm">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center mt-5">
        <p className="text-muted">Still need help?</p>
        <a href="#" className="btn btn-primary px-4 py-2">
          Contact Apple Support
        </a>
      </div>
    </div>
  );
}

export default Support;
