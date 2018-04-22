// crude but quick rounding
const expimalAdjust = (num, exp = 2) => {
  if (
    !Number.isInteger(exp) ||
    exp < 0
  ) {
    return num;
  }
  const mult = 10 ** exp;
  return Math.round(num * mult) / mult;
};
export default expimalAdjust;
