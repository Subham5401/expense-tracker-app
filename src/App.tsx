import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile/Profile';
import Settings from './pages/Settings/Settings';
import Transactions from './pages/Transactions/Transactions';
import Income from './pages/Income/Income';
import Expense from './pages/Expense/Expense';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/income' element={<Income />} />
          <Route path='/expense' element={<Expense />} />
        </Routes>
      </div>
    </Router>
  );
}
