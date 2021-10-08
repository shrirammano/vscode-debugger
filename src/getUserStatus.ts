import { getUserInformation } from "./userInformation";
import moment from "moment";

export const getUserStatus = (userId: string) => {
  const userInformation = getUserInformation(userId);
  if(!userInformation) return;

  const currentDate = moment();
  const userStatus = moment(userInformation.acknowledgementDate).isValid() && currentDate.diff(userInformation.acknowledgementDate, "days") < 365 ? "Active" : "Inactive";
  return {
    ...userInformation,
    userStatus
  };
}
