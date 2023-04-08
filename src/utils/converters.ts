export const convertThreeDigitNumber = (number: number): any => {
  if (number < 100) {
    return `00${number}`.slice(-3);
  } else {
    return number;
  }
};

export const getIdFromUrl = (url: string) => {
  return Number(url.slice(34, -1));
};

export const getPageFromURLPath = (url: String | undefined) => {
  if (!url) return;
  return Number(url.slice(41, -9));
};
