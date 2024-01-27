// code with bugs

export const getMaxNumber = (numbers: number[]) => {
  let maxNumber = numbers[0];
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }
  return maxNumber;
};
