export function getCalibrationValue(string: string) {
  return +[...string].reduce((acc, curr) => {
    if (isNaN(+curr)) return acc;

    return acc.length === 0 ? `${curr}${curr}` : `${acc[0]}${curr}`;
  }, '');
}
