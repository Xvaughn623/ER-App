import React from 'react';
import './TransmissionConfirmation.css';

interface Props {
  fileName: string;
  transactionId: string;
  timeUploaded: string;
  timeReceived: string;
}

const TransmissionConfirmation: React.FC<Props> = ({ fileName, transactionId, timeUploaded, timeReceived }) => {
  return (
    <div className="transmission-confirmation">
      <img src="https://flic.kr/p/2oeDR9A" alt="Logo" />
      <h2>File Upload Confirmation</h2>
      <div className="file-info">
          <span>Forms Uploaded:</span>
        <ul>
          <li>Personal Information Form</li>
          <li>Latest Intake Form</li>
          <li>Medical History Form</li>
        </ul>
      </div>
      <div className="transaction-info">
        <span>Transaction ID:</span>
        {transactionId}
      </div>
      <div className="transaction-info">
        <span>Time Uploaded:</span>
        {timeUploaded}
      </div>
      <div className="transaction-info">
        <span>Time Received:</span>
        {timeReceived}
      </div>
      <div className="status">Status: Successfully Received!</div>
    </div>
  );
};

export default TransmissionConfirmation;
