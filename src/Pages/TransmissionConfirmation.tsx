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
      <img src="https://via.placeholder.com/100x100" alt="Logo" />
      <h2>File Upload Confirmation</h2>
      <div className="file-info">
        <span>File Name:</span>
        {fileName}
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
      <div className="status">Successfully received</div>
    </div>
  );
};

export default TransmissionConfirmation;
