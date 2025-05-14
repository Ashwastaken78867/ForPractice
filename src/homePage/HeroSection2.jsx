import accreditationIcon from '../assets/download.png'; 
import accreditationIcon1 from '../assets/download1.png'; 
import { useNavigate } from 'react-router-dom';

import accreditationIcon2 from '../assets/download2.png'; 


function HeroSection2() {
    const navigate = useNavigate();

  return (
    <div className="container py-5" id="second-section">
      <h2 className="fw-bold mb-5 text-center">
        <span style={{ color: 'black' }}>Learn more about </span>
        <span style={{ color: 'red' }}>what we slove</span>
      </h2>

      <div className="row text-center">
        {/* First 1/3 Section */}
        <div className="col-md-4 mb-4">
          <img
            src={accreditationIcon}
            alt="Accreditation Icon"
            style={{ height: '60px', marginBottom: '1rem' }}
          />
          <h5 style={{ color: 'red' }}>Accreditation & Compliance</h5>
          <p className="text-muted">
Bring real-time monitoring for all users’ accreditation requirements for continuous quality improvement          </p>
  <button
        className="btn px-4 py-2 rounded-pill"
        style={{ backgroundColor: 'white', color: 'black', border: '1px solid black' }}
        onClick={() => navigate('/learn-more')}
      >Learn More</button>

        </div>
      



          <div className="col-md-4 mb-4">
          <img
            src={accreditationIcon1}
            alt="Accreditation Icon1"
            style={{ height: '60px', marginBottom: '1rem' }}
          />
          <h5 style={{ color: 'red' }}>ILMS</h5>
          <p className="text-muted">
Customise the learning system by giving users a unified platform for all academic needs with easy-to-use technology          </p>
    <button
        className="btn px-4 py-2 rounded-pill"
        style={{ backgroundColor: 'white', color: 'black', border: '1px solid black' }}
        onClick={() => navigate('/learn-more')}
      >Learn More</button>

        </div>


          <div className="col-md-4 mb-4">
          <img
            src={accreditationIcon2}
            alt="Accreditation Icon2"
            style={{ height: '60px', marginBottom: '1rem' }}
          />
          <h5 style={{ color: 'red' }}>Exam Managemnet System</h5>
          <p className="text-muted">
Streamline the examination process with Interactive Examinations, Live Proctoring, and Exam Evaluation modules</p>
    <button
        className="btn px-4 py-2 rounded-pill"
        style={{ backgroundColor: 'white', color: 'black', border: '1px solid black' }}
        onClick={() => navigate('/learn-more')}
      >Learn More</button>

        </div>

       
      </div>
    </div>
  );
}

export default HeroSection2;
