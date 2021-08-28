export const isHigherThanZero = (num: number | null) => {
  return (num || 0) > 0;
};

//
// export const isHigherThanZero = (
//   numOfTestUserForAPattern: number | null,
//   numOfTestUserForBPattern: number | null,
//   numOfConversionUserForAPattern: number | null,
//   numOfConversionUserForBPattern: number | null
// ) => {
//
//   return (
//     isHigherThanZero(numOfTestUserForAPattern) &&
//     isHigherThanZero(numOfTestUserForBPattern) &&
//     isHigherThanZero(numOfConversionUserForAPattern) &&
//     isHigherThanZero(numOfConversionUserForBPattern)
//   );
// };
//
// export const updateChiState = (isFivePercent: boolean): ChiState => {
//   // P値
//   // const pValue = getPValue(
//   //   numOfTestUserForAPattern,
//   //   numOfTestUserForBPattern,
//   //   numOfConversionUserForAPattern,
//   //   numOfConversionUserForBPattern
//   // );
//
//   // 空の値が存在する場合、コンバージョン確率を計算しない
//   if (
//     numOfTestUserForAPattern === null ||
//     numOfTestUserForBPattern === null ||
//     numOfConversionUserForAPattern === null ||
//     numOfConversionUserForBPattern === null
//   ) {
//     return {
//       isFivePercent,
//       numOfTestUserForAPattern,
//       numOfTestUserForBPattern,
//       numOfConversionUserForAPattern,
//       numOfConversionUserForBPattern,
//       conversionRateForAPattern: null,
//       conversionRateForBPattern: null,
//     };
//   }
//
//   // コンバージョン確率(A)
//   const updatedConversionRateForAPattern =
//     numOfConversionUserForAPattern / numOfTestUserForAPattern;
//
//   // コンバージョン確率(B)
//   const updatedConversionRateForBPattern =
//     numOfConversionUserForBPattern / numOfTestUserForBPattern;
//
//   // const message =
//   //   updatedConversionRateForAPattern === updatedConversionRateForBPattern ||
//   //   pValue >= (isFivePercent ? 0.05 : 0.01)
//   //     ? UNDETERMINED
//   //     : DETERMINED;
//
//   return {
//     isFivePercent,
//     numOfTestUserForAPattern,
//     numOfTestUserForBPattern,
//     numOfConversionUserForAPattern,
//     numOfConversionUserForBPattern,
//     conversionRateForAPattern: updatedConversionRateForAPattern,
//     conversionRateForBPattern: updatedConversionRateForBPattern,
//   };
// };
