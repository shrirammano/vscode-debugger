export const getUserInformation = (userId: string) => {
  const users = [
    { userName: "John",  userId: "1", acknowledgementDate: "1/10/2021"},
    { userName: "James", userId: "2", acknowledgementDate: "10/10/2021"}
  ];
  return users.find(user => user.userId === userId);
}