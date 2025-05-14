import { Routes, Route } from 'react-router-dom';

import Home from './homePage/Home';
import LearnMorePage from './homePage/LearnMorePage';
import File1 from './file/file1';
import File2 from './file/file2';
import File3 from './file/file3';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/learn-more" element={<LearnMorePage />} />
      <Route path="/file1" element={<File1 />} />
      <Route path="/file2" element={<File2 />} />
      <Route path="/file3" element={<File3 />} />
    </Routes>
  );
}

export default App;
