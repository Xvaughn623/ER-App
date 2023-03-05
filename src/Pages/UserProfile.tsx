import React from 'react';
import './UserProfile.css';
// import logo from './logo.png';
import { UserProfileProps } from '../Data/data';

function UserProfile(props: UserProfileProps) {
  return (
    <div className="userprofile-container">
      <h2>Personal Information</h2>
      <div className="userprofile-data-container">
        <p><b>Name:</b> {props.Name}</p>
        <p><b>Date of Birth:</b> {props.Dob}</p>
        <p><b>Height:</b> {props.Height}</p>
        <p><b>Weight:</b> {props.Weight}</p>
        <p><b>Sex:</b> {props.Sex}</p>
        <p><b>Phone Number:</b> {props.Phone_Number}</p>
        <p><b>Address:</b> {props.Address}</p>
        <p><b>Email Address:</b> {props.Email_Address}</p>
      </div>
      <h2>Emergency Contact Information</h2>
      <div className="emergency-contact-container">
        <div className="emergency-contact-box">
          <p><b>Name:</b> {props.emergencyContactInformation.Name}</p>
        </div>
        <div className="emergency-contact-box">
          <p><b>Date of Birth:</b> {props.emergencyContactInformation.Dob}</p>
        </div>
        <div className="emergency-contact-box">
          <p><b>Phone Number:</b> {props.emergencyContactInformation.Phone_Number}</p>
        </div>
        <div className="emergency-contact-box">
          <p><b>Address:</b> {props.emergencyContactInformation.Address}</p>
        </div>
        <div className="emergency-contact-box">
          <p><b>Email Address:</b> {props.emergencyContactInformation.Email_Address}</p>
        </div>
      </div>
      <h2>Insurance Information</h2>
      <div className="insurance-container">
        <div className="insurance-box">
          <p><b>Coverage Date:</b> {props.Coverage_Date}</p>
        </div>
        <div className="insurance-box">
          <p><b>Group:</b> {props.Group}</p>
        </div>
        <div className="insurance-box">
          <p><b>Member ID:</b> {props.MemberID}</p>
        </div>
        <div className="insurance-box">
          <p><b>Co-Insurance Information:</b> {props.CoInsuranceInformation}</p>
        </div>
         {/* <img src={logo} alt="Logo" className="logo" /> */}
      </div>
    </div>
  );
}

export default UserProfile;
