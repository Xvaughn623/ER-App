import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import TransmissionConfirmation from './Pages/TransmissionConfirmation';
import NearbyHospitals from './Pages/NearbyHospitals';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/transmission-confirmation" element={
          <TransmissionConfirmation
            fileName="Forms Uploaded.pdf"
            transactionId=" 123456"
            timeUploaded=" 01/24/2023, 18:03:33 EST"
            timeReceived=" 01/24/2023, 18:04:03 EST"
          />
        } />
        <Route path="/nearby-hospitals" element={<NearbyHospitals />} />
      </Routes>
    </div>
  );
}

export default App;

