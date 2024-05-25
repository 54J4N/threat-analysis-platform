import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import SubmissionForm from './components/SubmissionForm';
import LoginForm from './components/LoginForm';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <Router>
      <CssBaseline /> {/* Normalize the CSS */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/submit" element={<SubmissionForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
