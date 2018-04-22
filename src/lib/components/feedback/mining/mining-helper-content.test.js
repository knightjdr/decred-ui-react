import MiningHelperContent from './mining-helper-content';

describe('MiningHelperContent', () => {
  test('Returns content', () => {
    const wrapper = MiningHelperContent('#000', '#000', '#000', 40, 1.5);
    expect(wrapper).toMatchSnapshot();
  });
});
