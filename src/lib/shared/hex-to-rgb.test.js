import HexToRgb from './hex-to-rgb';

const hexColor = '#2971ff';
const rgbaColor = 'rgba(41, 113, 255, 1)';

describe('HexToRgb', () => {
  test('Converts 6 character hex to rgb', () => {
    expect(HexToRgb(hexColor)).toBe(rgbaColor);
  });

  test('Set opacity', () => {
    expect(HexToRgb(hexColor, 0.5)).toBe('rgba(41, 113, 255, 0.5)');
  });

  test('Convert shorthand', () => {
    expect(HexToRgb('03f')).toBe('rgba(0, 51, 255, 1)');
  });

  test('Invlaid color returns white', () => {
    // this is invalid because all letters must be lowercase
    expect(HexToRgb('03F')).toBe('rgba(255, 255, 255, 1)');
  });

  test('Null color value returns white', () => {
    expect(HexToRgb()).toBe('rgba(255, 255, 255, 1)');
  });
});
