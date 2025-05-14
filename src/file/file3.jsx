import React from 'react';
import { useNavigate } from 'react-router-dom';
import illustration from '../assets/pic3.png';

const File3 = () => {
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
              <span style={{ color: "red" }}>Live reports </span><span >and</span> <span  style={{ color: "red" }}>comparative</span><br />

              <span style={{ color: "red" }}>analysis</span><span> of tasks</span>
            </h2>
            <p className="text-muted mb-4">
              Campus Tech presents you with multiple dashboards to review the status of various 
              accreditation tasks, including the tasks that are overdue, non-compliant, or need attention.
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
                onClick={() => navigate('/file2')} // Navigate to File2
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              <button
                className="btn btn-light rounded-circle shadow-sm"
                onClick={() => navigate('/')} // Navigate to File1 (not HeroSection)
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

export default File3;
