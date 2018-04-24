import LoadingContent from './loading-content';

describe('LoadingHelperContent', () => {
  test('Returns content', () => {
    const wrapper = LoadingContent('#000', 20, 1.5);
    expect(wrapper).toMatchSnapshot();
  });
});
