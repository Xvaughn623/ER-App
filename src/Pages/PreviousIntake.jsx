import React from 'react';
import './PreviousIntake.css';

const PreviousIntake = (props) => {
  return (
    <div>
      <form className="PreviousIntakeForm">
        <div className="RadioOptions">
          <div className="IncidentLocation">Incident Location: {props.incidentLocation}</div>
        </div>
        <div className="PainSelectors">
          <div>Pain Level: {props.painLevel}</div>
        </div>

        <div className="EmergencySelectors">
          <div>Emergency Level: {props.emergencyLevel}</div>
        </div>
        <div>
          <div>Describe Symptoms:</div>
          <label>
            <textarea value={props.symptoms} readOnly></textarea>
          </label>
        </div>
        <div>
          <div>Provide All Relevant Information:</div>
          <label>
            <textarea value={props.relevantInfo} readOnly></textarea>
          </label>
        </div>
      </form>
      <footer className="Date">
        <p>Submitted: 03/24/2023, 12:04:03 EST </p>
      </footer>
    </div>
  );
};

export default PreviousIntake;
