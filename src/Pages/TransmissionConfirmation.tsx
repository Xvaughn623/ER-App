import './TransmissionConfirmation.css';
import React from 'react';

interface Props {
  fileName: string;
  transactionId: string;
  timeUploaded: string;
  timeReceived: string;
}

const TransmissionConfirmation: React.FC<Props> = ({ fileName, transactionId, timeUploaded, timeReceived }) => {
  return (
    <div className="transmission-confirmation">
      <img src="logo.png" alt="logo" />
      <h1>File Uploaded Successfully!</h1>
      <p>Transaction ID: {transactionId}</p>
      <p>The following files have been uploaded:</p>
      <ul>
        <li>Personal Information</li>
        <li>Latest Intake Form</li>
        <li>Medical History</li>
      </ul>
      <p>Time uploaded: {timeUploaded}</p>
      <p>Time received: {timeReceived}</p>
      <p>Status: Successfully received</p>
    </div>
  );
};

export default TransmissionConfirmation;
