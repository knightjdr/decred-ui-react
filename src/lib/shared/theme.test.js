import Theme, { Themes } from './theme';

describe('Theme', () => {
  test('Default theme', () => {
    expect(Theme('default', 'element')).toEqual({
      ...Themes.primaryNegative,
      ...{
        className: 'decred-ui-element-primaryNegative',
      },
    });
  });

  test('blueOnTurquoise theme', () => {
    expect(Theme('blueOnTurquoise', 'element')).toEqual({
      ...Themes.blueOnTurquoise,
      ...{
        className: 'decred-ui-element-blueOnTurquoise',
      },
    });
  });

  test('darkOnTurquoise theme', () => {
    expect(Theme('darkOnTurquoise', 'element')).toEqual({
      ...Themes.darkOnTurquoise,
      ...{
        className: 'decred-ui-element-darkOnTurquoise',
      },
    });
  });

  test('oneColorNegative theme', () => {
    expect(Theme('oneColorNegative', 'element')).toEqual({
      ...Themes.oneColorNegative,
      ...{
        className: 'decred-ui-element-oneColorNegative',
      },
    });
  });

  test('oneColorPositive theme', () => {
    expect(Theme('oneColorPositive', 'element')).toEqual({
      ...Themes.oneColorPositive,
      ...{
        className: 'decred-ui-element-oneColorPositive',
      },
    });
  });

  test('primaryBlue theme', () => {
    expect(Theme('primaryBlue', 'element')).toEqual({
      ...Themes.primaryBlue,
      ...{
        className: 'decred-ui-element-primaryBlue',
      },
    });
  });

  test('primaryNegative theme', () => {
    expect(Theme('primaryNegative', 'element')).toEqual({
      ...Themes.primaryNegative,
      ...{
        className: 'decred-ui-element-primaryNegative',
      },
    });
  });

  test('primaryPositive theme', () => {
    expect(Theme('primaryPositive', 'element')).toEqual({
      ...Themes.primaryPositive,
      ...{
        className: 'decred-ui-element-primaryPositive',
      },
    });
  });

  test('turquoiseOnBlue theme', () => {
    expect(Theme('turquoiseOnBlue', 'element')).toEqual({
      ...Themes.turquoiseOnBlue,
      ...{
        className: 'decred-ui-element-turquoiseOnBlue',
      },
    });
  });

  test('whiteOnBlue theme', () => {
    expect(Theme('whiteOnBlue', 'element')).toEqual({
      ...Themes.whiteOnBlue,
      ...{
        className: 'decred-ui-element-whiteOnBlue',
      },
    });
  });
});
