import * as IndexExports from './index';

// modules to export with index
import Divider from './components/layout/divider/divider';
import FlipPanel from './components/layout/flip-panel/flip-panel';
import Header from './components/layout/header/header';
import Loading from './components/feedback/loading/loading';
import Mining from './components/feedback/mining/mining';
import RectangularButton from './components/buttons/rectangular/rectangular-button';
import RoundButton from './components/buttons/round/round-button';
import TextTransform from './components/text/text-transform-component';

describe('Index', () => {
  test('Has expected exported module number', () => {
    expect(Object.keys(IndexExports).length).toBe(8);
  });

  test('Exports Divider', () => {
    expect(IndexExports.Divider).toEqual(Divider);
  });

  test('Exports FlipPanel', () => {
    expect(IndexExports.FlipPanel).toEqual(FlipPanel);
  });

  test('Exports Header', () => {
    expect(IndexExports.Header).toEqual(Header);
  });

  test('Exports Loading', () => {
    expect(IndexExports.Loading).toEqual(Loading);
  });

  test('Exports Mining', () => {
    expect(IndexExports.Mining).toEqual(Mining);
  });

  test('Exports RectangularButton', () => {
    expect(IndexExports.RectangularButton).toEqual(RectangularButton);
  });

  test('Exports RoundButton', () => {
    expect(IndexExports.RoundButton).toEqual(RoundButton);
  });

  test('Exports TextTransform', () => {
    expect(IndexExports.TextTransform).toEqual(TextTransform);
  });
});
