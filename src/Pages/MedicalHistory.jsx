import React, { useState } from 'react';
import './MedicalHistory.css';
const medicalFormDataArray = [];

const MedicalHistory = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    let temp = medicalHistoryJson();
    console.log(event.target.firstName.value);
    temp.firstName = event.target.firstName.value;
    temp.lastName = event.target.lastName.value;
    temp.middleName = event.target.middleName.value;
    temp.sex = event.target.sex.value;
    temp.dob = event.target.dob.value;
    temp.currentMedication = event.target.currentMedication.value;
    temp.vaccinationHistory = event.target.vaccinationHistory.value;
    temp.allergies = event.target.allergies.value;
    temp.sexualHistory = event.target.sexualHistory.value;
    temp.previousProviders = event.target.previousProviders.value;
    temp.travelMilitaryHistory = event.target.travelMilitaryHistory.value;
    temp.familyHistory = event.target.familyHistory.value;
    temp.womensHistory = event.target.womensHistory.value;
    setMedicalFormDataArray(temp);
  };
  const setMedicalFormDataArray = (intakeObject) =>{
    medicalFormDataArray.push(intakeObject);
    localStorage.setItem('medicalFormDataArray',JSON.stringify(medicalFormDataArray));
    let testData = localStorage.getItem('medicalFormDataArray');
    console.log("testing getting data Array:", testData);
    };
  
  function medicalHistoryJson(){
    return{
    'firstName': '',
    'lastName': '',
    'middleName': '',
    'sex': '',
    'dob': '',
    'currentMedication': '',
    'vaccinationHistory': '',
    'allergies': '',
    'sexualHistory': '',
    'previousProviders': '',
    'travelMilitaryHistory': '',
    'familyHistory': '',
    'womensHistory': '',
    }
  };
  
  return (
    <form className="MedicalHistory" onSubmit={handleSubmit}>
      <div>
        <div>First Name:</div>
        <label>
          <input defaultValue={''} type="text" name="firstName" />
        </label>
      </div>
      <div>
        <div>Last Name:</div>
        <label>
          <input defaultValue={''} type="text" name="lastName"/>
        </label>
      </div>
      <div>
        <div>Middle Initial:</div>
        <label>
          <input defaultValue={''} type="text" name="middleName"/>
        </label>
      </div>
      <div>
        <div>Sex:</div>
        <label>
          <input defaultValue={''} type="text" name="sex"/>
        </label>
      </div>
      <div>
        <div>Date of Birth:</div>
        <label>
          <input defaultValue={''}type="text" name="dob"/>
        </label>
      </div>
      <div>
        <div>Current Medication:</div>
        <label>
          <textarea defaultValue={''}name="currentMedication"></textarea>
        </label>
      </div>
      <div>
        <div>Vaccination History:</div>
        <label>
          <textarea defaultValue={''} name="vaccinationHistory"></textarea>
        </label>
      </div>
      <div>
        <div>Known Allergies:</div>
        <label>
          <textarea defaultValue={''} name="allergies"></textarea>
        </label>
      </div>
      <div>
        <div>Sexual History:</div>
        <label>
          <textarea defaultValue={''} name="sexualHistory"></textarea>
        </label>
      </div>
      <div>
        <div>Previous Providers/Specialists:</div>
        <label>
          <textarea defaultValue={''} name="previousProviders"></textarea>
        </label>
      </div>
      <div>
        <div>Travel/Military History:</div>
        <label>
          <textarea defaultValue={''} name="travelMilitaryHistory"></textarea>
        </label>
      </div>
      <div>
        <div>Family Medical History:</div>
        <label>
          <textarea defaultValue={''} name="familyHistory"></textarea>
        </label>
      </div>
      <div>
        <div>Women’s Health History:</div>
        <label>
          <textarea defaultValue={''} name="womensHistory"></textarea>
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MedicalHistory;
