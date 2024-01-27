const hardToTest = (fullName: string, DOB: string) => {
  return {
    firstName: fullName.split(" ")[0],
    lastName: fullName.split(" ")[1],
    age: new Date(DOB).getFullYear() - new Date().getFullYear(),
  };
};
