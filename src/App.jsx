// App.jsx

import { Routes, Route } from 'react-router-dom';
import Home from './homePage/Home';
import LearnMorePage from './homePage/LearnMorePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/learn-more" element={<LearnMorePage />} />
    </Routes>
  );
}

export default App;
