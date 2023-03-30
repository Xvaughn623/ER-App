import emergencyContactInformation from "./EmergencyContactInformation.json";
import insuraceInformation from "./InsuranceInformation.json";
import personalInfo from "./PersonalInfo.json";

export const userProfileProps = {
    emergencyContactInformation,
    ...insuraceInformation,
    ...personalInfo
  };

  export const previousIntakeProps = {
    incidentLocation: "Head",
    painLevel: 8,
    emergencyLevel: 8,
    symptoms: "Headache, dizziness, bump/knot on my head",
    relevantInfo: "was playing basketball at the park, went up for a rebound and collided with someone, I fell and hit my head on the ground",
  };


export type UserProfileProps = typeof userProfileProps;