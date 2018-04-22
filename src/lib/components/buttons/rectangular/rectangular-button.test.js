import React from 'react';
import { shallow } from 'enzyme';

import BoxShadow from '../../../shared/box-shadow';
import Color from '../../../shared/color';
import Content from './rectangular-button-helper-content';
import Logo from '../../../shared/logo';
import RectangularButton from './rectangular-button';
import Scale from '../../../shared/scale';
import Theme from '../../../shared/theme';

// mocks
jest.mock('../../../shared/box-shadow');
jest.mock('../../../shared/color');
jest.mock('./rectangular-button-helper-content');

// mock logo
jest.mock('../../../shared/logo');
Logo.mockReturnValue('logo');

// mock scale
jest.mock('../../../shared/scale');
Scale.mockReturnValue({
  containerScale: 40,
  fontSize: 18,
  fontSizeUpper: 18,
  logoHeight: 20,
  paddingLR: 8,
  paddingTB: 4,
});

// mock theme
jest.mock('../../../shared/theme');
Theme.mockReturnValue({
  accent1: '#000',
  accent2: '#000',
  className: 'decred-ui-button-primaryNegative',
  primary: '#000',
  text: '#000',
});

const customText = [{ case: 'lower', text: 'lower' }, { case: 'upper', text: 'upper' }];
const customTextString = 'custom text';
const defaultBoxshadow = '0px 6px 10px rgba(0, 0, 0, 0.1)';
const defaultText = [{ case: 'lower', text: 'de' }, { case: 'upper', text: 'cred' }];
const onClick = jest.fn();
const scaleConfig = {
  containerHeight: 40,
  fontSize: 22,
  fontRatio: 0.78,
  logoHeight: 21,
  paddingTB: 4,
  paddingRatio: 2.5,
};

describe('RectangularButton', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Renders with defaults', () => {
    BoxShadow.mockReturnValue(defaultBoxshadow);
    Color.mockReturnValue(null);
    const wrapper = shallow(<RectangularButton />);
    expect(wrapper).toMatchSnapshot();
    expect(BoxShadow).toHaveBeenCalledTimes(1);
    expect(BoxShadow).toHaveBeenCalledWith(true);
    expect(Color).toHaveBeenCalledTimes(3);
    expect(Color).toHaveBeenCalledWith(null);
    expect(Content).toHaveBeenCalledTimes(1);
    expect(Content).toHaveBeenCalledWith(
      'logo',
      defaultText,
      false,
      false,
      '#000',
      18,
      18,
      null,
    );
    expect(Logo).toHaveBeenCalledTimes(1);
    expect(Logo).toHaveBeenCalledWith('#000', '#000', 20, 'dcr');
    expect(Scale).toHaveBeenCalledTimes(1);
    expect(Scale).toHaveBeenCalledWith(1, scaleConfig);
    expect(Theme).toHaveBeenCalledTimes(1);
    expect(Theme).toHaveBeenCalledWith('primaryNegative', 'button');
    const button = wrapper.find('button');
    expect(button.props().style).toHaveProperty('fontSize', 18);
  });

  test('Clicking calls onClick function', () => {
    BoxShadow.mockReturnValue(defaultBoxshadow);
    Color.mockReturnValue(null);
    const wrapper = shallow(<RectangularButton onClick={onClick} />);
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('Top level container should have class matching component, element and theme', () => {
    BoxShadow.mockReturnValue(defaultBoxshadow);
    Color.mockReturnValue(null);
    const wrapper = shallow(<RectangularButton />);
    const container = wrapper.find('button');
    expect(container.hasClass('decred-ui-button')).toBeTruthy();
    expect(container.hasClass('decred-ui-rectangular-button')).toBeTruthy();
    expect(container.hasClass('decred-ui-button-primaryNegative')).toBeTruthy();
  });

  test('Classname set to button element', () => {
    BoxShadow.mockReturnValue(defaultBoxshadow);
    Color.mockReturnValue(null);
    const wrapper = shallow(<RectangularButton className="test-class" />);
    const container = wrapper.find('button');
    expect(container.hasClass('test-class')).toBeTruthy();
  });

  test('Setting box shadow to false changes button style', () => {
    BoxShadow.mockReturnValue(null);
    Color.mockReturnValue(null);
    const wrapper = shallow(<RectangularButton boxShadow={false} />);
    const button = wrapper.find('button');
    expect(button.props().style).toHaveProperty('boxShadow', null);
  });

  test('Children used for content', () => {
    BoxShadow.mockReturnValue(defaultBoxshadow);
    Color.mockReturnValue(null);
    shallow(<RectangularButton>{customTextString}</RectangularButton>);
    expect(Content).toHaveBeenCalledTimes(1);
    expect(Content).toHaveBeenCalledWith(
      'logo',
      defaultText,
      false,
      false,
      '#000',
      18,
      18,
      customTextString,
    );
  });

  test('Setting icon prop changes arg passed to Logo func', () => {
    BoxShadow.mockReturnValue(defaultBoxshadow);
    Color.mockReturnValue(null);
    shallow(<RectangularButton icon="miner" />);
    expect(Logo).toHaveBeenCalledTimes(1);
    expect(Logo).toHaveBeenCalledWith('#000', '#000', 20, 'miner');
  });

  test('Setting iconColor prop changes arg passed to Logo func', () => {
    BoxShadow.mockReturnValue(defaultBoxshadow);
    Color.mockReturnValue('#FD714A');
    shallow(<RectangularButton iconColor="orange" />);
    expect(Logo).toHaveBeenCalledTimes(1);
    expect(Logo).toHaveBeenCalledWith('#FD714A', '#FD714A', 20, 'dcr');
  });

  test('If iconOnly prop is true then true passed to Content func', () => {
    BoxShadow.mockReturnValue(defaultBoxshadow);
    Color.mockReturnValue(null);
    shallow(<RectangularButton iconOnly />);
    expect(Content).toHaveBeenCalledTimes(1);
    expect(Content).toHaveBeenCalledWith(
      'logo',
      defaultText,
      true,
      false,
      '#000',
      18,
      18,
      null,
    );
  });

  test('Setting scale prop changes arg passed to Scale func', () => {
    BoxShadow.mockReturnValue(defaultBoxshadow);
    Color.mockReturnValue(null);
    shallow(<RectangularButton scale={2} />);
    expect(Scale).toHaveBeenCalledTimes(1);
    expect(Scale).toHaveBeenCalledWith(2, scaleConfig);
  });

  test('Setting text prop changes arg passed to Content', () => {
    BoxShadow.mockReturnValue(defaultBoxshadow);
    Color.mockReturnValue(null);
    shallow(<RectangularButton text={customText} />);
    expect(Content).toHaveBeenCalledTimes(1);
    expect(Content).toHaveBeenCalledWith(
      'logo',
      customText,
      false,
      false,
      '#000',
      18,
      18,
      null,
    );
  });

  test('Setting textColor prop changes arg passed to Logo func', () => {
    BoxShadow.mockReturnValue(defaultBoxshadow);
    Color.mockReturnValue('#FD714A');
    shallow(<RectangularButton textColor="orange" />);
    expect(Logo).toHaveBeenCalledTimes(1);
    expect(Logo).toHaveBeenCalledWith('#FD714A', '#FD714A', 20, 'dcr');
  });

  test('If textOnly prop is true then true passed to Content func', () => {
    BoxShadow.mockReturnValue(defaultBoxshadow);
    Color.mockReturnValue(null);
    shallow(<RectangularButton textOnly />);
    expect(Content).toHaveBeenCalledTimes(1);
    expect(Content).toHaveBeenCalledWith(
      'logo',
      defaultText,
      false,
      true,
      '#000',
      18,
      18,
      null,
    );
  });

  test('Setting theme prop changes arg passed to Theme func', () => {
    BoxShadow.mockReturnValue(defaultBoxshadow);
    Color.mockReturnValue(null);
    shallow(<RectangularButton theme="blueOnTurquoise" />);
    expect(Theme).toHaveBeenCalledTimes(1);
    expect(Theme).toHaveBeenCalledWith('blueOnTurquoise', 'button');
  });

  test('Custom styles set on button element', () => {
    BoxShadow.mockReturnValue(null);
    Color.mockReturnValue(null);
    const customStyle = { backgroundColor: '#FD714A' };
    const wrapper = shallow(<RectangularButton style={customStyle} />);
    const button = wrapper.find('button');
    expect(button.props().style).toHaveProperty('backgroundColor', '#FD714A');
  });
});
