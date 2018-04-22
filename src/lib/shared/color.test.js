import Color from './color';

describe('Color', () => {
  test('No color or invalid string returns submitted value', () => {
    expect(Color()).toBeUndefined();
    expect(Color('#fff')).toBe('#fff');
  });

  test('Blue returns hex', () => {
    expect(Color('blue')).toBe('#2971ff');
  });

  test('darkBlue returns hex', () => {
    expect(Color('darkBlue')).toBe('#0c1e3e');
  });

  test('green returns hex', () => {
    expect(Color('green')).toBe('#41BF53');
  });

  test('lightBlue returns hex', () => {
    expect(Color('lightBlue')).toBe('#69D3F5');
  });

  test('orange returns hex', () => {
    expect(Color('orange')).toBe('#FD714A');
  });

  test('turquoise returns hex', () => {
    expect(Color('turquoise')).toBe('#2ed6A1');
  });

  test('white returns hex', () => {
    expect(Color('white')).toBe('#ffffff');
  });
});
