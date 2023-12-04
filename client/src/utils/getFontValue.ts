export const remToPx = (value: string) => {
  return Math.round(parseFloat(value) * 16);
};

export const pxToRem = (value: number) => {
  return `${value / 16}rem`;
};
