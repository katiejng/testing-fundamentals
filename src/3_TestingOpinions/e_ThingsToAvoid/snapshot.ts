export const getPerson = () => {
  return {
    id: 1,
    firstName: "Sam",
    lastName: "Smith",
    fullName: "Sam Smith",
    company: {
      name: "SEEK",
      phone: "1234567890",
    },
    age: {
      dob: "01/01/1990",
      startDate: "01/01/2010",
    },
  };
};

export const getFullname = () => ({ fullname: "Sam Smith" });
