export const isExpired = (expiryDate: Date) => {
  const today = new Date();

  return expiryDate < today;
};
