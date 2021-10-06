export const getUserInformation = (userId) => {
  const users = [
    { userName: "John",  userId: 1, userStatus: "active"},
    { userName: "James", userId: 2, userStatus: "inActive"}
  ];
  return users.find(user => user.userId === userId);
}