import './HomePage.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
        return (
            <div>
                <div className="MainPage">
                    <div className='WelcomeText'>
                        Welcome to The Hospital Triage!
                    </div>
                    <div className='blackButtonContainer'>
                        <button onClick={() => navigate("/userprofile")} className='BlackButton'>Personal Information</button>
                        <button onClick={() => navigate("/nearbyhospitals")} className='BlackButton'>Nearby Hospitals</button>
                    </div>
                    <div><strong>Forms</strong></div>
                    <div>
                        <button onClick={() => navigate("/Intake")} className='GreyButton'>New Intake Form</button>
                        <button className='GreyButton'>View Previous Intake Forms</button>
                        <button className='GreyButton'>Update Medical History</button>
                        <button className='GreyButton'>View Medical History</button>
                        <button onClick={() => navigate("/TransmissionConfirmation")} className='GreyButton'>Upload Forms and Documents</button>
                    </div>
                </div>
            </div>
        )
}

export default HomePage;