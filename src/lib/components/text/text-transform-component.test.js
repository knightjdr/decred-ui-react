import React from 'react';
import shortid from 'shortid';
import { shallow } from 'enzyme';

import Color from '../../shared/color';
import DecimalAdjust from '../../shared/decimal-adjust';
import TextTransform from './text-transform-component';

// mock color
jest.mock('../../shared/color');
Color.mockReturnValue('#fff');

// mock decimal adjust
jest.mock('../../shared/decimal-adjust');
DecimalAdjust.mockReturnValue(18);

// mock shortid
jest.mock('shortid');
shortid.generate.mockReturnValue('1234');

const children = [
  { case: 'lower', text: 'lower' },
  { case: 'upper', text: 'upper' },
  { case: 'mixed', text: 'mixed' },
];

afterAll(() => {
  Color.mockRestore();
  DecimalAdjust.mockRestore();
  shortid.generate.mockRestore();
});

describe('TextTransform', () => {
  test('Renders default text without children', () => {
    const wrapper = shallow(<TextTransform />);
    expect(wrapper).toMatchSnapshot();
    // should be 3 spans, one for wrapper, two for text
    expect(wrapper.find('span').length).toBe(3);
    const firstSpan = wrapper.find('span').at(1);
    expect(firstSpan.hasClass('decred-ui-text-lower')).toBeTruthy();
    expect(wrapper.find('span').at(1).text()).toBe('de');
    const secondSpan = wrapper.find('span').at(2);
    expect(secondSpan.hasClass('decred-ui-text-upper')).toBeTruthy();
    expect(secondSpan.text()).toBe('cred');
  });

  test('Renders with children', () => {
    const wrapper = shallow(<TextTransform>{children}</TextTransform>);
    expect(wrapper).toMatchSnapshot();
    // should be 4 spans, one for wrapper, three for text
    expect(wrapper.find('span').length).toBe(4);
    const firstSpan = wrapper.find('span').at(1);
    expect(firstSpan.hasClass('decred-ui-text-lower')).toBeTruthy();
    expect(firstSpan.text()).toBe('lower');
    const secondSpan = wrapper.find('span').at(2);
    expect(secondSpan.hasClass('decred-ui-text-upper')).toBeTruthy();
    expect(secondSpan.text()).toBe('upper');
    const thirdSpan = wrapper.find('span').at(3);
    expect(thirdSpan.hasClass('decred-ui-text-mixed')).toBeTruthy();
    expect(thirdSpan.text()).toBe('mixed');
  });
});
