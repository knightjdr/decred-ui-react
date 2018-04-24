import React from 'react';
import { shallow } from 'enzyme';

import BoxShadow from '../../../shared/box-shadow';
import Color from '../../../shared/color';
import Logo from '../../../shared/logo';
import RoundButton from './roundbutton';
import Scale from '../../../shared/scale';
import Theme from '../../../shared/theme';

// mocks
jest.mock('../../../shared/box-shadow');
jest.mock('../../../shared/color');

// mock logo
jest.mock('../../../shared/logo');
Logo.mockReturnValue('logo');

// mock scale
jest.mock('../../../shared/scale');
Scale.mockReturnValue({
  containerScale: 40,
  logoHeight: 20,
});

// mock theme
jest.mock('../../../shared/theme');
Theme.mockReturnValue({
  accent1: '#000',
  accent2: '#000',
  className: 'decred-ui-button-primaryNegative',
  primary: '#000',
});

const defaultBoxshadow = '0px 6px 10px rgba(0, 0, 0, 0.1)';
const onClick = jest.fn();
const scaleConfig = {
  containerHeight: 50,
  logoHeight: 22,
};

describe('RoundButton', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Renders with defaults', () => {
    BoxShadow.mockReturnValue(defaultBoxshadow);
    Color.mockReturnValue(null);
    const wrapper = shallow(<RoundButton />);
    expect(wrapper).toMatchSnapshot();
    expect(BoxShadow).toHaveBeenCalledTimes(1);
    expect(BoxShadow).toHaveBeenCalledWith(true);
    expect(Color).toHaveBeenCalledTimes(2);
    expect(Color).toHaveBeenCalledWith(null);
    expect(Logo).toHaveBeenCalledTimes(1);
    expect(Logo).toHaveBeenCalledWith('#000', '#000', 20, 'dcr');
    expect(Scale).toHaveBeenCalledTimes(1);
    expect(Scale).toHaveBeenCalledWith(1, scaleConfig);
    expect(Theme).toHaveBeenCalledTimes(1);
    expect(Theme).toHaveBeenCalledWith('primaryNegative', 'button');
    const button = wrapper.find('button');
    expect(button.props().style).toHaveProperty('height', 40);
  });

  test('Clicking calls onClick function', () => {
    BoxShadow.mockReturnValue(defaultBoxshadow);
    Color.mockReturnValue(null);
    const wrapper = shallow(<RoundButton onClick={onClick} />);
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('Top level container should have class matching component, element and theme', () => {
    BoxShadow.mockReturnValue(defaultBoxshadow);
    Color.mockReturnValue(null);
    const wrapper = shallow(<RoundButton />);
    const container = wrapper.find('button');
    expect(container.hasClass('decred-ui-button')).toBeTruthy();
    expect(container.hasClass('decred-ui-round-button')).toBeTruthy();
    expect(container.hasClass('decred-ui-button-primaryNegative')).toBeTruthy();
  });

  test('Classname set on button element', () => {
    BoxShadow.mockReturnValue(defaultBoxshadow);
    Color.mockReturnValue(null);
    const wrapper = shallow(<RoundButton className="test-class" />);
    const container = wrapper.find('button');
    expect(container.hasClass('test-class')).toBeTruthy();
  });

  test('Setting box shadow to false changes button style', () => {
    BoxShadow.mockReturnValue(null);
    Color.mockReturnValue(null);
    const wrapper = shallow(<RoundButton boxShadow={false} />);
    const button = wrapper.find('button');
    expect(button.props().style).toHaveProperty('boxShadow', null);
  });

  test('Setting icon prop changes arg passed to Logo func', () => {
    BoxShadow.mockReturnValue(defaultBoxshadow);
    Color.mockReturnValue(null);
    shallow(<RoundButton icon="miner" />);
    expect(Logo).toHaveBeenCalledTimes(1);
    expect(Logo).toHaveBeenCalledWith('#000', '#000', 20, 'miner');
  });

  test('Setting iconColor prop changes arg passed to Logo func', () => {
    BoxShadow.mockReturnValue(defaultBoxshadow);
    Color.mockReturnValue('#FD714A');
    shallow(<RoundButton iconColor="orange" />);
    expect(Logo).toHaveBeenCalledTimes(1);
    expect(Logo).toHaveBeenCalledWith('#FD714A', '#FD714A', 20, 'dcr');
  });

  test('Setting scale prop changes arg passed to Scale func', () => {
    BoxShadow.mockReturnValue(defaultBoxshadow);
    Color.mockReturnValue(null);
    shallow(<RoundButton scale={2} />);
    expect(Scale).toHaveBeenCalledTimes(1);
    expect(Scale).toHaveBeenCalledWith(2, scaleConfig);
  });

  test('Setting textColor prop changes arg passed to Logo func', () => {
    BoxShadow.mockReturnValue(defaultBoxshadow);
    Color.mockReturnValue('#FD714A');
    shallow(<RoundButton textColor="orange" />);
    expect(Logo).toHaveBeenCalledTimes(1);
    expect(Logo).toHaveBeenCalledWith('#FD714A', '#FD714A', 20, 'dcr');
  });

  test('Setting theme prop changes arg passed to Theme func', () => {
    BoxShadow.mockReturnValue(defaultBoxshadow);
    Color.mockReturnValue(null);
    shallow(<RoundButton theme="blueOnTurquoise" />);
    expect(Theme).toHaveBeenCalledTimes(1);
    expect(Theme).toHaveBeenCalledWith('blueOnTurquoise', 'button');
  });

  test('Custom styles set on button element', () => {
    BoxShadow.mockReturnValue(null);
    Color.mockReturnValue(null);
    const customStyle = { backgroundColor: '#FD714A' };
    const wrapper = shallow(<RoundButton style={customStyle} />);
    const button = wrapper.find('.decred-ui-round-button');
    expect(button.props().style).toHaveProperty('backgroundColor', '#FD714A');
  });
});
