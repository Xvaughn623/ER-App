import './HomePage.css';
import React from 'react';
const HomePage = () => {
        return (
            <div>
                <div className="MainPage">
                    <div className='WelcomeText'>
                        Welcome to The Hospital Triage!
                    </div>
                    <div className='blackButtonContainer'>
                        <button className='BlackButton'>Personal Information</button>
                        <button className='BlackButton'>Nearby Hospitals</button>
                    </div>
                    
                    <div>Forms</div>
                    <div>
                        <button className='GreyButton'>NEW INTAKE FORM</button>
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