import { shallow } from 'enzyme';

import DividerContent from './divider-content';
import TextTransform from '../../../shared/text-transform';

jest.mock('../../../shared/text-transform');
TextTransform.mockReturnValue('text');

const icon = 'icon';
const text = 'text';
const iconOnly = false;
const textOnly = false;
const textColor = '#000000';
const fontSize = 20;
const fontSizeUpper = 15.6;
const children = null;
const textStyle = {};

describe('DividerContent', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Renders with icon and text', () => {
    const wrapper = shallow(DividerContent(
      icon,
      text,
      iconOnly,
      textOnly,
      textColor,
      fontSize,
      fontSizeUpper,
      children,
      textStyle,
    ));
    expect(wrapper).toMatchSnapshot();
    const iconElement = wrapper.find('.decred-ui-divider-icon');
    expect(iconElement.length).toBe(1);
    expect(iconElement.text()).toBe('icon');
    const textElement = wrapper.find('.decred-ui-divider-text');
    expect(textElement.length).toBe(1);
    expect(textElement.text()).toBe('text');
    expect(TextTransform).toHaveBeenCalledTimes(1);
    expect(TextTransform).toHaveBeenCalledWith(text, fontSize, fontSizeUpper);
  });

  test('Only renders icon', () => {
    const wrapper = shallow(DividerContent(
      icon,
      text,
      true,
      false,
      textColor,
      fontSize,
      fontSizeUpper,
      children,
      textStyle,
    ));
    expect(wrapper).toMatchSnapshot();
    const iconElement = wrapper.find('.decred-ui-divider-icon');
    expect(iconElement.length).toBe(1);
    const textElement = wrapper.find('.decred-ui-divider-text');
    expect(textElement.length).toBe(0);
  });

  test('Only renders text', () => {
    const wrapper = shallow(DividerContent(
      icon,
      text,
      false,
      true,
      textColor,
      fontSize,
      fontSizeUpper,
      children,
      textStyle,
    ));
    expect(wrapper).toMatchSnapshot();
    const iconElement = wrapper.find('.decred-ui-divider-icon');
    expect(iconElement.length).toBe(0);
    const textElement = wrapper.find('.decred-ui-divider-text');
    expect(textElement.length).toBe(1);
  });

  test('Renders both icon and text if both set to true', () => {
    const wrapper = shallow(DividerContent(
      icon,
      text,
      true,
      true,
      textColor,
      fontSize,
      fontSizeUpper,
      children,
      textStyle,
    ));
    const iconElement = wrapper.find('.decred-ui-divider-icon');
    expect(iconElement.length).toBe(1);
    const textElement = wrapper.find('.decred-ui-divider-text');
    expect(textElement.length).toBe(1);
  });

  test('Renders custom text color', () => {
    const wrapper = shallow(DividerContent(
      icon,
      text,
      false,
      false,
      '#FD714A',
      fontSize,
      fontSizeUpper,
      children,
      textStyle,
    ));
    const textElementStyle = wrapper.find('.decred-ui-divider-text').props().style;
    expect(textElementStyle).toHaveProperty('color', '#FD714A');
  });

  test('Renders with children instead of text', () => {
    const wrapper = shallow(DividerContent(
      icon,
      text,
      iconOnly,
      textOnly,
      textColor,
      fontSize,
      fontSizeUpper,
      'children',
      textStyle,
    ));
    const textElement = wrapper.find('.decred-ui-divider-text');
    expect(textElement.length).toBe(1);
    expect(textElement.text()).toBe('children');
    expect(TextTransform).toHaveBeenCalledTimes(0);
  });

  test('Renders with custom style and this style takes precedent', () => {
    const wrapper = shallow(DividerContent(
      icon,
      text,
      iconOnly,
      textOnly,
      textColor,
      fontSize,
      fontSizeUpper,
      children,
      {
        color: '#ffff00',
        testProp: 'test',
      },
    ));
    const textElement = wrapper.find('.decred-ui-divider-text');
    expect(textElement.length).toBe(1);
    expect(textElement.props().style).toHaveProperty('color', '#ffff00');
    expect(textElement.props().style).toHaveProperty('testProp', 'test');
  });
});
