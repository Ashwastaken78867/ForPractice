import React from 'react';
import { useNavigate } from 'react-router-dom';
import illustration from '../assets/illustration.png';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div
      className="container-fluid d-flex align-items-center position-relative"
      style={{ minHeight: "100vh", backgroundColor: "#fff" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold mb-3">
              A <span style={{ color: "red" }}>power-packed solution</span>
              <span style={{ color: "black" }}>
                {" "}
                to streamline all educational and institutional processes.
              </span>
            </h2>
            <p className="text-muted mb-4">
              Campus Tech is a robust solution packed with best-in-class
              software, consulting, audits, and empowerment activities rolled
              into one for your institution.
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
              style={{ maxHeight: "200px" }}
            />

            {/* Arrow Navigation */}
            <div className="d-flex justify-content-center gap-4 mt-3">
              <button
                className="btn btn-light rounded-circle shadow-sm"
                disabled
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              <button
                className="btn btn-light rounded-circle shadow-sm"
                onClick={() => navigate('/file1')}
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Orange Rectangle at the Bottom Left */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '50%',
          height: '5px',
          backgroundColor: '#EDAA20',
        }}
      />
    </div>
  );
};

export default HeroSection;
