import { shallow } from 'enzyme';

import FlipPanelHelperContent from './flip-panel-helper-content';

describe('FlipPanelHelperContent', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Renders', () => {
    const wrapper = shallow(FlipPanelHelperContent(
      'front',
      'back',
      '#000',
      '#000',
      200,
      'shadow',
      {},
    ));
    expect(wrapper).toMatchSnapshot();
    const frontElement = wrapper.find('.decred-ui-flip-panel-front');
    expect(frontElement.text()).toBe('front');
    const backElement = wrapper.find('.decred-ui-flip-panel-back');
    expect(backElement.text()).toBe('back');
  });

  test('Has expected style', () => {
    const wrapper = shallow(FlipPanelHelperContent(
      'front',
      'back',
      '#fff',
      '#000',
      200,
      'shadow',
      {},
    ));
    const container = wrapper.find('.decred-ui-flip-panel-container');
    expect(container.props().style).toHaveProperty('backgroundColor', '#fff');
    expect(container.props().style).toHaveProperty('boxShadow', 'shadow');
    expect(container.props().style).toHaveProperty('color', '#000');
    expect(container.props().style).toHaveProperty('height', 200);
    expect(container.props().style).toHaveProperty('width', 200);
  });

  test('Custom style object can attach custom styles and takes precedent', () => {
    const wrapper = shallow(FlipPanelHelperContent(
      'front',
      'back',
      '#fff',
      '#000',
      200,
      'shadow',
      {
        backgroundColor: '#ffff00',
        textProp: 'test',
      },
    ));
    const container = wrapper.find('.decred-ui-flip-panel-container');
    expect(container.props().style).toHaveProperty('backgroundColor', '#ffff00');
    expect(container.props().style).toHaveProperty('textProp', 'test');
  });
});
