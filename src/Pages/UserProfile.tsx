import React from 'react';
import './UserProfile.css';
// import logo from './logo.png';

type UserProfileProps = {
  name: string;
  dob: string;
  height: string;
  weight: string;
  sex: string;
  phoneNumber: string;
  address: string;
  emailAddress: string;
  emergencyContactName: string;
  emergencyContactPhoneNumber: string;
  emergencyContactemailAddress: string;
  emergencyContactAddress: string;
  emergencyContactDob: string;
  insuranceCoverageDate: string;
  insuranceGroup: string;
  insuranceMemberID: string;
  CoInsurance: string;
};

function UserProfile(props: UserProfileProps) {
  return (
    <div className="userprofile-container">
      <h2>Personal Information</h2>
      <div className="userprofile-data-container">
        <p><b>Name:</b> {props.name}</p>
        <p><b>Date of Birth:</b> {props.dob}</p>
        <p><b>Height:</b> {props.height}</p>
        <p><b>Weight:</b> {props.weight}</p>
        <p><b>Sex:</b> {props.sex}</p>
        <p><b>Phone Number:</b> {props.phoneNumber}</p>
        <p><b>Address:</b> {props.address}</p>
        <p><b>Email Address:</b> {props.emailAddress}</p>
      </div>
      <h2>Emergency Contact Information</h2>
      <div className="emergency-contact-container">
        <div className="emergency-contact-box">
          <p><b>Name:</b> {props.emergencyContactName}</p>
        </div>
        <div className="emergency-contact-box">
          <p><b>Date of Birth:</b> {props.emergencyContactDob}</p>
        </div>
        <div className="emergency-contact-box">
          <p><b>Phone Number:</b> {props.emergencyContactPhoneNumber}</p>
        </div>
        <div className="emergency-contact-box">
          <p><b>Address:</b> {props.emergencyContactAddress}</p>
        </div>
        <div className="emergency-contact-box">
          <p><b>Email Address:</b> {props.emergencyContactemailAddress}</p>
        </div>
      </div>
      <h2>Insurance Information</h2>
      <div className="insurance-container">
        <div className="insurance-box">
          <p><b>Coverage Date:</b> {props.insuranceCoverageDate}</p>
        </div>
        <div className="insurance-box">
          <p><b>Group:</b> {props.insuranceGroup}</p>
        </div>
        <div className="insurance-box">
          <p><b>Member ID:</b> {props.insuranceMemberID}</p>
        </div>
        <div className="insurance-box">
          <p><b>Co-Insurance Information:</b> {props.CoInsurance}</p>
        </div>
         {/* <img src={logo} alt="Logo" className="logo" /> */}
      </div>
    </div>
  );
}

export default UserProfile;
