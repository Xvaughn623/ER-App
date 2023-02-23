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
                    <div>Forms</div>
                    <div>
                        <button onClick={() => navigate("/Intake")} className='GreyButton'>NEW INTAKE FORM</button>
                        <button className='GreyButton'>UPDATE MEDICAL HISTORY</button>
                        <button className='GreyButton'>VIEW PREVIOUS INTAKE FORMS</button>
                        <button className='GreyButton'>VIEW MEDICAL HISTORY</button>
                        <button className='GreyButton'>CLICK HERE TO UPLOAD FORMS</button>
                    </div>
                </div>
            </div>
        )
}

export default HomePage;