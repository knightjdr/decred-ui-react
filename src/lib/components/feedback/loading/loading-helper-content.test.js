import LoadingHelperContent from './loading-helper-content';

describe('LoadingHelperContent', () => {
  test('Returns content', () => {
    const wrapper = LoadingHelperContent('#000', 20, 1.5);
    expect(wrapper).toMatchSnapshot();
  });
});
