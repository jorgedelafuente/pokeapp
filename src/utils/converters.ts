export const convertThreeDigitNumber = (number: number): any => {
  if (number < 100) {
    return `00${number}`.slice(-3);
  } else {
    return number;
  }
};
