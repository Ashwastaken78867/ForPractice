import React from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';

function HeroSection3() {
  const imagesLeft = [
    { src: image1, alt: 'Feature 1', caption: 'Simple and easy-to-use interface   ' },
    { src: image2, alt: 'Feature 2', caption: 'AI-based alerts for all activities to be conducted' },
    { src: image3, alt: 'Feature 3', caption: 'Build a new culture of compliance and accreditation'}

  ];

  const imagesRight = [
    { src: image4, alt: 'Feature 4', caption: 'Multi-institutional dashboard' },
    { src: image5, alt: 'Feature 5', caption: 'Track learning behaviour and learning outcomes' },
    { src: image6, alt: 'Feature 6', caption: 'Integration with your campus website' }
  ];

  return (
    <div className="container py-5">
      <div className="row">
        {/* First Part: Text and Button */}
        <div className="col-md-4 mb-4">
          <h3 className="fw-bold mb-3">
            Why your educational institution needs <span style={{ color: 'green' }}>Campus Tech</span>
          </h3>
          <button className="btn btn-success px-4 py-2 rounded-pill">About Us</button>
        </div>

        {/* Second Part: 3 Photos with text beside image */}
        <div className="col-md-4 mb-4">
          {imagesLeft.map((item, index) => (
            <div className="d-flex align-items-center mb-4" key={index}>
              <img
                src={item.src}
                alt={item.alt}
                className="img-fluid"
                style={{ maxHeight: '60px', maxWidth: '60px', marginRight: '12px' }}
              />
              <p className="mb-0 text-muted">{item.caption}</p>
            </div>
          ))}
        </div>

        {/* Third Part: 3 More Photos with text beside image */}
        <div className="col-md-4 mb-4">
          {imagesRight.map((item, index) => (
            <div className="d-flex align-items-center mb-4" key={index}>
              <img
                src={item.src}
                alt={item.alt}
                className="img-fluid"
                style={{ maxHeight: '60px', maxWidth: '60px', marginRight: '12px' }}
              />
              <p className="mb-0 text-muted">{item.caption}</p>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default HeroSection3;
