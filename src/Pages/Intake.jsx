import './Intake.css';
import React from 'react';
const Intake = () => {
    const handleSubmit = (event) =>{
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='IntakeForm'>
                <div className="RadioOptions">
                    <div className='IncidentLocation'>Incident Location: </div>
                    <label><input type='radio' name='radio-1' className='radio radio-primary' value='head'/>Head</label>
                    <label><input type='radio' value='chest'/>Chest</label>
                    <label><input type='radio' value='left-arm'/>Left Arm</label>
                    <label><input type='radio' value='right-arm'/>Right Arm</label>
                    <label><input type='radio' value='left-hand'/>Left Hand</label>
                    <label><input type='radio' value='right-hand'/>Right Hand</label>
                    <label><input type='radio' value='left-leg'/>Left Leg</label>
                    <label><input type='radio' value='right-leg'/>Right Leg</label>
                    <label><input type='radio' value='left-foot'/>Left Foot</label>
                    <label><input type='radio' value='right-foot'/>Right Foot</label> 
                    <label><input type='radio' value='right-foot'/>Upper Back</label> 
                    <label><input type='radio' value='right-foot'/>Lower Back</label>            
                </div>
                <div className='PainSelectors'>
                    <div>Pain Level: </div>
                    <label>1<input type='radio' name='radio-2' className='radio radio-secondary' value='pain1'/></label>
                    <label>2<input type='radio' name='radio-2' className='radio radio-secondary' value='pain2'/></label>
                    <label>3<input type='radio' name='radio-2' className='radio radio-secondary' value='pain3'/></label>
                    <label>4<input type='radio' name='radio-2' className='radio radio-secondary' value='pain4'/></label>
                    <label>5<input type='radio' name='radio-2' className='radio radio-secondary' value='pain5'/></label>
                    <label>6<input type='radio' name='radio-2' className='radio radio-secondary' value='pain6'/></label>
                    <label>7<input type='radio' name='radio-2' className='radio radio-secondary' value='pain7'/></label>
                    <label>8<input type='radio' name='radio-2' className='radio radio-secondary' value='pain8'/></label>
                    <label>9<input type='radio' name='radio-2' className='radio radio-secondary' value='pain9'/></label>
                    <label>10<input type='radio' name='radio-2' className='radio radio-secondary' value='pain10'/></label>
                </div>

                <div className = 'EmergencySelectors'>
                    <div>Emergency Level: </div>
                    <label>1<input type='radio' name='radio-2' className='radio radio-secondary' value='emergency1'/></label>
                    <label>2<input type='radio' name='radio-2' className='radio radio-secondary' value='emergency2'/></label>
                    <label>3<input type='radio' name='radio-2' className='radio radio-secondary' value='emergency3'/></label>
                    <label>4<input type='radio' name='radio-2' className='radio radio-secondary' value='emergency4'/></label>
                    <label>5<input type='radio' name='radio-2' className='radio radio-secondary' value='emergency5'/></label>
                    <label>6<input type='radio' name='radio-2' className='radio radio-secondary' value='emergency6'/></label>
                    <label>7<input type='radio' name='radio-2' className='radio radio-secondary' value='emergency7'/></label>
                    <label>8<input type='radio' name='radio-2' className='radio radio-secondary' value='emergency8'/></label>
                    <label>9<input type='radio' name='radio-2' className='radio radio-secondary' value='emergency9'/></label>
                    <label>10<input type='radio' name='radio-2' className='radio radio-secondary' value='emergency10'/></label>
                </div>
                <div>
                    <div>Describe Symptoms:</div>
                    <label>
                    <textarea></textarea>
                    </label>
                </div> 
                <div>
                    <div>Provide All Relevant Information:</div>
                    <label><textarea></textarea></label>
                </div>
                <button className='btn' type='submit'>Submit</button>
            </form>
        </div>
    )
}


export default Intake;