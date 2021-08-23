export const round = function (target: number, digit: number): number {
  const divide = 10 ** digit;
  return Math.ceil(target * divide) / divide;
};
