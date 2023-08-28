import './Intake.css';
import React from 'react';
import fd from '../Data/FormDataExample.json';
import { useSelector, useDispatch } from 'react-redux';
import addNewIntakeForm from '../redux';
const intakeFormDataArray = [];

const Intake = () => {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    let temp = formDataJSON();
    let currentTime = new Date();
    temp.Incident_Loc = event.target.IncidentLocation.value;
    temp.Symptoms = event.target.Symptoms.value;
    temp.Rel_Information = event.target.Rel_Information.value;
    temp.Pain_Level = event.target.Pain_Level.value;
    temp.Emergency_Level = event.target.Emergency_Level.value;
    temp.dateUploaded = currentTime.toLocaleDateString();
    temp.timeUploaded = currentTime.toLocaleTimeString();
    setIntakeFormDataArray(temp);
  };

  const setIntakeFormDataArray = (intakeObject) => {
    intakeFormDataArray.push(intakeObject);
    localStorage.setItem('intakeFormDataArray', JSON.stringify(intakeFormDataArray));
    let testData = localStorage.getItem('intakeFormDataArray');
    console.log("testing getting data Array:", testData);
  };
  function formDataJSON() {
    return {
      'Incident_Loc': '',
      'Pain_Level': '',
      'Emergency_Level': '',
      'Symptoms': '',
      'Rel_Information': '',
      'dateUploaded': '',
      'timeUploaded': '',
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="IntakeForm">
        <div className="RadioOptions" defaultValue="testing">
          <div className="IncidentLocation">Incident Location: </div>
          <label>
            <input
              type="radio"
              name="IncidentLocation"
              className="radio radio-primary"
              value="head"
            />
            Head
          </label>
          <label>
            <input type="radio" name="IncidentLocation" value="chest" />
            Chest
          </label>
          <label>
            <input type="radio" name="IncidentLocation" value="left-arm" />
            Left Arm
          </label>
          <label>
            <input type="radio" name="IncidentLocation" value="right-arm" />
            Right Arm
          </label>
          <label>
            <input type="radio" name="IncidentLocation" value="left-hand" />
            Left Hand
          </label>
          <label>
            <input type="radio" name="IncidentLocation" value="right-hand" />
            Right Hand
          </label>
          <label>
            <input type="radio" name="IncidentLocation" value="left-leg" />
            Left Leg
          </label>
          <label>
            <input type="radio" name="IncidentLocation" value="right-leg" />
            Right Leg
          </label>
          <label>
            <input type="radio" name="IncidentLocation" value="left-foot" />
            Left Foot
          </label>
          <label>
            <input type="radio" name="IncidentLocation" value="right-foot" />
            Right Foot
          </label>
          <label>
            <input type="radio" name="IncidentLocation" value="upper-back" />
            Upper Back
          </label>
          <label>
            <input type="radio" name="IncidentLocation" value="lower-back" />
            Lower Back
          </label>
        </div>
        <div className="PainSelectors">
          <div>Pain Level: </div>
          <label>
            1<input type="radio" name="Pain_Level" className="radio radio-secondary" value="1" />
          </label>
          <label>
            2<input type="radio" name="Pain_Level" className="radio radio-secondary" value="2" />
          </label>
          <label>
            3<input type="radio" name="Pain_Level" className="radio radio-secondary" value="3" />
          </label>
          <label>
            4<input type="radio" name="Pain_Level" className="radio radio-secondary" value="4" />
          </label>
          <label>
            5<input type="radio" name="Pain_Level" className="radio radio-secondary" value="5" />
          </label>
          <label>
            6<input type="radio" name="Pain_Level" className="radio radio-secondary" value="6" />
          </label>
          <label>
            7<input type="radio" name="Pain_Level" className="radio radio-secondary" value="7" />
          </label>
          <label>
            8<input type="radio" name="Pain_Level" className="radio radio-secondary" value="8" />
          </label>
          <label>
            9<input type="radio" name="Pain_Level" className="radio radio-secondary" value="9" />
          </label>
          <label>
            10
            <input type="radio" name="Pain_Level" className="radio radio-secondary" value="10" />
          </label>
        </div>

        <div className="EmergencySelectors">
          <div>Emergency Level: </div>
          <label>
            1
            <input type="radio" name="Emergency_Level" className="radio radio-tertiary" value="1" />
          </label>
          <label>
            2
            <input type="radio" name="Emergency_Level" className="radio radio-tertiary" value="2" />
          </label>
          <label>
            3
            <input type="radio" name="Emergency_Level" className="radio radio-tertiary" value="3" />
          </label>
          <label>
            4
            <input type="radio" name="Emergency_Level" className="radio radio-tertiary" value="4" />
          </label>
          <label>
            5
            <input type="radio" name="Emergency_Level" className="radio radio-tertiary" value="5" />
          </label>
          <label>
            6
            <input type="radio" name="Emergency_Level" className="radio radio-tertiary" value="6" />
          </label>
          <label>
            7
            <input type="radio" name="Emergency_Level" className="radio radio-tertiary" value="7" />
          </label>
          <label>
            8
            <input type="radio" name="Emergency_Level" className="radio radio-tertiary" value="8" />
          </label>
          <label>
            9
            <input type="radio" name="Emergency_Level" className="radio radio-tertiary" value="9" />
          </label>
          <label>
            10
            <input
              type="radio"
              name="Emergency_Level"
              className="radio radio-tertiary"
              value="10"
            />
          </label>
        </div>
        <div>
          <div>Describe Symptoms:</div>
          <label>
            <textarea name="Symptoms"></textarea>
          </label>
        </div>
        <div>
          <div>Provide All Relevant Information:</div>
          <label>
            <textarea name="Rel_Information"></textarea>
          </label>
        </div>
        <button className="btn" type="submit" onClick={() => dispatch(addNewIntakeForm)}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Intake;
