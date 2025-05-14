import React from "react";
import logo from "../src/assets/header.png";
import facebook from "../src/assets/facebook.png";
import instagram from "../src/assets/instagram.png";
import twitter from "../src/assets/twitter.png";
import linkedin from "../src/assets/linkedin.png";

function Footer() {
  return (
    <div className="container-fluid py-5 border-top" style={{ minHeight: "100vh", backgroundColor: "#f9f9f9" }}>
      <div className="container h-100 d-flex flex-column justify-content-between">

        {/* Top CTA Section */}
        <div className="row pt-5">
          <div className="col-md-6">
            <h3 className="fw-bold mb-3">
              Ready to give your <br />
              <span style={{ color: 'red' }}>institution an upgrade?</span>
            </h3>
            <button className="btn btn-success px-4 py-2 rounded-pill mt-3">Contact Us</button>

            {/* Spacer: 1/3rd page height */}
            <div style={{ height: '33vh' }}></div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="row align-items-start pb-4">
          {/* Logo */}
          <div className="col-md-3 mb-4">
            <img src={logo} alt="Logo" style={{ height: "40px" }} />
          </div>

          {/* Resources */}
          <div className="col-md-3 mb-4">
            <p>Resources</p>
            <p>Solutions</p>
            <p>About Us</p>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <p>Contact Us</p>
            <p>support@campus.technology</p>
            <p>+91-9980-747-722</p>
          </div>

          {/* Social Icons */}
          <div className="col-md-3 mb-4">
            <p>Chat with us</p>
            <div className="d-flex gap-3 mt-2">
              <img src={facebook} alt="Facebook" style={{ height: 24 }} />
              <img src={instagram} alt="Instagram" style={{ height: 24 }} />
              <img src={twitter} alt="Twitter" style={{ height: 24 }} />
              <img src={linkedin} alt="LinkedIn" style={{ height: 24 }} />
            </div>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="text-center text-muted pt-3 border-top">
          <small>© 2022, Kahan Technologies Pvt. Ltd.</small>
        </div>

      </div>
    </div>
  );
}

export default Footer;
