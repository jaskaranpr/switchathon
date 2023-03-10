export const rangeFunction = (
    value: number,
    min1: number,
    max1: number,
    min2: number,
    max2: number
  ) => {
    return ((value - min1) / (max1 - min1)) * (max2 - min2) + min2;
  };