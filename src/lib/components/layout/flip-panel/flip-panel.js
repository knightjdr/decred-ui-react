import React from 'react';
import PropTypes from 'prop-types';

import BoxShadow from '../../../shared/box-shadow';
import Color from '../../../shared/color';
import Content from './flip-panel-helper-content';
import Theme from '../../../shared/theme-single-color';

import './flip-panel.css';

const FlipPanel = ({
  back,
  backgroundColor,
  boxShadow,
  dim,
  front,
  style,
  textColor,
  theme,
}) => {
  const themeValues = Theme(theme);
  const content = Content(
    front,
    back,
    Color(backgroundColor) || themeValues.primary,
    Color(textColor) || themeValues.text,
    dim,
    BoxShadow(boxShadow),
    style,
  );
  return (
    <button className="decred-ui-flip-panel">
      {content}
    </button>
  );
};

FlipPanel.defaultProps = {
  back: 'back',
  backgroundColor: null,
  boxShadow: true,
  dim: 200,
  front: 'front',
  style: {},
  textColor: null,
  theme: 'blue',
};

FlipPanel.propTypes = {
  /** string or component to display on the back */
  back: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.string,
  ]),
  /** Custom background color. Overrides theme */
  backgroundColor: PropTypes.string,
  /** Add shadow */
  boxShadow: PropTypes.bool,
  /** Panel dimensions in pixels. Will be used for height and width */
  dim: PropTypes.number,
  /** String or component to display on the front */
  front: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.string,
  ]),
  /** Custom style */
  style: PropTypes.shape({}),
  /** Custom text color. Overrides theme */
  textColor: PropTypes.string,
  /** Color theme. Options: blue, darkBlue, turquoise or white */
  theme: PropTypes.string,
};

export default FlipPanel;
