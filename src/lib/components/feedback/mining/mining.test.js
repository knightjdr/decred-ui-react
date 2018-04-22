import React from 'react';
import { shallow } from 'enzyme';

import Color from '../../../shared/color';
import Content from './mining-helper-content';
import Mining from './mining';
import Scale from '../../../shared/scale';
import Theme from '../../../shared/theme';

// mocks
jest.mock('../../../shared/color');
jest.mock('./mining-helper-content');

// mock scale
jest.mock('../../../shared/scale');
Scale.mockReturnValue({
  containerScale: 40,
});

// mock theme
jest.mock('../../../shared/theme');
Theme.mockReturnValue({
  accent1: '#000',
  accent2: '#000',
  primary: '#000',
});

describe('Mining', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Renders with defaults', () => {
    Color.mockReturnValue(null);
    const wrapper = shallow(<Mining />);
    expect(wrapper).toMatchSnapshot();
    expect(Color).toHaveBeenCalledTimes(0);
    expect(Content).toHaveBeenCalledWith(
      '#000',
      '#000',
      '#000',
      40,
      1.6,
    );
    expect(Scale).toHaveBeenCalledTimes(1);
    expect(Scale).toHaveBeenCalledWith(1, { containerHeight: 40 });
    expect(Theme).toHaveBeenCalledTimes(1);
    expect(Theme).toHaveBeenCalledWith('primaryNegative', 'mining');
  });

  test('Top level container should have class matching componente', () => {
    Color.mockReturnValue(null);
    const wrapper = shallow(<Mining />);
    const container = wrapper.find('div').first();
    expect(container.hasClass('decred-ui-mining-container')).toBeTruthy();
  });

  test('Blockcolor changes color arg used for Content', () => {
    Color.mockReturnValue('#FD714A');
    shallow(<Mining blockColor="orange" />);
    expect(Color).toHaveBeenCalledTimes(1);
    expect(Content).toHaveBeenCalledWith(
      '#FD714A',
      '#000',
      '#000',
      40,
      1.6,
    );
  });

  test('Pickaxe changes color arg used for Content', () => {
    Color.mockReturnValue('#FD714A');
    shallow(<Mining pickAxeColor="orange" />);
    expect(Color).toHaveBeenCalledTimes(2);
    expect(Content).toHaveBeenCalledWith(
      '#000',
      '#FD714A',
      '#FD714A',
      40,
      1.6,
    );
  });
});
