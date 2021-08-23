const ChiSqTest = require('chi-sq-test');

export const getPValue = (
  numOfTestUserForAPattern: number,
  numOfTestUserForBPattern: number,
  numOfConversionUserForAPattern: number,
  numOfConversionUserForBPattern: number
) => {
  const { pValue } = ChiSqTest.independence(
    [
      [
        numOfConversionUserForAPattern,
        numOfTestUserForAPattern - numOfConversionUserForAPattern,
      ],
      [
        numOfConversionUserForBPattern,
        numOfTestUserForBPattern - numOfConversionUserForBPattern,
      ],
    ],
    0
  );
  return pValue;
};
