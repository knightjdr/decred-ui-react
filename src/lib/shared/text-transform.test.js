import shortid from 'shortid';
import TextTransform from './text-transform';

jest.mock('shortid');
shortid.mockReturnValue('abcd');

const text = [
  { case: 'lower', text: 'ab' },
  { case: 'mixed', text: 'cd' },
  { case: 'upper', text: 'de' },
];

describe('TextTransform', () => {
  test('Empty array returned for no text arg', () => {
    const textArray = TextTransform();
    expect(textArray).toEqual([]);
  });

  test('Text array mapped to spans', () => {
    const textArray = TextTransform(text);
    expect(textArray[0].type).toBe('span');
    expect(textArray[0].props.className).toBe('decred-ui-text-lower');
    expect(textArray[0].props.children).toBe('ab');
    expect(textArray[1].type).toBe('span');
    expect(textArray[1].props.className).toBe('decred-ui-text-mixed');
    expect(textArray[1].props.children).toBe('cd');
    expect(textArray[2].type).toBe('span');
    expect(textArray[2].props.className).toBe('decred-ui-text-upper');
    expect(textArray[2].props.children).toBe('de');
  });

  test('Font size set for different cases', () => {
    const textArray = TextTransform(text, 20, 10);
    expect(textArray[0].props.style).toHaveProperty('fontSize', 20);
    expect(textArray[1].props.style).toHaveProperty('fontSize', 20);
    expect(textArray[2].props.style).toHaveProperty('fontSize', 10);
  });
});
