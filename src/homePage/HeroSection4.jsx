import React from "react";
import uni1 from '../assets/unit1.png';
import uni2 from '../assets/unit2.png';
import uni3 from '../assets/unit3.png';
import uni4 from '../assets/unit4.png';

function HeroSection4() {
  return (
    <div
      className="container-fluid d-flex align-items-center position-relative"
      style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}
    >
      <div className="container text-center py-5">
        {/* Heading */}
        <h2 className="fw-bold text-start">
          <span style={{ color: 'black' }}>The best is the </span><br />
          <span style={{ color: 'red' }}>country trust us</span>
        </h2>

        {/* Numbers with labels */}
        <div className="row mt-5">
          {[
            { number: "30", label: "Top Institutions" },
            { number: "13", label: "in A/A+/A++ Tier" },
            { number: "3000", label: "Faculty Connect" },
            { number: "90000", label: "Students Benefited" },
          ].map((item, index) => (
            <div className="col-md-3 col-6 mb-4" key={index}>
              <h3
                className="fw-bold"
                style={{ color: index % 2 === 0 ? "goldenrod" : "green" }}
              >
                {item.number}
              </h3>
              <p className="text-muted">{item.label}</p>
            </div>
          ))}
        </div>

        {/* University Logos */}
        <div className="row justify-content-center align-items-center mt-4">
          {[uni1, uni2, uni3, uni4].map((logo, index) => (
            <div className="col-md-3 col-6 mb-3" key={index}>
              <img
                src={logo}
                alt={`University ${index + 1}`}
                className="img-fluid"
                style={{ maxHeight: '60px', objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>

        {/* Bottom Accent Line */}
        <div
          style={{
            width: '25%',
            height: '4px',
            backgroundColor: '#E94724',
            marginTop: '2rem',
            marginLeft: 'auto',
          }}
        ></div>
      </div>

      {/* Bottom-right Green Semi-circle */}
   
    </div>
  );
}

export default HeroSection4;
