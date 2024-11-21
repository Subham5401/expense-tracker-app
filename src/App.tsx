import React from 'react';
import Profile from './pages/Profile/Profile';
import Settings from './pages/Settings/Settings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}
