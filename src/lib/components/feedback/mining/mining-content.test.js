import MiningContent from './mining-content';

describe('MiningHelperContent', () => {
  test('Returns content', () => {
    const wrapper = MiningContent('#000', '#000', '#000', 40, 1.5);
    expect(wrapper).toMatchSnapshot();
  });
});
