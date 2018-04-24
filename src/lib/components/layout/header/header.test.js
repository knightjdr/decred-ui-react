import React from 'react';
import { shallow } from 'enzyme';

import Color from '../../../shared/color';
import Content from './header-content';
import Header from './header';
import Logo from '../../../shared/logo';
import Scale from '../../../shared/scale';
import Theme from '../../../shared/theme';

// mocks
jest.mock('../../../shared/color');
jest.mock('./header-content');

// mock logo
jest.mock('../../../shared/logo');
Logo.mockReturnValue('logo');

// mock scale
jest.mock('../../../shared/scale');
Scale.mockReturnValue({ logoHeight: 20, fontSize: 18, fontSizeUpper: 18 });

// mock theme
jest.mock('../../../shared/theme');
Theme.mockReturnValue({ accent1: '#000', accent2: '#000', text: '#000' });

const customText = [{ case: 'lower', text: 'lower' }, { case: 'upper', text: 'upper' }];
const customTextString = 'custom text';
const defaultText = [{ case: 'lower', text: 'de' }, { case: 'upper', text: 'cred' }];
const scaleConfig = {
  logoHeight: 18,
  fontSize: 20,
  fontRatio: 0.78,
};

describe('Header', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Renders with defaults', () => {
    Color.mockReturnValue(null);
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
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
      {},
    );
    expect(Logo).toHaveBeenCalledTimes(1);
    expect(Logo).toHaveBeenCalledWith('#000', '#000', 20, 'dcr');
    expect(Scale).toHaveBeenCalledTimes(1);
    expect(Scale).toHaveBeenCalledWith(1, scaleConfig);
    expect(Theme).toHaveBeenCalledTimes(1);
    expect(Theme).toHaveBeenCalledWith('primaryPositive', 'header');
  });

  test('Top level container should have class matching component', () => {
    Color.mockReturnValue(null);
    const wrapper = shallow(<Header />);
    const container = wrapper.find('div').first();
    expect(container.props().className).toBe('decred-ui-header');
  });

  test('Children used for content', () => {
    Color.mockReturnValue(null);
    shallow(<Header>{customTextString}</Header>);
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
      {},
    );
  });

  test('Setting icon prop changes arg passed to Logo func', () => {
    Color.mockReturnValue(null);
    shallow(<Header icon="miner" />);
    expect(Logo).toHaveBeenCalledTimes(1);
    expect(Logo).toHaveBeenCalledWith('#000', '#000', 20, 'miner');
  });

  test('Setting iconColor prop changes arg passed to Logo func', () => {
    Color.mockReturnValue('#FD714A');
    shallow(<Header iconColor="orange" />);
    expect(Logo).toHaveBeenCalledTimes(1);
    expect(Logo).toHaveBeenCalledWith('#FD714A', '#FD714A', 20, 'dcr');
  });

  test('If iconOnly prop is true then true passed to Content func', () => {
    Color.mockReturnValue(null);
    shallow(<Header iconOnly />);
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
      {},
    );
  });

  test('Setting scale prop changes arg passed to Scale func', () => {
    Color.mockReturnValue(null);
    shallow(<Header scale={2} />);
    expect(Scale).toHaveBeenCalledTimes(1);
    expect(Scale).toHaveBeenCalledWith(2, scaleConfig);
  });

  test('Setting text prop changes arg passed to Content', () => {
    Color.mockReturnValue(null);
    shallow(<Header text={customText} />);
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
      {},
    );
  });

  test('Setting textColor prop changes arg passed to Logo func', () => {
    Color.mockReturnValue('#FD714A');
    shallow(<Header textColor="orange" />);
    expect(Logo).toHaveBeenCalledTimes(1);
    expect(Logo).toHaveBeenCalledWith('#FD714A', '#FD714A', 20, 'dcr');
  });

  test('If textOnly prop is true then true passed to Content func', () => {
    Color.mockReturnValue(null);
    shallow(<Header textOnly />);
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
      {},
    );
  });

  test('Setting textStyle prop changes arg passed to Content func', () => {
    Color.mockReturnValue(null);
    const customStyle = { backgroundColor: '#FD714A' };
    shallow(<Header textStyle={customStyle} />);
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
      customStyle,
    );
  });

  test('Setting theme prop changes arg passed to Theme func', () => {
    Color.mockReturnValue(null);
    shallow(<Header theme="blueOnTurquoise" />);
    expect(Theme).toHaveBeenCalledTimes(1);
    expect(Theme).toHaveBeenCalledWith('blueOnTurquoise', 'header');
  });
});
