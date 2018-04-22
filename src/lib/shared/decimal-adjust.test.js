import DecimalAdjust from './decimal-adjust';

const testNum = 1.136;

describe('DecimalAdjust', () => {
  test('No exp argument returns two decimals by default', () => {
    expect(DecimalAdjust(testNum)).toBe(1.14);
  });

  test('Non integer or negative exp argument returns original number', () => {
    expect(DecimalAdjust(testNum, -1)).toBe(testNum);
    expect(DecimalAdjust(testNum, 1.1)).toBe(testNum);
  });

  test('0 exp argument returns integer', () => {
    expect(DecimalAdjust(testNum, 0)).toBe(1);
  });

  test('1 exp argument returns one expimal', () => {
    expect(DecimalAdjust(testNum, 1)).toBe(1.1);
  });

  test('2 exp argument returns two expimals', () => {
    expect(DecimalAdjust(testNum, 2)).toBe(1.14);
  });

  test('3 exp argument returns three expimals', () => {
    expect(DecimalAdjust(testNum, 3)).toBe(testNum);
  });
});
