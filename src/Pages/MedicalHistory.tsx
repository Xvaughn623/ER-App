import React, { useState } from 'react';
import './MedicalHistory.css';

const MedicalHistory = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    middleInitial: '',
    sex: '',
    dob: '',
    currentMedication: '',
    vaccinationHistory: '',
    allergies: '',
    sexualHistory: '',
    previousProviders: '',
    travelMilitaryHistory: '',
    familyHistory: '',
    womensHistory: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  

  return (
    <form className="MedicalHistory" onSubmit={handleSubmit}>
      <div>
        <div>First Name:</div>
        <label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </label>
      </div>
      <div>
        <div>Last Name:</div>
        <label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </label>
      </div>
      <div>
        <div>Middle Initial:</div>
        <label>
          <input type="text" name="middleInitial" value={formData.middleInitial} onChange={handleChange} />
        </label>
      </div>
      <div>
        <div>Sex:</div>
        <label>
          <input type="text" name="sex" value={formData.sex} onChange={handleChange} />
        </label>
      </div>
      <div>
        <div>Date of Birth:</div>
        <label>
          <input type="text" name="dob" value={formData.dob} onChange={handleChange} />
        </label>
      </div>
      <div>
        <div>Current Medication:</div>
        <label>
          <textarea name="currentMedication" value={formData.currentMedication} onChange={handleChange}></textarea>
        </label>
      </div>
      <div>
        <div>Vaccination History:</div>
        <label>
          <textarea name="vaccinationHistory" value={formData.vaccinationHistory} onChange={handleChange}></textarea>
        </label>
      </div>
      <div>
        <div>Known Allergies:</div>
        <label>
          <textarea name="allergies" value={formData.allergies} onChange={handleChange}></textarea>
        </label>
      </div>
      <div>
        <div>Sexual History:</div>
        <label>
          <textarea name="sexualHistory" value={formData.sexualHistory} onChange={handleChange}></textarea>
        </label>
      </div>
      <div>
        <div>Previous Providers/Specialists:</div>
        <label>
          <textarea name="previousProviders" value={formData.previousProviders} onChange={handleChange}></textarea>
        </label>
      </div>
      <div>
        <div>Travel/Military History:</div>
        <label>
          <textarea name="travelMilitaryHistory" value={formData.travelMilitaryHistory} onChange={handleChange}></textarea>
        </label>
      </div>
      <div>
        <div>Familiy Medical History:</div>
        <label>
          <textarea name="familyHistory" value={formData.familyHistory} onChange={handleChange}></textarea>
        </label>
      </div>
      <div>
        <div>Women’s Health History:</div>
        <label>
          <textarea name="womensHistory" value={formData.womensHistory} onChange={handleChange}></textarea>
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MedicalHistory;
