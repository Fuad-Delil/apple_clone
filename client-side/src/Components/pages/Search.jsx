import React from "react";

function SearchPage() {
  return (
    <div className="container py-5" style={{ maxWidth: "800px" }}>
      <h1 className="text-center mb-4">Search Apple Support</h1>

      {/* Search input */}
      <div className="mb-5">
        <input
          type="text"
          placeholder="Search for products, topics or questions"
          className="form-control form-control-lg"
          style={{
            borderRadius: "10px",
            padding: "20px",
            fontSize: "1.1rem",
            boxShadow: "0 0 10px rgba(0,0,0,0.05)",
          }}
        />
      </div>

      {/* Suggested Topics */}
      <h5 className="mb-3 text-muted">Popular Support Topics</h5>
      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action">
          Forgot Apple ID or password?
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          How to back up your iPhone or iPad
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Billing and subscriptions
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          iCloud storage and plans
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Get help with AirPods
        </a>
      </div>

      {/* Contact Section */}
      <div className="text-center mt-5">
        <p className="text-muted mb-2">Still need help?</p>
        <a href="#" className="btn btn-primary px-4 py-2 rounded">
          Contact Apple Support
        </a>
      </div>
    </div>
  );
}

export default SearchPage;
