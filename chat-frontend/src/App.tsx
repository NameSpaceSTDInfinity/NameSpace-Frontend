import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Dashboard from './pages/Dashboard';
import Documents from './pages/Documents';
import SignUp from './pages/SignUp';
import Speedometer from './components/Speedometer';
import Upload from './components/Upload';
import Avatar from './components/Avatar';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={
          <div>
            <div className="flex justify-center p-4">
              <Avatar />
            </div>
            <Speedometer />
            <Upload />
          </div>
        } />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
