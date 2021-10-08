import { getUserInformation } from "./userInformation";
import moment from "moment";

export const getUserStatus = (userId: string) => {
  const userInformation = getUserInformation(userId);
  if(!userInformation) return;

  const currentDate = moment();
  const userStatus = moment(userInformation.certifiedDate).isValid() && currentDate.diff(userInformation.certifiedDate, "days") < 365 ? "Active" : "Inactive";
  return {
    ...userInformation,
    userStatus
  };
}
