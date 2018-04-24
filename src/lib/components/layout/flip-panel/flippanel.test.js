import React from 'react';
import { shallow } from 'enzyme';

import BoxShadow from '../../../shared/box-shadow';
import Color from '../../../shared/color';
import Content from './flippanel-content';
import FlipPanel from './flippanel';
import Theme from '../../../shared/theme-single-color';

// mocks
jest.mock('../../../shared/box-shadow');
jest.mock('../../../shared/color');
jest.mock('./flippanel-content');

// mock theme
jest.mock('../../../shared/theme-single-color');
Theme.mockReturnValue({ primary: '#000', text: '#000' });

describe('FlipPanel', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Renders with defaults', () => {
    BoxShadow.mockReturnValue('shadow');
    Color.mockReturnValue(null);
    const wrapper = shallow(<FlipPanel />);
    expect(wrapper).toMatchSnapshot();
    expect(BoxShadow).toHaveBeenCalledTimes(1);
    expect(BoxShadow).toHaveBeenCalledWith(true);
    expect(Color).toHaveBeenCalledTimes(2);
    expect(Color).toHaveBeenCalledWith(null);
    expect(Content).toHaveBeenCalledTimes(1);
    expect(Content).toHaveBeenCalledWith(
      'front',
      'back',
      '#000',
      '#000',
      200,
      'shadow',
      {},
    );
    expect(Theme).toHaveBeenCalledTimes(1);
    expect(Theme).toHaveBeenCalledWith('blue');
  });

  test('Top level container should have class matching component', () => {
    BoxShadow.mockReturnValue('shadow');
    Color.mockReturnValue(null);
    const wrapper = shallow(<FlipPanel />);
    const container = wrapper.find('button');
    expect(container.hasClass('decred-ui-flip-panel')).toBeTruthy();
  });

  test('Setting back prop changes arg used with Content', () => {
    BoxShadow.mockReturnValue('shadow');
    Color.mockReturnValue(null);
    shallow(<FlipPanel back="test" />);
    expect(Content).toHaveBeenCalledTimes(1);
    expect(Content).toHaveBeenCalledWith(
      'front',
      'test',
      '#000',
      '#000',
      200,
      'shadow',
      {},
    );
  });

  test('Setting backgroundColor prop changes arg used with Content', () => {
    BoxShadow.mockReturnValue('shadow');
    Color
      .mockReturnValueOnce('#FD714A')
      .mockReturnValueOnce('#000');
    shallow(<FlipPanel backgroundColor="orange" />);
    expect(Color).toHaveBeenCalledWith('orange');
    expect(Content).toHaveBeenCalledTimes(1);
    expect(Content).toHaveBeenCalledWith(
      'front',
      'back',
      '#FD714A',
      '#000',
      200,
      'shadow',
      {},
    );
  });

  test('Setting boxShadow prop to false changes arg used with Content', () => {
    BoxShadow.mockReturnValue(null);
    Color.mockReturnValueOnce(null);
    shallow(<FlipPanel boxShadow={false} />);
    expect(BoxShadow).toHaveBeenCalledTimes(1);
    expect(BoxShadow).toHaveBeenCalledWith(false);
    expect(Content).toHaveBeenCalledTimes(1);
    expect(Content).toHaveBeenCalledWith(
      'front',
      'back',
      '#000',
      '#000',
      200,
      null,
      {},
    );
  });

  test('Setting dim prop changes arg used with Content', () => {
    BoxShadow.mockReturnValue('shadow');
    Color.mockReturnValue(null);
    shallow(<FlipPanel dim={100} />);
    expect(Content).toHaveBeenCalledTimes(1);
    expect(Content).toHaveBeenCalledWith(
      'front',
      'back',
      '#000',
      '#000',
      100,
      'shadow',
      {},
    );
  });

  test('Setting front prop changes arg used with Content', () => {
    BoxShadow.mockReturnValue('shadow');
    Color.mockReturnValue(null);
    shallow(<FlipPanel front="test" />);
    expect(Content).toHaveBeenCalledTimes(1);
    expect(Content).toHaveBeenCalledWith(
      'test',
      'back',
      '#000',
      '#000',
      200,
      'shadow',
      {},
    );
  });

  test('Setting style prop changes arg used with Content', () => {
    BoxShadow.mockReturnValue('shadow');
    Color.mockReturnValue(null);
    const customStyle = { testProp: 'test' };
    shallow(<FlipPanel style={customStyle} />);
    expect(Content).toHaveBeenCalledTimes(1);
    expect(Content).toHaveBeenCalledWith(
      'front',
      'back',
      '#000',
      '#000',
      200,
      'shadow',
      customStyle,
    );
  });

  test('Setting textColor prop changes arg used with Content', () => {
    BoxShadow.mockReturnValue('shadow');
    Color
      .mockReturnValueOnce('#000')
      .mockReturnValueOnce('#FD714A');
    shallow(<FlipPanel textColor="orange" />);
    expect(Color).toHaveBeenCalledWith('orange');
    expect(Content).toHaveBeenCalledTimes(1);
    expect(Content).toHaveBeenCalledWith(
      'front',
      'back',
      '#000',
      '#FD714A',
      200,
      'shadow',
      {},
    );
  });

  test('Setting theme prop changes arg used with Theme', () => {
    BoxShadow.mockReturnValue('shadow');
    Color.mockReturnValue(null);
    shallow(<FlipPanel theme="darkBlue" />);
    expect(Theme).toHaveBeenCalledWith('darkBlue');
  });
});
