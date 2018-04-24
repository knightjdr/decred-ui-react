import React from 'react';
import { shallow } from 'enzyme';

import Color from '../../../shared/color';
import Content from './loading-content';
import Loading from './loading';
import Scale from '../../../shared/scale';

// mocks
jest.mock('./loading-content');

// mock color
jest.mock('../../../shared/color');
Color.mockReturnValue('#000');

// mock scale
jest.mock('../../../shared/scale');
Scale.mockReturnValue({
  containerScale: 40,
});

describe('Loading', () => {
  test('Renders with defaults', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).toMatchSnapshot();
    expect(Color).toHaveBeenCalledTimes(1);
    expect(Color).toHaveBeenCalledWith('blue');
    expect(Content).toHaveBeenCalledWith(
      '#000',
      40,
      1.5,
    );
    expect(Scale).toHaveBeenCalledTimes(1);
    expect(Scale).toHaveBeenCalledWith(1, { containerHeight: 20 });
  });

  test('Top level container should have class matching componente', () => {
    const wrapper = shallow(<Loading />);
    const container = wrapper.find('div').first();
    expect(container.hasClass('decred-ui-loading-container')).toBeTruthy();
  });
});
