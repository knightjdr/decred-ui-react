import BarsContent from './bars-content';

describe('BarsContent', () => {
  test('Renders', () => {
    const content = BarsContent();
    expect(content).toMatchSnapshot();
  });
});
