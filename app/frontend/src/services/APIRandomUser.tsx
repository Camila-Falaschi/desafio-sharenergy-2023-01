export const usersList = async () => {
  const response = await fetch(`https://randomuser.me/api/?results=90&seed=abc&inc=picture,name,email,login,dob`);
  return response.json();
};

export const usersListByPage = async (pageNumber: number) => {
  const response = await fetch(`https://randomuser.me/api/?page=${pageNumber}&results=9&seed=abc&inc=picture,name,email,login,dob`);
  return response.json();
};