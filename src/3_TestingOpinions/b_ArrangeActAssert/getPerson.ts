export const getPerson = (id: number) => {
  const person = {
    id,
    firstName: "Sam",
    lastName: "Smith",
  };

  return {
    ...person,
    fullName: `${person.firstName} ${person.lastName}`,
  };
};
