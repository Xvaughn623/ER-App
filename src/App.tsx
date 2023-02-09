import React from 'react';
import './App.css';
import { Route, Routes, Navigate} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import TransmissionConfirmation from './Pages/TransmissionConfirmation';
import Intake from './Pages/TransmissionConfirmation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Intake" element={<Intake fileName={''} transactionId={''} timeUploaded={''} timeReceived={''} />} />
        <Route path="/transmission-confirmation" element={
          <TransmissionConfirmation
            fileName="Forms Uploaded.pdf"
            transactionId=" 123456"
            timeUploaded=" 01/24/2023, 18:03:33 EST"
            timeReceived=" 01/24/2023, 18:04:03 EST"
          />
        } />
        <Route path="*" element={<Navigate to="/Home" />}/>
      </Routes>
    </div>
  );
}

export default App;
