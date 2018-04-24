import { shallow } from 'enzyme';

import RectangularButtonContent from './rectangularbutton-content';
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

describe('RectangularButtonContent', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Renders with icon and text', () => {
    const wrapper = shallow(RectangularButtonContent(
      icon,
      text,
      iconOnly,
      textOnly,
      textColor,
      fontSize,
      fontSizeUpper,
      children,
    ));
    expect(wrapper).toMatchSnapshot();
    const iconElement = wrapper.find('.decred-ui-rectangular-button-icon');
    expect(iconElement.length).toBe(1);
    expect(iconElement.text()).toBe('icon');
    const textElement = wrapper.find('.decred-ui-rectangular-button-text');
    expect(textElement.length).toBe(1);
    expect(textElement.text()).toBe('text');
    expect(TextTransform).toHaveBeenCalledTimes(1);
    expect(TextTransform).toHaveBeenCalledWith(text, fontSize, fontSizeUpper);
  });

  test('Only renders icon', () => {
    const wrapper = shallow(RectangularButtonContent(
      icon,
      text,
      true,
      false,
      textColor,
      fontSize,
      fontSizeUpper,
      children,
    ));
    expect(wrapper).toMatchSnapshot();
    const iconElement = wrapper.find('.decred-ui-rectangular-button-icon');
    expect(iconElement.length).toBe(1);
    const textElement = wrapper.find('.decred-ui-rectangular-button-text');
    expect(textElement.length).toBe(0);
  });

  test('Only renders text', () => {
    const wrapper = shallow(RectangularButtonContent(
      icon,
      text,
      false,
      true,
      textColor,
      fontSize,
      fontSizeUpper,
      children,
    ));
    expect(wrapper).toMatchSnapshot();
    const iconElement = wrapper.find('.decred-ui-rectangular-button-icon');
    expect(iconElement.length).toBe(0);
    const textElement = wrapper.find('.decred-ui-rectangular-button-text');
    expect(textElement.length).toBe(1);
  });

  test('Renders both icon and text if both set to true', () => {
    const wrapper = shallow(RectangularButtonContent(
      icon,
      text,
      true,
      true,
      textColor,
      fontSize,
      fontSizeUpper,
      children,
    ));
    const iconElement = wrapper.find('.decred-ui-rectangular-button-icon');
    expect(iconElement.length).toBe(1);
    const textElement = wrapper.find('.decred-ui-rectangular-button-text');
    expect(textElement.length).toBe(1);
  });

  test('Renders custom text color', () => {
    const wrapper = shallow(RectangularButtonContent(
      icon,
      text,
      false,
      false,
      '#FD714A',
      fontSize,
      fontSizeUpper,
      children,
    ));
    const textElementStyle = wrapper.find('.decred-ui-rectangular-button-text').props().style;
    expect(textElementStyle).toHaveProperty('color', '#FD714A');
  });

  test('Renders with children instead of text', () => {
    const wrapper = shallow(RectangularButtonContent(
      icon,
      text,
      iconOnly,
      textOnly,
      textColor,
      fontSize,
      fontSizeUpper,
      'children',
    ));
    const textElement = wrapper.find('.decred-ui-rectangular-button-text');
    expect(textElement.length).toBe(1);
    expect(textElement.text()).toBe('children');
    expect(TextTransform).toHaveBeenCalledTimes(0);
  });

  test('Renders with no inline text color when null', () => {
    const wrapper = shallow(RectangularButtonContent(
      icon,
      text,
      iconOnly,
      textOnly,
      null,
      fontSize,
      fontSizeUpper,
      children,
    ));
    const textElement = wrapper.find('.decred-ui-rectangular-button-text');
    expect(textElement.length).toBe(1);
    expect(textElement.props().style).not.toHaveProperty('color');
  });
});
