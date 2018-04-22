import ThemeSingleColor, { ThemesSingleColor } from './theme-single-color';

describe('ThemeSingleColor', () => {
  test('Default theme', () => {
    expect(ThemeSingleColor()).toEqual(ThemesSingleColor.blue);
  });

  test('Blue theme', () => {
    expect(ThemeSingleColor('blue')).toEqual(ThemesSingleColor.blue);
  });

  test('Dark theme', () => {
    expect(ThemeSingleColor('darkBlue')).toEqual(ThemesSingleColor.darkBlue);
  });

  test('Turquoise theme', () => {
    expect(ThemeSingleColor('turquoise')).toEqual(ThemesSingleColor.turquoise);
  });

  test('White theme', () => {
    expect(ThemeSingleColor('white')).toEqual(ThemesSingleColor.white);
  });
});
