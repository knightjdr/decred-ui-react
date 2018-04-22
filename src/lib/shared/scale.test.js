import DecimalAdjust from './decimal-adjust';
import Scale from './scale';

const expected = {
  containerScale: 40,
  fontSize: 22,
  fontSizeUpper: 17.16,
  logoHeight: 21,
  paddingLR: 8,
  paddingTB: 4,
};

// mock decimal adjust
jest.mock('./decimal-adjust');

describe('Scale', () => {
  test('Has keys', () => {
    DecimalAdjust
      .mockImplementation(() => (50));
    const scale = Scale();
    expect(scale).toHaveProperty('containerScale');
    expect(scale).toHaveProperty('fontSize');
    expect(scale).toHaveProperty('fontSizeUpper');
    expect(scale).toHaveProperty('logoHeight');
    expect(scale).toHaveProperty('paddingTB');
    expect(scale).toHaveProperty('paddingLR');
  });
});

describe('Scale integration with decimal adjust', () => {
  beforeAll(() => {
    DecimalAdjust
      .mockImplementation(require.requireActual('./decimal-adjust').default);
  });

  test('Returns scaled values', () => {
    const scale = Scale();
    expect(scale).toEqual(expected);
  });

  test('Returns with a scale of 1 for non numbers', () => {
    const scale = Scale('a');
    expect(scale).toEqual(expected);
  });
});
