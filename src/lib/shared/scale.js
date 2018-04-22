import DecimalAdjust from './decimal-adjust';

const Scale = (
  val = 1,
  config = {
    containerHeight: 40,
    fontSize: 22,
    fontRatio: 0.78, // ratio of uppercase font to lower
    logoHeight: 21,
    paddingTB: 4, // padding to align icon with center
    paddingRatio: 2, // ratio of padding width to height
  },
) => {
  const fontSizeUpper = config.fontSize * config.fontRatio;
  const paddingLR = config.paddingTB * config.paddingRatio;
  const scale = !Number.isNaN(val) && Number(val) > 0 ?
    Number(val)
    :
    1;
  return {
    containerScale: DecimalAdjust(scale * config.containerHeight),
    fontSize: DecimalAdjust(scale * config.fontSize),
    fontSizeUpper: DecimalAdjust(scale * fontSizeUpper),
    logoHeight: DecimalAdjust(scale * config.logoHeight),
    paddingTB: DecimalAdjust(scale * config.paddingTB),
    paddingLR: DecimalAdjust(scale * paddingLR),
  };
};
export default Scale;
