const ViewPreviousIntakeFormsPage = () => {
    let testData = localStorage.getItem('intakeFormDataArray');
    testData = JSON.parse(testData);
    let rTestData = testData.toReversed();
  return(
    <div>
      {rTestData?.map((intake) => (
        <div>
          <form className="PreviousIntakeForm">
            <div className="RadioOptions">
              <div className="IncidentLocation">Incident Location: {intake.Incident_Loc}</div>
            </div>
            <div className="PainSelectors">
              <div>Pain Level: {intake.Pain_Level}</div>
            </div>
            <div className="EmergencySelectors">
              <div>Emergency Level: {intake.Emergency_Level}</div>
            </div>
            <div>
              <div>Describe Symptoms:</div>
              <label>
                <textarea value={intake.Symptoms} readOnly></textarea>
              </label>
            </div>
            <div>
              <div>Provide All Relevant Information:</div>
              <label>
                <textarea value={intake.Rel_Information} readOnly></textarea>
              </label>
            </div>
          </form>
        <footer className="Date">
          <p>Date Uploaded {intake.dateUploaded} {intake.timeUploaded} </p>
        </footer>
      </div>
      ))}
    </div>
    
  );
};

export default ViewPreviousIntakeFormsPage;
