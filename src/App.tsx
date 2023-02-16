import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom'

import HomePage from './Pages/HomePage';
import TransmissionConfirmation from './Pages/TransmissionConfirmation';
import NearbyHospitals from './Pages/NearbyHospitals';
import Intake from './Pages/Intake';
import UserProfile from './Pages/UserProfile';

function App() {
  const userProfileProps = {
    name: 'John Doe Jr',
    dob: '01/01/2000',
    height: '5\'11"',
    weight: '180 lbs',
    sex: 'Male',
    phoneNumber: '555-1234',
    address: '123 Main St, Washington D.C. USA',
    emailAddress: 'johndoejr@example.com',
    emergencyContactName: 'John Doe Sr',
    emergencyContactPhoneNumber: "555-2345",
    emergencyContactemailAddress: 'johndoesr@example.com',
    emergencyContactAddress: '123 Main St, Washington D.C. USA',
    emergencyContactDob: '01/01/1970',
    insuranceCoverageDate: '01/01/2023',
    insuranceGroup: 'HU12345X',
    insuranceMemberID: '554433221',
    CoInsurance: "Hosptial ER: $0"
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/" element={<Intake />} />
        <Route path="/nearbyhospitals" element={<NearbyHospitals />} />
        <Route path="/transmissionconfirmation" element={
          <TransmissionConfirmation
            fileName="Forms Uploaded.pdf"
            transactionId=" 123456"
            timeUploaded=" 01/24/2023, 18:03:33 EST"
            timeReceived=" 01/24/2023, 18:04:03 EST"
          />
        } />
        <Route path="/nearbyhospitals" element={<NearbyHospitals />} />
        <Route path="/userprofile" element={<UserProfile {...userProfileProps} />} />
        <Route path="*" element={<Navigate to="/Home" />}/>
      </Routes>
    </div>
  );
}

export default App;



