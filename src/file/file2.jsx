import React from 'react';
import { useNavigate } from 'react-router-dom';
import illustration from '../assets/pic2.png'; // adjust path as needed

const File2 = () => {
  const navigate = useNavigate();

  return (
    <div
      className="container-fluid d-flex align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#fff" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold mb-3">
              <span>Helps cater to  <span style={{ color: "red" }}>accreditation</span></span><br />
              <span style={{ color: "red" }}>requirements</span>
            </h2>
            <p className="text-muted mb-4">
              Campus Tech has created an associated full-fledged and robust campus automation 
              software along with a dedicated mobile app for
               students that can cater to multiple accreditation
                and compliance requirements.
            </p>
            <button className="btn btn-success px-4 py-2 rounded-pill">
              Accreditation & Compliance
            </button>
          </div>

          {/* Image Section */}
          <div className="col-md-6 text-center">
            <img
              src={illustration}
              alt="Campus Tech Illustration"
              className="img-fluid"
              style={{ maxHeight: "400px" }}
            />

            {/* Arrow buttons below the image */}
            <div className="d-flex justify-content-center gap-4 mt-3">
              <button
                className="btn btn-light rounded-circle shadow-sm"
                onClick={() => navigate('/file1')} // Navigate to Home (HeroSection)
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              <button
                className="btn btn-light rounded-circle shadow-sm"
                onClick={() => navigate('/file3')} // Navigate to File3
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default File2;
