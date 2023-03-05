import * as emergencyContactInformation from "./EmergencyContactInformation.json";
import * as insuraceInformation from "./InsuranceInformation.json";
import * as personalInfo from "./PersonalInfo.json";

export const userProfileProps = {
    emergencyContactInformation,
    ...insuraceInformation,
    ...personalInfo
  };



export type UserProfileProps = typeof userProfileProps;