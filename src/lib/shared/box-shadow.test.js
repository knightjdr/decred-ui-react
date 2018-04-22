import BoxShadow from './box-shadow';

const shadowStyle = '0px 6px 10px rgba(0, 0, 0, 0.1)';

describe('BoxShadow', () => {
  test('False returns null', () => {
    expect(BoxShadow(false)).toBeNull();
  });

  test('Anything other than false returns box shadow', () => {
    expect(BoxShadow(true)).toBe(shadowStyle);
    expect(BoxShadow()).toBe(shadowStyle);
    expect(BoxShadow('false')).toBe(shadowStyle);
  });
});
