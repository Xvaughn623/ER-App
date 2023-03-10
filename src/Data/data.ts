import emergencyContactInformation from "./EmergencyContactInformation.json";
import insuraceInformation from "./InsuranceInformation.json";
import personalInfo from "./PersonalInfo.json";

export const userProfileProps = {
    emergencyContactInformation,
    ...insuraceInformation,
    ...personalInfo
  };



export type UserProfileProps = typeof userProfileProps;