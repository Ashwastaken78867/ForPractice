import React from "react";
import logo from "../src/assets/header.png";
import facebook from "../src/assets/facebook.png";
import instagram from "../src/assets/instagram.png";
import twitter from "../src/assets/twitter.png";
import linkedin from "../src/assets/linkedin.png";

function Footer() {
  return (
    <div className="container py-5 mt-5 border-top">
      <div className="row">

        {/* Left 3/4 - Heading and Button */}
        <div className="col-md-9">
          <h3 className="fw-bold mb-4">
            Ready to give your{" "}
            <span style={{ color: "red" }}>institution an </span>
            <span style={{ color: "red" }}>upgrade?</span>
          </h3>
          <button className="btn btn-success px-4 py-2 rounded-pill mb-4">
            About Us
          </button>
        </div>

        {/* Right 1/4 - Logo and Footer */}
       

      </div>
       <div className="col-md-3 d-flex flex-column align-items-center">
          {/* Logo */}
          <img
            src={logo}
            alt="Website Logo"
            style={{ maxHeight: "40px", objectFit: "contain" }}
            className="mb-4"
          />

          {/* Footer Columns */}
          <div className="row w-100">
            {/* Column 1 */}
            <div className="col-6 mb-3">
              <p>About</p>
              <p>Services</p>
              <p>Careers</p>
            </div>

            {/* Column 2 */}
            <div className="col-6 mb-3">
              <p>Blog</p>
              <p>Events</p>
              <p>Support</p>
            </div>

            {/* Column 3 */}
            <div className="col-6 mb-3">
              <p>Privacy</p>
              <p>Terms</p>
              <p>FAQ</p>
            </div>

            {/* Column 4 - Social Icons */}
            <div className="col-6 mb-3">
              <p>Chat with us</p>
              <div className="d-flex gap-2 mt-2">
                <img src={facebook} alt="Facebook" style={{ height: 24 }} />
                <img src={instagram} alt="Instagram" style={{ height: 24 }} />
                <img src={twitter} alt="Twitter" style={{ height: 24 }} />
                <img src={linkedin} alt="LinkedIn" style={{ height: 24 }} />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Footer;
