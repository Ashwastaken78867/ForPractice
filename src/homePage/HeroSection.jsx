import React from 'react';
import illustration from '../assets/illustration.png'; // adjust path as needed

const HeroSection = () => {
  return (
    <div className="container py-5 pt-5">
      <div className="row align-items-center min-vh-50">
        {/* Text Section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <h2 className="fw-bold mb-3">
            A <span style={{ color: 'red' }}>power-packed solution</span>
            <span style={{ color: 'black' }}> to streamline all educational and institutional processes.</span>
          </h2>
          <p className="text-muted mb-4">
            Campus Tech is a robust solution packed with best-in-class software, consulting, audits, and empowerment activities rolled into one for your institution.
          </p>
          <button className="btn btn-success px-4 py-2 rounded-pill">
            Get Demo
          </button>

        
        </div>

        {/* Image Section */}
        <div className="col-md-6 text-center">
          <img
            src={illustration}
            alt="Campus Tech Illustration"
            className="img-fluid"
            style={{ maxHeight: '400px' }}
          />

          {/* Arrow buttons below the image */}
          <div className="d-flex justify-content-center gap-4 mt-3">
            <button className="btn btn-light rounded-circle shadow-sm">
              <i className="bi bi-chevron-left"></i>
            </button>
            <button className="btn btn-light rounded-circle shadow-sm">
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
            {/* Yellow SVG Line Below the Button
          <div className="mt-4 justify-content-start" style={{ width: '50%' }}>
            <svg width="220%" height="14" viewBox="0 0 676 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="-22" width="698" height="14" fill="#EDAA20" />
            </svg>
          </div> */}
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
