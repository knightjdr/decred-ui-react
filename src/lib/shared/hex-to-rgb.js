const HexToRgb = (
  hex = 'fff',
  opacity = 1,
) => {
  // Expand shorthand form
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const hexTransform = hex.replace(shorthandRegex, (m, r, g, b) => (
    r + r + g + g + b + b
  ));
  const result = hexTransform.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/);
  const red = result && result[1] ? parseInt(result[1], 16) : 255;
  const green = result && result[2] ? parseInt(result[2], 16) : 255;
  const blue = result && result[3] ? parseInt(result[3], 16) : 255;
  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
};
export default HexToRgb;
