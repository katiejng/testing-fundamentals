const mockDelay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const fetchUser = async (id: string) => {
  return mockDelay(10000).then(() => ({
    id,
    firstName: "Sam",
    lastName: "Smith",
  }));
};
