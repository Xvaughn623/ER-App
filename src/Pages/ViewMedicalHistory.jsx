import './MedicalHistory.css';
const ViewMedicalHistory = () => {
    let testData = localStorage.getItem('medicalFormDataArray');
    testData = JSON.parse(testData);
    let rTestData = testData.toReversed();
  return(
    <div>
      {rTestData?.map((medicalHistory) => (
        <div>
        <form className="MedicalHistory">
          <div className="">
            <div>First Name:</div> 
            <input value={medicalHistory.firstName} type="text" readOnly/>
          </div>
          <div className="">
            <div>Last Name:</div> 
            <input value={medicalHistory.lastName} type="text"/>
          </div>
          <div className="">
            <div>Middle Name:</div>  
            <input value={medicalHistory.middleName} type="text"/>
          </div>
          <div className="">
            <div>Sex:</div> 
            <input value={medicalHistory.sex} type="text"/>
          </div>
          <div className="">
            <div>Date of Birth:</div> 
            <input value={medicalHistory.dob} />
          </div>
          <div className="">
            <div>Current Medication:</div>
            <textarea value={medicalHistory.currentMedication}></textarea>
          </div>
          <div className="">
            <div>Vaccination History:</div>
            <textarea value={medicalHistory.vaccinationHistory}></textarea>
          </div>
          <div className="">
            <div>Allergies: </div>
            <textarea value={medicalHistory.allergies}></textarea>
          </div>
          <div className="">
            <div>Sexual History:</div>
            <textarea value={medicalHistory.sexualHistory}></textarea>
          </div>
          <div className="">
            <div>previousProviders:</div>
            <textarea value={medicalHistory.previousProviders}></textarea>
          </div>
          <div className="">
            <div>Travel/Military History:</div>
            <textarea value={medicalHistory.travelMilitaryHistory}></textarea>
          </div>
          <div className="">
            <div>Family Medical History:</div>
            <textarea value={medicalHistory.familyHistory}></textarea>
          </div>
          <div className="">
            <div>Women’s Health History:</div>
            <textarea value={medicalHistory.womensHistory}></textarea>
          </div>
        </form>
        <footer className="Date">
          <p>Date Uploaded: {medicalHistory.dateUploaded} {medicalHistory.timeUploaded}</p>
        </footer>
      </div>
      ))}
    </div>
    
  );
};

export default ViewMedicalHistory;
