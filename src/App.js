import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Perbarui impor
import './App.css';
import PasswordGenerator from './Pages/PasswordGenerator';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/password-generator">Generate Password</Link>
            </li>
          </ul>
        </nav>
        <Routes> {/* Ganti dari <Switch> menjadi <Routes> */}
          <Route path="/password-generator" element={<PasswordGenerator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
