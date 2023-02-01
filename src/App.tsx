

import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import TransmissionConfirmation from './Pages/TransmissionConfirmation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/transmission-confirmation" element={
          <TransmissionConfirmation
            fileName="FileName.pdf"
            transactionId="123456"
            timeUploaded="01/24/2023, 18:03:33 EST"
            timeReceived="01/24/2023, 18:04:03 EST"
          />
        } />
      </Routes>
    </div>
  );
}

export default App;
