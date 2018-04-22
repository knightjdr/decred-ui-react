import shortid from 'shortid';
import { shallow } from 'enzyme';

import DecimalAdjust from './decimal-adjust';
import Logo from './logo';

// mock decimal adjust
jest.mock('./decimal-adjust');
DecimalAdjust.mockReturnValue(50);

// mock shortid
jest.mock('shortid');
shortid.generate.mockReturnValue('1234');

const color1 = '#ffffff';
const color2 = '#000000';
const height = 50;

describe('Logo', () => {
  test('Default return is dcr logo', () => {
    const wrapper = shallow(Logo(color1, color2, height));
    expect(wrapper.props().id).toBe('#dcr-1234');
  });

  test('Atomic arg returns atomic logo', () => {
    const wrapper = shallow(Logo(color1, color2, height, 'atomic'));
    expect(wrapper.props().id).toBe('#atomic-1234');
  });

  test('Guide arg returns guide logo', () => {
    const wrapper = shallow(Logo(color1, color2, height, 'guide'));
    expect(wrapper.props().id).toBe('#guide-1234');
  });

  test('Decrediton arg returns decrediton logo', () => {
    const wrapper = shallow(Logo(color1, color2, height, 'decrediton'));
    expect(wrapper.props().id).toBe('#decrediton-1234');
  });

  test('Lightning arg returns lightning logo', () => {
    const wrapper = shallow(Logo(color1, color2, height, 'lightning'));
    expect(wrapper.props().id).toBe('#lightning-1234');
  });

  test('Miner arg returns miner logo', () => {
    const wrapper = shallow(Logo(color1, color2, height, 'miner'));
    expect(wrapper.props().id).toBe('#miner-1234');
  });

  test('Politeia arg returns politeia logo', () => {
    const wrapper = shallow(Logo(color1, color2, height, 'politeia'));
    expect(wrapper.props().id).toBe('#politeia-1234');
  });

  test('Voting arg returns voting logo', () => {
    const wrapper = shallow(Logo(color1, color2, height, 'voting'));
    expect(wrapper.props().id).toBe('#voting-1234');
  });
});
