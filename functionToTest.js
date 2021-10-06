import { getUserInformation } from "./userInformation.js";

export const functionToTest = (userInfoRequest) => {
  const { userId } = userInfoRequest;
  const userInformation = getUserInformation(userId);
  return userInformation?.userStatus ?? "inactive";
}

functionToTest({userId: "1"});