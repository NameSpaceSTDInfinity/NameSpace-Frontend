import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Dashboard from './pages/Dashboard';
import Documents from './pages/Documents';
import SignUp from './pages/SignUp';
import GenerateSummary from './pages/GenerateSummary';
import ImageAnalysis from './pages/ImageAnalysis';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/generate-summary" element={<GenerateSummary />} />
        <Route path="/image-analysis" element={<ImageAnalysis />} />
      </Routes>
    </div>
  );
}

export default App;
